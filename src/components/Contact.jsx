import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
import { personalInfo } from "../data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "#6366f1",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "#8b5cf6",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: personalInfo.location,
      href: null,
      color: "#06b6d4",
    },
    {
      icon: <GithubIcon size={20} />,
      label: "GitHub",
      value: "github.com/sag-yadav",
      href: personalInfo.github,
      color: "#94a3b8",
    },
    {
      icon: <LinkedinIcon size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sagar-yadav-154a61257",
      href: personalInfo.linkedin,
      color: "#0ea5e9",
    },
    {
      icon: <span style={{ fontSize: "1rem" }}>🟢</span>,
      label: "GeeksForGeeks",
      value: "geeksforgeeks.org/profile/sagaryadav6q42",
      href: personalInfo.gfg,
      color: "#10b981",
    },
  ];

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          style={{ textAlign: "center", marginBottom: 60 }}
        >
          <div className="tag" style={{ margin: "0 auto 16px" }}>
            &lt;contact /&gt;
          </div>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Open to new opportunities — let's build something great together
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left — Contact Info */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 28, fontSize: "0.93rem" }}
            >
              I'm currently looking for new opportunities as a Java Backend Developer.
              Whether you have a question, a project idea, or just want to say hi — my inbox is always open!
            </motion.p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {contactItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <ContactItem item={item} />
                    </a>
                  ) : (
                    <ContactItem item={item} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            style={{
              padding: 28,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              backdropFilter: "blur(20px)",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 22 }}>
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.83rem", color: "#94a3b8", marginBottom: 7, fontWeight: 500 }}>
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Sagar Yadav"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontSize: "0.83rem", color: "#94a3b8", marginBottom: 7, fontWeight: 500 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="sagar@gmail.com"
                  style={inputStyle}
                  onFocus={(e) => Object.assign(e.target.style, inputFocusStyle)}
                  onBlur={(e) => Object.assign(e.target.style, inputStyle)}
                />
              </div>
              <div style={{ marginBottom: 24 }}>
                <label style={{ display: "block", fontSize: "0.83rem", color: "#94a3b8", marginBottom: 7, fontWeight: 500 }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  style={{ ...inputStyle, resize: "vertical", minHeight: 110 }}
                  onFocus={(e) => Object.assign(e.target.style, { ...inputFocusStyle, resize: "vertical" })}
                  onBlur={(e) => Object.assign(e.target.style, { ...inputStyle, resize: "vertical" })}
                />
              </div>
              <motion.button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {sent ? "✅ Message Sent!" : <><Send size={16} /> Send Message</>}
                </span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 36px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function ContactItem({ item }) {
  return (
    <motion.div
      whileHover={{ x: 4, background: "rgba(255,255,255,0.06)" }}
      style={{
        display: "flex", alignItems: "center", gap: 12,
        padding: "12px 16px",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 12,
        transition: "all 0.2s ease",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      <div style={{
        width: 38, height: 38, borderRadius: 10, flexShrink: 0,
        background: `${item.color}15`,
        border: `1px solid ${item.color}25`,
        display: "flex", alignItems: "center", justifyContent: "center",
        color: item.color,
      }}>
        {item.icon}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: "0.72rem", color: "#475569", fontWeight: 500, marginBottom: 2 }}>{item.label}</div>
        <div style={{
          fontSize: "0.85rem", color: "#e2e8f0", fontWeight: 500,
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{item.value}</div>
      </div>
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 10,
  color: "#f1f5f9",
  fontSize: "0.92rem",
  outline: "none",
  fontFamily: "'Inter', sans-serif",
  transition: "all 0.2s ease",
  boxSizing: "border-box",
};

const inputFocusStyle = {
  ...inputStyle,
  borderColor: "rgba(99,102,241,0.5)",
  background: "rgba(99,102,241,0.06)",
  boxShadow: "0 0 0 3px rgba(99,102,241,0.1)",
};
