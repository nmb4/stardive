import { torus } from "../geometry/torus";
import { clamp, lerp } from "../math/angle";
import { compose, type Mat4 } from "../math/mat4";
import * as quat from "../math/quat";
import type { Vec3 } from "../math/vec3";
import { createCamera, toWorld, type Camera } from "../scene/camera";
import type { FrameState, Simulation } from "../simulation";

const MAJOR = 0.92;
const MINOR = 0.36;
const SCALE = 2;
const ZOOM = 1.1;
const MIN_ZOOM = 0.7;
const MAX_ZOOM = 2.4;
const INITIAL_TILT = 0.55;
const MIN_TILT = -1.1;
const MAX_TILT = 1.1;
const IDLE_SPIN = 0.15;
const IDLE_RESUME = 2.5;
const BEAM_MIN = 8;
const LIGHT_Z = 0.6;

interface Point {
  readonly x: number;
  readonly y: number;
}

export interface DonutSimulation extends Simulation {
  aim(x: number, y: number): void;
  spinBy(dx: number, dy: number): void;
  zoomBy(factor: number): void;
  grab(): void;
  release(): void;
}

export function createDonutSimulation(width: number, height: number): DonutSimulation {
  const mesh = torus(MAJOR, MINOR);
  let size: readonly [number, number] = [width, height];
  let zoom = ZOOM;
  let camera: Camera = createCamera(width, height, zoom);
  let time = 0;
  let spin = 0;
  let tilt = INITIAL_TILT;
  let spinVelocity = 0;
  let tiltVelocity = 0;
  let autoSpin = IDLE_SPIN;
  let idle = 0;
  let dragging = false;
  let light: Point = { x: 0.24, y: 0.34 };

  const reframe = () => {
    camera = createCamera(size[0], size[1], zoom);
  };

  const model = (): Mat4 => {
    const turn = quat.fromAxisAngle([0, 1, 0], spin);
    const lean = quat.fromAxisAngle([1, 0, 0], tilt);
    return compose([0, 0, 0], quat.multiply(turn, lean), SCALE);
  };

  const step = (delta: number, _now: number, reducedMotion: boolean): FrameState => {
    if (!reducedMotion) {
      time += delta;
      idle += delta;
      if (dragging) autoSpin = 0;
      else if (idle > IDLE_RESUME) autoSpin = lerp(autoSpin, IDLE_SPIN, 0.04);

      spin += (autoSpin + spinVelocity) * delta;
      tilt += tiltVelocity * delta;
      const damping = Math.exp(-3.5 * delta);
      spinVelocity *= damping;
      tiltVelocity *= damping;
      tilt = clamp(tilt, MIN_TILT, MAX_TILT);
    }

    const [lightX, lightY] = toWorld(camera, light.x * camera.width, light.y * camera.height);
    const center: Vec3 = [0, 0, 0];
    let dx = lightX - center[0];
    let dy = lightY - center[1];
    const length = Math.hypot(dx, dy);
    if (length < 0.01) {
      dx = -0.6;
      dy = 0.4;
    } else {
      dx /= length;
      dy /= length;
    }

    const reach = Math.max(BEAM_MIN, Math.hypot(camera.width, camera.height) / camera.zoom);
    const start: Vec3 = [center[0] + dx * reach, center[1] + dy * reach, 0];
    const middle: Vec3 = [(start[0] + center[0]) * 0.5, (start[1] + center[1]) * 0.5, 0];

    return {
      camera,
      model: model(),
      path: [start, middle, center],
      hit: true,
      entry: [lightX, lightY, 0],
      entryDirection: [-dx, -dy, 0],
      center,
      rainbows: [
        { angle: 0.15, intensity: 0.5 },
        { angle: 1.35, intensity: 0.3 },
      ],
      lightDirection: [dx, dy, LIGHT_Z],
      lightIntensity: 2.2,
      ambient: 0.02,
      time,
      light: false,
      optics: null,
      backdrop: true,
    };
  };

  return {
    mesh,
    resize(nextWidth: number, nextHeight: number) {
      size = [nextWidth, nextHeight];
      reframe();
    },
    step,
    settled: () => false,
    get size() {
      return size;
    },
    aim(x: number, y: number) {
      light = { x: clamp(x, 0, 1), y: clamp(y, 0, 1) };
    },
    spinBy(dx: number, dy: number) {
      spin += dx * 0.008;
      spinVelocity = dx * 0.06;
      tilt += dy * 0.003;
      tiltVelocity = dy * 0.02;
      tilt = clamp(tilt, MIN_TILT, MAX_TILT);
      idle = 0;
      autoSpin = 0;
    },
    zoomBy(factor: number) {
      zoom = clamp(zoom * factor, MIN_ZOOM, MAX_ZOOM);
      reframe();
      idle = 0;
    },
    grab() {
      dragging = true;
      idle = 0;
      autoSpin = 0;
      spinVelocity = 0;
      tiltVelocity = 0;
    },
    release() {
      dragging = false;
      idle = 0;
    },
  };
}
