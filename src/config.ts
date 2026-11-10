/**
 * Stardive site and scene configuration.
 *
 * The scene values replace the old in-page control panel. Edit them here to
 * tune the prism; the landing page reads its copy from the same file.
 */
export const site = {
  name: "Stardive",
  domain: "stardive.io",
  url: "https://stardive.io",
  title: "Stardive — Dive into light",
  description:
    "A real-time glass prism for the web. Light enters, bends, and leaves as a spectrum, rendered live on WebGPU.",
  hero: {
    kicker: "A prism for the web",
    title: "Dive into light.",
    body: "Stardive is a real-time glass prism. Light enters, bends, and leaves as a spectrum — rendered live on WebGPU.",
    cue: "Drag to aim · scroll to turn",
  },
  nav: {
    links: [
      {
        label: "GitHub",
        href: "https://github.com/crafter-station/v-prism",
        external: true,
      },
    ],
  },
  action: {
    label: "Enter the prism",
  },
  footer: {
    note: "Built with WebGPU",
  },
} as const;

export const scene = {
  /** Base preset: "dark", "light" or "real". */
  preset: "dark",
  light: {
    rainbow: 3.0,
    bloom: 0.6,
    ambient: 0.0,
  },
  glass: {
    reflections: 0.1,
    glints: 4.0,
    roughness: 0.1,
    /** Index of refraction. */
    refraction: 1.24,
    thickness: 1.5,
    tint: "#ffffff",
    background: "#000000",
  },
  motion: {
    /** Degrees. */
    tilt: 0,
    turn: 0,
    spin: 0,
    zoom: 1.1,
    drift: 0.0,
  },
} as const;
