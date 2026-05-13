import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { navLinks } from "../data/portfolio";

function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // navbar height
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={scrolled ? "scrolled" : ""}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <motion.a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }}
          style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          whileHover={{ scale: 1.05 }}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 10,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 20px rgba(99,102,241,0.4)"
          }}>
            <Code2 size={20} color="white" />
          </div>
          <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#f1f5f9" }}>
            Sagar<span style={{ color: "#6366f1" }}>.</span>dev
          </span>
        </motion.a>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }} className="desktop-nav">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: active === id ? "#a5b4fc" : "#94a3b8",
                  background: active === id ? "rgba(99,102,241,0.12)" : "transparent",
                  border: active === id ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
                whileHover={{ color: "#a5b4fc", scale: 1.05 }}
              >
                {link.label}
              </motion.a>
            );
          })}
          <motion.a
            href="mailto:sagaryadav15052005@gmail.com"
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: "0.88rem" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Hire Me</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: "#f1f5f9", cursor: "pointer", display: "none" }}
          className="mobile-menu-btn"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              background: "rgba(10,10,15,0.95)",
              backdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              padding: "16px 24px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setMenuOpen(false);
                  // Small delay so menu closes before scroll
                  setTimeout(() => scrollToSection(link.href), 100);
                }}
                style={{
                  display: "block",
                  padding: "14px 0",
                  color: "#94a3b8",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  fontSize: "1rem",
                  fontWeight: 500,
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
