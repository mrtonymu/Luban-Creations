"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { ScrollReveal } from "./scroll-reveal";

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1400, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(target);
  }, [isInView, motionValue, target]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = Math.round(v).toString();
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

export function FilterSection() {
  return (
    <section
      style={{
        backgroundColor: "#1C1917",
        padding: "120px 24px",
        textAlign: "center",
      }}
    >
      <ScrollReveal>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px", marginBottom: "16px" }}>
          我们每年只接受
        </p>
      </ScrollReveal>

      <div
        style={{
          color: "#CA8A04",
          fontWeight: 900,
          lineHeight: 1,
          fontSize: "clamp(120px, 22vw, 180px)",
          letterSpacing: "-4px",
        }}
      >
        <CountUp target={6} />
      </div>

      <ScrollReveal delay={0.1}>
        <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "clamp(20px, 3vw, 28px)", marginTop: "16px" }}>
          个项目。
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.2}>
        <div style={{ marginTop: "48px", color: "rgba(255,255,255,0.6)", fontSize: "18px", lineHeight: 2 }}>
          <p>不是所有项目都适合我们。</p>
          <p>不是所有创始人都适合我们的方式。</p>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <div style={{ marginTop: "32px", color: "rgba(255,255,255,0.45)", fontSize: "16px", lineHeight: 2 }}>
          <p>在开始任何合作之前，</p>
          <p>我们一定会面对面见一次。</p>
          <p style={{ color: "rgba(255,255,255,0.7)", marginTop: "8px", fontSize: "18px" }}>
            互相了解，互相筛选。
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
