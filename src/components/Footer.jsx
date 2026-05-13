import { motion } from "framer-motion";
import { Mail, Code2, Heart } from "lucide-react";
import { personalInfo } from "../data/portfolio";

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "40px 0",
      background: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(20px)",
      position: "relative",
      zIndex: 1,
    }}>
      <div className="container">
        <div className="footer-inner">
          {/* Logo */}
          <motion.div
            style={{ display: "flex", alignItems: "center", gap: 10 }}
            whileHover={{ scale: 1.05 }}
          >
            <div style={{
              width: 34, height: 34, borderRadius: 8,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Code2 size={18} color="white" />
            </div>
            <span style={{ fontWeight: 700, color: "#f1f5f9" }}>
              Sagar<span style={{ color: "#6366f1" }}>.</span>dev
            </span>
          </motion.div>

          {/* Center text */}
          <p style={{ color: "#475569", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: 5, flexWrap: "wrap", justifyContent: "center" }}>
            Built with <Heart size={12} color="#ef4444" fill="#ef4444" /> using React & Framer Motion
          </p>

          {/* Social */}
          <div style={{ display: "flex", gap: 10 }}>
            {[
              { icon: <GithubIcon />, href: personalInfo.github },
              { icon: <LinkedinIcon />, href: personalInfo.linkedin },
              { icon: <Mail size={17} />, href: `mailto:${personalInfo.email}` },
              { icon: <span style={{ fontSize: "0.65rem", fontWeight: 700, color: "#10b981" }}>GFG</span>, href: personalInfo.gfg },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                style={{
                  width: 34, height: 34,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 8,
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: 20, color: "#334155", fontSize: "0.78rem" }}>
          © {new Date().getFullYear()} Sagar Kumar Yadav. All rights reserved.
        </div>
      </div>

      <style>{`
        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 600px) {
          .footer-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
          }
        }
      `}</style>
    </footer>
  );
}
