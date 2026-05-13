import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";

const GithubIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
import { projects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered
          ? "rgba(255,255,255,0.07)"
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? project.color + "50" : "rgba(255,255,255,0.08)"}`,
        borderRadius: 20,
        padding: 32,
        transition: "all 0.35s ease",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        boxShadow: hovered ? `0 20px 60px ${project.color}20` : "none",
        backdropFilter: "blur(20px)",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
      }}
    >
      {/* Background glow */}
      <div style={{
        position: "absolute",
        top: -60, right: -60,
        width: 200, height: 200,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${project.color}15, transparent)`,
        transition: "opacity 0.3s ease",
        opacity: hovered ? 1 : 0,
        pointerEvents: "none",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flex: 1, minWidth: 0 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 14, flexShrink: 0,
            background: `linear-gradient(135deg, ${project.color}30, ${project.color}10)`,
            border: `1px solid ${project.color}30`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.4rem",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
          }}>
            {project.icon}
          </div>
          <div style={{ minWidth: 0 }}>
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 4, wordBreak: "break-word" }}>{project.title}</h3>
            <span style={{
              display: "inline-block",
              fontSize: "0.72rem",
              color: project.color,
              fontFamily: "'JetBrains Mono', monospace",
              background: `${project.color}15`,
              padding: "2px 8px",
              borderRadius: 8,
              wordBreak: "break-word",
            }}>
              {project.subtitle}
            </span>
          </div>
        </div>

        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: 36, height: 36, flexShrink: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 10,
            color: "#94a3b8",
            textDecoration: "none",
          }}
        >
          <GithubIcon />
        </motion.a>
      </div>

      {/* Description */}
      <p style={{ color: "#94a3b8", fontSize: "0.92rem", lineHeight: 1.75, marginBottom: 24 }}>
        {project.description}
      </p>

      {/* Highlights */}
      <div style={{ marginBottom: 24 }}>
        {project.highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.15 + 0.3 + i * 0.08 }}
            style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}
          >
            <CheckCircle2 size={15} color={project.color} style={{ flexShrink: 0 }} />
            <span style={{ fontSize: "0.88rem", color: "#cbd5e1" }}>{h}</span>
          </motion.div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "4px 12px",
              background: `${project.color}12`,
              border: `1px solid ${project.color}25`,
              borderRadius: 20,
              fontSize: "0.75rem",
              fontWeight: 500,
              color: project.color,
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" style={{ background: "rgba(99,102,241,0.02)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="tag" style={{ margin: "0 auto 16px" }}>
            &lt;projects /&gt;
          </div>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Things I've built with Java & Spring Boot</p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          style={{ textAlign: "center", marginTop: 48 }}
        >
          <a
            href="https://github.com/sag-yadav"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
            style={{ display: "inline-flex" }}
          >
            <GithubIcon /> View All on GitHub
          </a>
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        @media (max-width: 768px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
