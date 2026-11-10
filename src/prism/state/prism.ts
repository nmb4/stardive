import { scene } from "@/config";
import { clamp, degToRad, radToDeg } from "../math/angle";
import { ZOOM_RANGE } from "../scene/camera";
import * as quat from "../math/quat";
import type { Quat } from "../math/quat";
import type { Vec3 } from "../math/vec3";
import { createStore } from "./store";

export interface Aim {
  readonly x: number;
  readonly y: number;
}

export interface PrismState {
  readonly rotation: Vec3;
  readonly zoom: number;
  readonly aim: Aim | null;
}

const INITIAL_ROTATION: Vec3 = [scene.motion.tilt, scene.motion.turn, scene.motion.spin];

export const prism = createStore<PrismState>({
  rotation: INITIAL_ROTATION,
  zoom: scene.motion.zoom,
  aim: null,
});

const AXES: readonly Vec3[] = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

export const orientation = (): Quat => {
  const [x, y, z] = prism.get().rotation.map(degToRad);
  return quat.fromEuler(x, y, z);
};

export function rotateBy(x: number, y: number, z: number): void {
  let q = orientation();
  [x, y, z].forEach((radians, axis) => {
    if (radians) q = quat.multiply(quat.fromAxisAngle(AXES[axis], radians), q);
  });
  prism.set({ rotation: quat.toEuler(q).map(radToDeg) as unknown as Vec3 });
}

export const setRotation = (rotation: Vec3): void => prism.set({ rotation });
export const setZoom = (zoom: number): void => prism.set({ zoom: clamp(zoom, ...ZOOM_RANGE) });
export const zoomBy = (factor: number): void => setZoom(prism.get().zoom * factor);
export const resetView = (): void => prism.set({ rotation: INITIAL_ROTATION, zoom: scene.motion.zoom });
export const aimAt = (aim: Aim): void => prism.set({ aim });
