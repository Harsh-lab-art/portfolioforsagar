import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { training, certifications } from "../data/portfolio";
import { Award, Clock, Building2 } from "lucide-react";

function TrainingCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      style={{
        display: "flex",
        gap: 20,
        padding: 28,
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 16,
        backdropFilter: "blur(20px)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
      }}
      whileHover={{
        background: "rgba(255,255,255,0.06)",
        borderColor: `${item.color}40`,
        y: -4,
        boxShadow: `0 16px 40px ${item.color}15`,
      }}
    >
      {/* Left accent bar */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: 3,
        background: `linear-gradient(to bottom, ${item.color}, transparent)`,
        borderRadius: "16px 0 0 16px",
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14, flexShrink: 0,
        background: `linear-gradient(135deg, ${item.color}25, ${item.color}10)`,
        border: `1px solid ${item.color}30`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: "1.4rem",
      }}>
        {item.icon}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
          <h3 style={{ fontWeight: 700, fontSize: "1rem" }}>{item.title}</h3>
          <span style={{
            display: "flex", alignItems: "center", gap: 5,
            padding: "3px 10px",
            background: `${item.color}15`,
            border: `1px solid ${item.color}25`,
            borderRadius: 20,
            fontSize: "0.72rem",
            color: item.color,
            fontFamily: "'JetBrains Mono', monospace",
            whiteSpace: "nowrap",
          }}>
            <Clock size={10} /> {item.duration}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <Building2 size={13} color="#6366f1" />
          <span style={{ color: "#6366f1", fontSize: "0.85rem", fontWeight: 500 }}>{item.provider}</span>
        </div>
        <p style={{ color: "#94a3b8", fontSize: "0.9rem", lineHeight: 1.7 }}>{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="tag" style={{ margin: "0 auto 16px" }}>
            &lt;experience /&gt;
          </div>
          <h2 className="section-title">
            Training & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">Industrial training and professional development</p>
        </motion.div>

        {/* Training */}
        <div style={{ marginBottom: 48 }}>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "#6366f1",
              fontFamily: "'JetBrains Mono', monospace",
              marginBottom: 24,
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <span style={{ color: "#475569" }}>//</span> Industrial Training
          </motion.h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {training.map((item, i) => (
              <TrainingCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3 }}
          style={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#6366f1",
            fontFamily: "'JetBrains Mono', monospace",
            marginBottom: 24,
            display: "flex", alignItems: "center", gap: 8,
          }}
        >
          <span style={{ color: "#475569" }}>//</span> Certifications
        </motion.h3>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -4, boxShadow: `0 16px 40px ${cert.color}15` }}
              style={{
                padding: 22,
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                backdropFilter: "blur(20px)",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 38, height: 38, borderRadius: 10, flexShrink: 0,
                  background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}10)`,
                  border: `1px solid ${cert.color}30`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Award size={17} color={cert.color} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <h4 style={{ fontWeight: 700, fontSize: "0.92rem" }}>{cert.title}</h4>
                  <span style={{ color: cert.color, fontSize: "0.78rem", fontWeight: 500 }}>{cert.issuer}</span>
                </div>
              </div>
              <p style={{ color: "#94a3b8", fontSize: "0.83rem", lineHeight: 1.6 }}>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .certs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        @media (max-width: 768px) {
          .certs-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
