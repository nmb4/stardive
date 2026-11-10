"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { site } from "@/config";
import { Prism } from "@/prism";
import { Star } from "./star";
import styles from "./landing.module.css";

export function Landing() {
  const [exploring, setExploring] = useState(false);
  const actionRef = useRef<HTMLButtonElement>(null);
  const exitRef = useRef<HTMLButtonElement>(null);
  const hasExplored = useRef(false);

  useEffect(() => {
    if (!exploring) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExploring(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [exploring]);

  useEffect(() => {
    if (exploring) {
      hasExplored.current = true;
      exitRef.current?.focus();
    } else if (hasExplored.current) {
      actionRef.current?.focus();
    }
  }, [exploring]);

  return (
    <main className={`${styles.page} ${exploring ? styles.exploring : ""}`}>
      <Prism hint={exploring} />

      <header className={styles.header} inert={exploring}>
        <Link className={styles.brand} href="/" aria-label={`${site.name} home`}>
          <Star className={styles.mark} />
          <span>{site.name}</span>
        </Link>

        <div className={styles.right}>
          <nav className={styles.nav} aria-label="Primary">
            {site.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button ref={actionRef} type="button" className={styles.action} onClick={() => setExploring(true)}>
            <span>{site.action.label}</span>
            <Arrow />
          </button>
        </div>
      </header>

      <section className={styles.hero} aria-labelledby="hero-title" inert={exploring}>
        <p className={styles.kicker}>{site.hero.kicker}</p>
        <h1 id="hero-title" className={styles.title}>
          {site.hero.title}
        </h1>
        <p className={styles.body}>{site.hero.body}</p>
        <p className={styles.cue}>{site.hero.cue}</p>
      </section>

      <footer className={styles.footer} inert={exploring}>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span className={styles.footerNote}>{site.footer.note}</span>
        <span>{site.domain}</span>
      </footer>

      {exploring && (
        <button ref={exitRef} type="button" className={styles.exit} onClick={() => setExploring(false)}>
          <span>Exit</span>
          <span aria-hidden="true">×</span>
        </button>
      )}
    </main>
  );
}

function Arrow() {
  return (
    <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path
        d="M2 6h8M6.5 2.5 10 6l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
