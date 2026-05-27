"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const WA_LINK =
  "https://wa.me/60111216693?text=" +
  encodeURIComponent("你好 Eddy，我想了解 Luban Creations 的服务");

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(250,250,249,0.95)" : "#FAFAF9",
        borderBottom: scrolled ? "1px solid #E7E5E4" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "all 200ms ease",
        padding: "0 24px",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        src="/logo.png"
        alt="Luban Creations"
        width={120}
        height={37}
        priority
        style={{ objectFit: "contain" }}
      />

      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#CA8A04",
          color: "#fff",
          fontWeight: 600,
          fontSize: "14px",
          padding: "10px 20px",
          borderRadius: "8px",
          textDecoration: "none",
          transition: "background-color 200ms ease",
          whiteSpace: "nowrap",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "#A16207")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "#CA8A04")
        }
      >
        WhatsApp 聊聊 →
      </a>
    </nav>
  );
}
