struct VertexOut {
  @builtin(position) position: vec4f,
  @location(0) uv: vec2f,
}

@vertex
fn vs_main(@builtin(vertex_index) index: u32) -> VertexOut {
  var clip = array<vec2f, 3>(vec2f(-1.0, -1.0), vec2f(3.0, -1.0), vec2f(-1.0, 3.0));
  var out: VertexOut;
  out.position = vec4f(clip[index], 0.0, 1.0);
  out.uv = clip[index] * vec2f(0.5, -0.5) + vec2f(0.5);
  return out;
}

@fragment
fn fs_main(in: VertexOut) -> @location(0) vec4f {
  let p = in.uv - vec2f(0.5);
  let center = exp(-dot(p, p) * 12.0);
  let violet = exp(-dot(p - vec2f(-0.34, 0.16), p - vec2f(-0.34, 0.16)) * 22.0);
  let amber = exp(-dot(p - vec2f(0.38, -0.24), p - vec2f(0.38, -0.24)) * 26.0);
  let color = vec3f(0.006, 0.008, 0.016)
    + center * vec3f(0.020, 0.034, 0.070)
    + violet * vec3f(0.045, 0.018, 0.060)
    + amber * vec3f(0.075, 0.030, 0.012);
  return vec4f(color, 1.0);
}
