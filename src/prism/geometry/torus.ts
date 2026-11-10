import type { Mesh } from "./tetrahedron";

/**
 * A smooth torus in the XY plane, centered on the origin. The glass pass only
 * needs positions, normals and indices; the tetrahedron-specific vertex and
 * centre lists stay empty.
 */
export function torus(
  majorRadius: number,
  minorRadius: number,
  majorSegments = 160,
  minorSegments = 80,
): Mesh {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const row = minorSegments + 1;

  for (let i = 0; i <= majorSegments; i++) {
    const u = (i / majorSegments) * Math.PI * 2;
    const cosU = Math.cos(u);
    const sinU = Math.sin(u);
    for (let j = 0; j <= minorSegments; j++) {
      const v = (j / minorSegments) * Math.PI * 2;
      const cosV = Math.cos(v);
      const sinV = Math.sin(v);
      const radius = majorRadius + minorRadius * cosV;
      positions.push(radius * cosU, radius * sinU, minorRadius * sinV);
      normals.push(cosV * cosU, cosV * sinU, sinV);
    }
  }

  for (let i = 0; i < majorSegments; i++) {
    for (let j = 0; j < minorSegments; j++) {
      const a = i * row + j;
      const b = (i + 1) * row + j;
      const c = (i + 1) * row + j + 1;
      const d = i * row + j + 1;
      indices.push(a, b, d, b, c, d);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint32Array(indices),
    vertices: [],
    centres: [],
  };
}
