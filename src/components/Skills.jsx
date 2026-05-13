import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "../data/portfolio";

const techIcons = {
  Java: "☕", SQL: "🗄️", "C++": "⚙️", C: "🔧",
  "Spring Boot": "🍃", "Spring MVC": "🌿", "Spring Security": "🔒",
  "Spring Data JPA": "📦", Hibernate: "🐻",
  MySQL: "🐬", JDBC: "🔗", Maven: "📋", Postman: "📮",
  "IntelliJ IDEA": "💡", Eclipse: "🌑", "VS Code": "💻", Git: "🌿",
  "RESTful APIs": "🔌", Thymeleaf: "🍃", Multithreading: "⚡",
};

function SkillBar({ name, level, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      style={{ marginBottom: 20 }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
        <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{name}</span>
        <span style={{ color: "#6366f1", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="tag" style={{ margin: "0 auto 16px" }}>
            &lt;skills /&gt;
          </div>
          <h2 className="section-title">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle">Technologies I work with daily</p>
        </motion.div>

        <div className="skills-grid">
          {/* Languages */}
          <motion.div
            className="glass-card"
            style={{ padding: 28 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>💻</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>Programming Languages</h3>
            </div>
            {skills.languages.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
            ))}
          </motion.div>

          {/* Frameworks */}
          <motion.div
            className="glass-card"
            style={{ padding: 28 }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.2rem", flexShrink: 0,
              }}>🍃</div>
              <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>Frameworks & Technologies</h3>
            </div>
            {skills.frameworks.map((s, i) => (
              <SkillBar key={s.name} name={s.name} level={s.level} delay={i * 0.1} />
            ))}
          </motion.div>
        </div>

        {/* Tools Grid */}
        <motion.div
          className="glass-card"
          style={{ padding: 28, marginTop: 28 }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10,
              background: "linear-gradient(135deg, #06b6d4, #10b981)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem", flexShrink: 0,
            }}>🛠️</div>
            <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>Tools & Technologies</h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {skills.tools.map((tool, i) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.05 }}
                whileHover={{ scale: 1.08, y: -2 }}
                style={{
                  display: "flex", alignItems: "center", gap: 7,
                  padding: "8px 14px",
                  background: "rgba(99,102,241,0.08)",
                  border: "1px solid rgba(99,102,241,0.2)",
                  borderRadius: 10,
                  fontSize: "0.83rem",
                  fontWeight: 500,
                  color: "#c7d2fe",
                  cursor: "default",
                  transition: "all 0.2s ease",
                }}
              >
                <span>{techIcons[tool] || "⚡"}</span>
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
