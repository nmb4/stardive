"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/config";
import { attachDonutPointer } from "@/prism/donut/pointer";
import { createDonutSimulation, type DonutSimulation } from "@/prism/donut/simulation";
import { createRenderer } from "@/prism/render/renderer";
import { diagnose, type Failure } from "@/prism/render/support";
import { settings, type Settings } from "@/prism/state/settings";
import { Star } from "../star";
import styles from "./donut.module.css";

const DONUT_GLASS = {
  ambient: 0.025,
  bloom: 0.4,
  reflections: 0.35,
  glints: 3,
  roughness: 0.12,
  ior: 1.4,
  thickness: 0.5,
} satisfies Partial<Settings>;

export function Donut() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const simulationRef = useRef<DonutSimulation | undefined>(undefined);
  const [failure, setFailure] = useState<Failure>();

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlay = overlayRef.current;
    if (!canvas || !overlay) return;
    const previous = settings.get();
    settings.set(DONUT_GLASS);
    const renderer = createRenderer(canvas, (width, height) => {
      const simulation = createDonutSimulation(width, height);
      simulationRef.current = simulation;
      return simulation;
    });
    renderer.ready.catch((error: unknown) => diagnose(error).then(setFailure));
    const detach = attachDonutPointer(overlay, () => simulationRef.current);
    return () => {
      detach();
      renderer.dispose();
      simulationRef.current = undefined;
      settings.set(previous);
    };
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.stage} aria-hidden="true">
        <canvas ref={canvasRef} className={styles.canvas} />
        <div ref={overlayRef} className={styles.overlay} />
      </div>

      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label={`${site.name} home`}>
          <Star className={styles.mark} />
          <span>{site.name}</span>
        </Link>
        <Link className={styles.back} href="/">
          <Arrow />
          <span>Back to the prism</span>
        </Link>
      </header>

      <section className={styles.copy} aria-labelledby="donut-title">
        <p className={styles.kicker}>Easter egg / 01</p>
        <h1 id="donut-title" className={styles.title}>
          Donut stop.
        </h1>
        <p className={styles.body}>A glass donut with a light you can move. Spin it, tilt it, zoom in.</p>
        <p className={styles.cue}>Drag to spin · move to aim · scroll to zoom</p>
      </section>

      <footer className={styles.footer}>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <Link href="/">{site.domain}</Link>
      </footer>

      {failure ? (
        <div className={styles.failure} role="status">
          <p>This glass donut needs WebGPU.</p>
          <p className={styles.remedy}>{explain(failure)}</p>
        </div>
      ) : null}
    </main>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M10 6H2M5.5 2.5 2 6l3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function explain(failure: Failure): string {
  switch (failure.reason) {
    case "insecure":
      return "WebGPU only runs on secure pages. Open this over HTTPS.";
    case "missing":
      return "This browser can’t run WebGPU yet.";
    case "blocked":
      return "WebGPU is switched off for this graphics device.";
    case "crashed":
      return failure.detail;
  }
}
