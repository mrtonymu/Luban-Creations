"use client";

import Image from "next/image";
import { Nav } from "@/components/nav";
import { FilterSection } from "@/components/filter-section";
import { ScrollReveal } from "@/components/scroll-reveal";

const WA_LINK =
  "https://wa.me/60111216693?text=" +
  encodeURIComponent("你好 Eddy，我想了解 Luban Creations 的服务");

const FORM_LINK = "https://luban.uwu.ai/#form";

const phases = [
  { num: "01", title: "重构", sub: "Restructure", desc: "重新梳理商业模式，找出可规模化的核心。" },
  { num: "02", title: "定位", sub: "Reposition", desc: "从市场和资本角度，重新定义品牌位置。" },
  { num: "03", title: "首店", sub: "First Store", desc: "把第一间旗舰店做出来，验证整个模型。" },
  { num: "04", title: "扩张", sub: "Scale", desc: "建立标准化体系，正式进入连锁复制阶段。" },
];

const cases = [
  { industry: "烘焙 · F&B", result: "从单店到连锁架构", detail: "重新设计可复制的运营模型", img: "/case-bakery.jpg" },
  { industry: "护肤 · Beauty", result: "从0到品牌媒体曝光", detail: "定位重构 + 首店商业化", img: "/case-skincare.jpg" },
  { industry: "科学 · Innovation", result: "行业首创品牌定位", detail: "建立资本可见度", img: "/case-science.jpg" },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Nav />

      {/* Section 1: Hero */}
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "120px 24px 80px", backgroundColor: "#FAFAF9" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <ScrollReveal>
            <h1 style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 900, color: "#1C1917", lineHeight: 1.15, marginBottom: "24px", letterSpacing: "-1px" }}>
              从一间店到连锁，<br />我们只做这一件事。
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "18px", color: "#44403C", marginBottom: "40px", lineHeight: 1.6 }}>
              From single store to scalable chain — this is all we do.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#CA8A04", color: "#fff", fontWeight: 600, fontSize: "16px", padding: "16px 36px", borderRadius: "10px", textDecoration: "none", transition: "background-color 200ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A16207")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#CA8A04")}
            >
              WhatsApp Eddy →
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: 90% Hook */}
      <section style={{ backgroundColor: "#1C1917", padding: "120px 24px", textAlign: "center" }}>
        <ScrollReveal>
          <div style={{ fontSize: "clamp(80px, 18vw, 160px)", fontWeight: 900, color: "#CA8A04", lineHeight: 1, letterSpacing: "-4px" }}>
            90%
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p style={{ color: "#FAFAF9", fontSize: "clamp(20px, 3vw, 26px)", marginTop: "24px", lineHeight: 1.7 }}>
            的连锁，在开第二间之前就死了。
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "18px", marginTop: "16px", lineHeight: 1.8 }}>
            不是因为产品不好。<br />是因为模式没有被设计好。
          </p>
        </ScrollReveal>
      </section>

      {/* Section 3: What We Do */}
      <section style={{ backgroundColor: "#FAFAF9", padding: "120px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          <ScrollReveal>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#CA8A04", marginBottom: "24px" }}>
              Luban Creations
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "#1C1917", lineHeight: 1.85 }}>
              我们是马来西亚专注连锁孵化与商业化的团队。<br /><br />
              从消费者 + 资本两个角度评估你的项目，<br />
              帮你建立可复制、可盈利、可融资的连锁模型，<br />
              然后和你一起把第一间旗舰店做出来。
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 4: 4 Phases */}
      <section style={{ backgroundColor: "#FAFAF9", padding: "0 24px 120px", borderTop: "1px solid #E7E5E4" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#CA8A04", marginBottom: "48px", marginTop: "80px", textAlign: "center" }}>
              我们怎么做 · How We Work
            </p>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", backgroundColor: "#E7E5E4", border: "1px solid #E7E5E4", borderRadius: "12px", overflow: "hidden" }}>
            {phases.map((p, i) => (
              <ScrollReveal key={p.num} delay={i * 0.08}>
                <div style={{ backgroundColor: "#FAFAF9", padding: "40px 32px" }}>
                  <div style={{ fontSize: "32px", fontWeight: 900, color: "#CA8A04", marginBottom: "12px" }}>{p.num}</div>
                  <div style={{ fontSize: "20px", fontWeight: 700, color: "#1C1917", marginBottom: "4px" }}>{p.title}</div>
                  <div style={{ fontSize: "12px", color: "#44403C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "16px" }}>{p.sub}</div>
                  <p style={{ fontSize: "14px", color: "#44403C", lineHeight: 1.7 }}>{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Filter "6" */}
      <FilterSection />

      {/* Section 6: Case Studies */}
      <section style={{ backgroundColor: "#FAFAF9", padding: "120px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <ScrollReveal>
            <p style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "4px", textTransform: "uppercase", color: "#CA8A04", marginBottom: "48px", textAlign: "center" }}>
              我们做过的项目 · Our Work
            </p>
          </ScrollReveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {cases.map((c, i) => (
              <ScrollReveal key={c.industry} delay={i * 0.1}>
                <div style={{ border: "1px solid #E7E5E4", borderRadius: "12px", overflow: "hidden", backgroundColor: "#fff" }}>
                  <div style={{ position: "relative", height: "220px" }}>
                    <Image src={c.img} alt={c.industry} fill style={{ objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: "24px" }}>
                    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "3px", textTransform: "uppercase", color: "#CA8A04", marginBottom: "8px" }}>{c.industry}</p>
                    <p style={{ fontSize: "18px", fontWeight: 700, color: "#1C1917", marginBottom: "6px" }}>{c.result}</p>
                    <p style={{ fontSize: "14px", color: "#44403C" }}>{c.detail}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Media Logos */}
          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: "64px", borderTop: "1px solid #E7E5E4", paddingTop: "40px", textAlign: "center" }}>
              <p style={{ fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#44403C", marginBottom: "24px" }}>
                媒体报道 · As Seen In
              </p>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "48px", flexWrap: "wrap", filter: "grayscale(100%)", opacity: 0.5 }}>
                <Image src="/sinchew.png" alt="星洲日报 Sin Chew Daily" width={100} height={40} style={{ objectFit: "contain" }} />
                <Image src="/chinapress.svg" alt="中国报 China Press" width={40} height={40} style={{ objectFit: "contain" }} />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section style={{ backgroundColor: "#FAFAF9", padding: "120px 24px", textAlign: "center", borderTop: "1px solid #E7E5E4" }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <ScrollReveal>
            <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, color: "#1C1917", lineHeight: 1.2, marginBottom: "24px" }}>
              你的项目，<br />准备好了吗？
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p style={{ fontSize: "18px", color: "#44403C", lineHeight: 1.8, marginBottom: "40px" }}>
              WhatsApp 我们，先聊 30 分钟。<br />
              适合，我们继续。不适合，我们直说。
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-block", backgroundColor: "#CA8A04", color: "#fff", fontWeight: 600, fontSize: "16px", padding: "18px 40px", borderRadius: "10px", textDecoration: "none", transition: "background-color 200ms ease", marginBottom: "20px" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#A16207")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#CA8A04")}
            >
              WhatsApp Eddy →
            </a>
            <p style={{ fontSize: "13px", color: "#44403C", marginBottom: "20px" }}>
              ✓ 48 小时内回复所有查询 &nbsp;·&nbsp; ✓ 不适合我们直说
            </p>
            <a href={FORM_LINK} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: "14px", color: "#44403C", textDecoration: "underline", cursor: "pointer" }}
            >
              或者先提交你的项目简介
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#1C1917", padding: "48px 24px", color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "24px" }}>
          <div>
            <Image src="/logo.png" alt="Luban Creations" width={100} height={31} style={{ objectFit: "contain", filter: "invert(1)", opacity: 0.7 }} />
            <p style={{ marginTop: "12px" }}>从一间店到连锁，我们只做这一件事。</p>
            <p style={{ marginTop: "4px" }}>Luban Creations Sdn Bhd · SSM 1293907-A</p>
            <p style={{ marginTop: "4px" }}>A-10-02, Menara The Met, Jalan Dutamas 2, 50480 Kuala Lumpur</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p>WhatsApp: 011-1121 6693</p>
            <div style={{ marginTop: "12px", display: "flex", gap: "16px", justifyContent: "flex-end" }}>
              <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</a>
            </div>
            <p style={{ marginTop: "12px" }}>© 2025 Luban Creations. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
