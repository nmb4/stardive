import type { DonutSimulation } from "./simulation";

interface Point {
  readonly x: number;
  readonly y: number;
}

export function attachDonutPointer(
  element: HTMLElement,
  getSimulation: () => DonutSimulation | undefined,
): () => void {
  const pointers = new Map<number, Point>();
  let pinch = 0;

  const aim = (event: PointerEvent) => {
    getSimulation()?.aim(event.clientX / window.innerWidth, event.clientY / window.innerHeight);
  };

  const down = (event: PointerEvent) => {
    if (event.button !== 0) return;
    element.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    getSimulation()?.grab();
    if (pointers.size === 2) {
      const [a, b] = [...pointers.values()];
      pinch = Math.hypot(a.x - b.x, a.y - b.y);
    }
    aim(event);
  };

  const move = (event: PointerEvent) => {
    aim(event);
    const previous = pointers.get(event.pointerId);
    if (!previous) return;
    const next = { x: event.clientX, y: event.clientY };
    if (pointers.size === 2) {
      pointers.set(event.pointerId, next);
      const [a, b] = [...pointers.values()];
      const distance = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch > 0) getSimulation()?.zoomBy(distance / pinch);
      pinch = distance;
    } else if (pointers.size === 1) {
      getSimulation()?.spinBy(next.x - previous.x, next.y - previous.y);
      pointers.set(event.pointerId, next);
    }
  };

  const up = (event: PointerEvent) => {
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinch = 0;
    if (pointers.size === 0) getSimulation()?.release();
  };

  const wheel = (event: WheelEvent) => {
    event.preventDefault();
    getSimulation()?.zoomBy(Math.exp(-event.deltaY * 0.0015));
  };

  element.addEventListener("pointerdown", down);
  element.addEventListener("pointermove", move);
  element.addEventListener("pointerup", up);
  element.addEventListener("pointercancel", up);
  element.addEventListener("wheel", wheel, { passive: false });

  return () => {
    element.removeEventListener("pointerdown", down);
    element.removeEventListener("pointermove", move);
    element.removeEventListener("pointerup", up);
    element.removeEventListener("pointercancel", up);
    element.removeEventListener("wheel", wheel);
  };
}
