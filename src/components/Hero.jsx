import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { personalInfo } from "../data/portfolio";

function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

// SVG icons for brands not in this lucide version
const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const roles = [
  "Java Backend Developer",
  "Spring Boot Engineer",
  "RESTful API Builder",
  "Full Stack Learner",
];

function TypingText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span style={{ color: "#a5b4fc", fontFamily: "'JetBrains Mono', monospace" }}>
      {displayed}
      <span className="cursor" />
    </span>
  );
}

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function Hero() {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 100 }}>
      <div className="container">
        <div className="hero-grid">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981",
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }} />
                <span style={{ color: "#10b981", fontSize: "0.85rem", fontWeight: 500, fontFamily: "'JetBrains Mono', monospace" }}>
                  Available for opportunities
                </span>
              </div>

              <h1 className="hero-title">
                Hi, I'm{" "}
                <span className="gradient-text">Sagar</span>
                <br />
                Kumar Yadav
              </h1>

              <div style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: 20, minHeight: 36 }}>
                <TypingText />
              </div>

              <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.8, marginBottom: 28, maxWidth: 480 }}>
                {personalInfo.bio}
              </p>

              {/* Info chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                {[
                  { icon: <MapPin size={13} />, text: personalInfo.location },
                  { icon: <Mail size={13} />, text: "sagaryadav15052005@gmail.com" },
                  { icon: <Phone size={13} />, text: personalInfo.phone },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    style={{
                      display: "flex", alignItems: "center", gap: 6,
                      padding: "5px 12px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 20,
                      fontSize: "0.78rem",
                      color: "#94a3b8",
                      maxWidth: "100%",
                      overflow: "hidden",
                    }}
                  >
                    <span style={{ color: "#6366f1", flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Buttons */}
              <motion.div
                style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a href="#projects" className="btn-primary" onClick={(e) => { e.preventDefault(); scrollToSection("#projects"); }}>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    View Projects <ArrowDown size={16} />
                  </span>
                </a>
                <a href="mailto:sagaryadav15052005@gmail.com" className="btn-outline">
                  <Mail size={16} /> Contact Me
                </a>
              </motion.div>

              {/* Social Links */}
              <motion.div
                style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                {[
                  { icon: <GithubIcon />, href: personalInfo.github, label: "GitHub" },
                  { icon: <LinkedinIcon />, href: personalInfo.linkedin, label: "LinkedIn" },
                  { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
                  {
                    icon: <span style={{ fontSize: "0.75rem", fontWeight: 700, lineHeight: 1 }}>GFG</span>,
                    href: personalInfo.gfg,
                    label: "GeeksForGeeks",
                  },
                ].map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 44, height: 44,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: 12,
                      color: "#94a3b8",
                      textDecoration: "none",
                      transition: "all 0.2s ease",
                    }}
                    title={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right — Avatar */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            className="hero-avatar-wrap"
          >
            <div style={{ position: "relative" }}>
              {/* Main avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hero-avatar"
              >
                <div style={{
                  position: "absolute", inset: 0,
                  background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.15), transparent 60%)",
                }} />
                <span style={{ fontSize: "5rem", filter: "drop-shadow(0 0 20px rgba(99,102,241,0.5))" }}>☕</span>
              </motion.div>

              {/* Floating badges — hidden on very small screens via CSS */}
              {[
                { text: "Spring Boot", color: "#6366f1", top: "5%", right: "-8%" },
                { text: "Java", color: "#f59e0b", bottom: "15%", left: "-10%" },
                { text: "MySQL", color: "#10b981", top: "40%", right: "-12%" },
                { text: "REST APIs", color: "#8b5cf6", bottom: "5%", right: "5%" },
              ].map((badge, i) => (
                <motion.div
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.15, type: "spring" }}
                  className="hero-badge"
                  style={{
                    position: "absolute",
                    top: badge.top, bottom: badge.bottom,
                    left: badge.left, right: badge.right,
                    padding: "6px 12px",
                    background: "rgba(10,10,15,0.9)",
                    border: `1px solid ${badge.color}40`,
                    borderRadius: 20,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: badge.color,
                    backdropFilter: "blur(10px)",
                    boxShadow: `0 0 20px ${badge.color}20`,
                    whiteSpace: "nowrap",
                  }}
                >
                  {badge.text}
                </motion.div>
              ))}

              {/* Rings */}
              <div style={{
                position: "absolute", inset: -20, borderRadius: "50%",
                border: "1px solid rgba(99,102,241,0.15)",
                animation: "spin 20s linear infinite",
              }} />
              <div style={{
                position: "absolute", inset: -40, borderRadius: "50%",
                border: "1px dashed rgba(99,102,241,0.08)",
                animation: "spin 30s linear infinite reverse",
              }} />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          style={{ display: "flex", justifyContent: "center", marginTop: 48 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection("#skills"); }} style={{ color: "#475569", textDecoration: "none" }}>
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #10b981; }
          50% { opacity: 0.6; box-shadow: 0 0 20px #10b981; }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .hero-title {
          font-size: 3.2rem;
          font-weight: 900;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .hero-avatar-wrap {
          display: flex;
          justify-content: center;
        }

        .hero-avatar {
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.2));
          border: 2px solid rgba(99,102,241,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 80px rgba(99,102,241,0.2), inset 0 0 80px rgba(99,102,241,0.05);
          position: relative;
          overflow: hidden;
        }

        @media (max-width: 900px) {
          .hero-grid {
            gap: 40px;
          }
          .hero-avatar { width: 220px; height: 220px; }
          .hero-title { font-size: 2.6rem; }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 48px;
          }
          .hero-title { font-size: 2.2rem !important; }
          .hero-avatar-wrap { order: -1; }
          .hero-avatar { width: 200px; height: 200px; }
          .hero-badge { display: none; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 1.9rem !important; }
          .hero-avatar { width: 170px; height: 170px; }
        }
      `}</style>
    </section>
  );
}
