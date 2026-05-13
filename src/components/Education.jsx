import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "../data/portfolio";
import { GraduationCap, Star, BookOpen } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" style={{ background: "rgba(99,102,241,0.02)" }}>
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="tag" style={{ margin: "0 auto 16px" }}>
            &lt;education /&gt;
          </div>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="section-subtitle">My educational journey</p>
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              maxWidth: 700,
              margin: "0 auto",
            }}
          >
            <motion.div
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(99,102,241,0.15)" }}
              style={{
                padding: 40,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 20,
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decoration */}
              <div style={{
                position: "absolute",
                top: -40, right: -40,
                width: 180, height: 180,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99,102,241,0.08), transparent)",
                pointerEvents: "none",
              }} />

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                {/* Icon */}
                <div style={{
                  width: 56, height: 56, borderRadius: 16, flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))",
                  border: "1px solid rgba(99,102,241,0.3)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 30px rgba(99,102,241,0.2)",
                }}>
                  <GraduationCap size={26} color="#a5b4fc" />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ fontWeight: 800, fontSize: "1.1rem", flex: 1, minWidth: 0 }}>{edu.degree}</h3>
                    {/* CGPA Badge */}
                    <div style={{
                      display: "flex", alignItems: "center", gap: 5,
                      padding: "6px 12px",
                      background: "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))",
                      border: "1px solid rgba(99,102,241,0.3)",
                      borderRadius: 10,
                      flexShrink: 0,
                    }}>
                      <Star size={13} color="#fbbf24" fill="#fbbf24" />
                      <span style={{ fontWeight: 700, color: "#a5b4fc", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.85rem" }}>
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: "#6366f1", fontWeight: 600, fontSize: "1rem", marginBottom: 6 }}>
                    {edu.institution}
                  </p>
                  <p style={{
                    color: "#475569",
                    fontSize: "0.85rem",
                    fontFamily: "'JetBrains Mono', monospace",
                    marginBottom: 24,
                  }}>
                    📅 {edu.period}
                  </p>

                  {/* Courses */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                      <BookOpen size={15} color="#6366f1" />
                      <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#94a3b8" }}>
                        Relevant Coursework
                      </span>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {edu.courses.map((course, j) => (
                        <motion.span
                          key={course}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.4 + j * 0.08 }}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            padding: "6px 14px",
                            background: "rgba(99,102,241,0.1)",
                            border: "1px solid rgba(99,102,241,0.2)",
                            borderRadius: 20,
                            fontSize: "0.82rem",
                            color: "#c7d2fe",
                            fontWeight: 500,
                          }}
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="edu-stats"
        >
          {[
            { label: "CGPA", value: "8.01", icon: "⭐" },
            { label: "Graduation", value: "2026", icon: "🎓" },
            { label: "Projects", value: "2+", icon: "💻" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(99,102,241,0.15)" }}
              style={{
                padding: "20px 16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                textAlign: "center",
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "1.6rem", marginBottom: 8 }}>{stat.icon}</div>
              <div style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: 4,
              }}>
                {stat.value}
              </div>
              <div style={{ color: "#64748b", fontSize: "0.8rem", fontWeight: 500 }}>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .edu-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          max-width: 700px;
          margin: 28px auto 0;
        }
        @media (max-width: 480px) {
          .edu-stats { grid-template-columns: repeat(3, 1fr); gap: 10px; }
          .edu-stats > div { padding: 14px 8px !important; }
        }
      `}</style>
    </section>
  );
}
