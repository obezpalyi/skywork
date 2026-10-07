import { useState } from "react";
import { motion } from "framer-motion";
import { Award, Printer, Download } from "lucide-react";

// ─── Decorative corner ornament ──────────────────────────────────────────────
const CornerOrnament = ({ position }: { position: "tl" | "tr" | "bl" | "br" }) => {
  const scaleX = position === "tr" || position === "br" ? -1 : 1;
  const scaleY = position === "bl" || position === "br" ? -1 : 1;
  return (
    <svg
      width="72" height="72" viewBox="0 0 72 72" fill="none"
      style={{ transform: `scale(${scaleX},${scaleY})`, transformOrigin: "center", display: "block" }}
    >
      <path d="M6 6 L6 34" stroke="#1a2a6c" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 6 L34 6" stroke="#1a2a6c" strokeWidth="3" strokeLinecap="round" />
      <path d="M6 6 L22 22" stroke="#8FB900" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="6" cy="6" r="3.5" fill="#8FB900" />
      <circle cx="22" cy="22" r="2" fill="#8FB900" opacity="0.45" />
    </svg>
  );
};

// ─── Certificate data type ────────────────────────────────────────────────────
interface CertificateData {
  recipientName: string;
  courseTitle: string;
  completionDate: string;
  instructorName: string;
  directorName: string;
  certificateId: string;
}

// ─── Certificate (print target) ───────────────────────────────────────────────
const Certificate = ({ data }: { data: CertificateData }) => (
  <div
    id="certificate-print"
    style={{
      position: "relative",
      width: "1050px",
      height: "742px",
      background: "#ffffff",
      fontFamily: "'Montserrat', 'Inter', sans-serif",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}
  >
    {/* ── Border frames ── */}
    <div style={{ position: "absolute", inset: "14px", border: "3px solid #1a2a6c", pointerEvents: "none", zIndex: 10 }} />
    <div style={{ position: "absolute", inset: "22px", border: "1px solid #8FB900", pointerEvents: "none", zIndex: 10 }} />

    {/* ── Corner ornaments ── */}
    {(["tl","tr","bl","br"] as const).map((pos) => (
      <div key={pos} style={{
        position: "absolute",
        top:    pos.startsWith("t") ? 8  : undefined,
        bottom: pos.startsWith("b") ? 8  : undefined,
        left:   pos.endsWith("l")   ? 8  : undefined,
        right:  pos.endsWith("r")   ? 8  : undefined,
        zIndex: 11,
      }}>
        <CornerOrnament position={pos} />
      </div>
    ))}

    {/* ── Navy top stripe ── */}
    <div style={{
      position: "absolute", top: 14, left: 14, right: 14, height: 7,
      background: "linear-gradient(90deg, #0d1b4b 0%, #1a2a6c 50%, #0d1b4b 100%)",
      zIndex: 5,
    }} />
    {/* Gold hairline under top stripe */}
    <div style={{
      position: "absolute", top: 23, left: 32, right: 32, height: 2,
      background: "linear-gradient(90deg, transparent, #8FB900 18%, #8FB900 82%, transparent)",
      zIndex: 5,
    }} />

    {/* ── Navy bottom stripe ── */}
    <div style={{
      position: "absolute", bottom: 14, left: 14, right: 14, height: 7,
      background: "linear-gradient(90deg, #0d1b4b 0%, #1a2a6c 50%, #0d1b4b 100%)",
      zIndex: 5,
    }} />
    {/* Gold hairline above bottom stripe */}
    <div style={{
      position: "absolute", bottom: 23, left: 32, right: 32, height: 2,
      background: "linear-gradient(90deg, transparent, #8FB900 18%, #8FB900 82%, transparent)",
      zIndex: 5,
    }} />

    {/* ── Left teal/cyan accent bar — 1/10 page width (105px) ──
        Sits inside the decorative frame:
        - inner gold border edge = 23px from each side
        - 1 letter ≈ 11px clearance → offset = 34px top / left / bottom
    */}
    <div style={{
      position: "absolute",
      left: "34px",
      top: "34px",
      bottom: "34px",
      width: "105px",
      borderRadius: "3px",
      background: "linear-gradient(180deg, #22d3ee 0%, #0ea5c9 40%, #0077a0 100%)",
      zIndex: 2,
    }} />

    {/* ── CONTENT — evenly distributed in flex column ── */}
    <div style={{
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "40px 90px 40px 135px",
      boxSizing: "border-box",
    }}>

      {/* ── SECTION 1: Logo + institution ── */}
      {/*
        Positioning: logo at height 52px → natural width ≈ 153px.
        Icon ends at 35.3% → "S" starts at ~54px from left.
        LEARNING CENTER uses marginLeft: 54px to align under "Softengi".
        marginTop: 4px clears the "g" descender that sits at image bottom.
      */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
        <img
          src="/logo-dark.jpg"
          alt="Softengi"
          style={{ height: "52px", display: "block" }}
        />
        {/*
          marginLeft: 54px → aligns "L" of LEARNING with "S" of Softengi (35.3% × 153px)
          marginTop: -2px → shifts up by 70% of font-size (0.7 × 9px = 6.3px up from +4px)
        */}
        <span style={{
          marginLeft: "54px",
          marginTop: "-2px",
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 600,
          fontSize: "9px",
          letterSpacing: "0.26em",
          color: "#5a5a5a",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}>
          Learning Center
        </span>
      </div>

      {/* ── SECTION 2: "This is to certify that" + name ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: "11px",
          letterSpacing: "0.26em",
          color: "#7a8aaa",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}>
          This is to certify that
        </p>

        {/* Recipient name */}
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 800,
          fontSize: "44px",
          color: "#1a2a6c",
          letterSpacing: "0.01em",
          lineHeight: 1.1,
          textAlign: "center",
        }}>
          {data.recipientName}
        </p>

        {/* Gold underline of name */}
        <div style={{
          width: "100%",
          maxWidth: "520px",
          height: "3px",
          background: "linear-gradient(90deg, transparent, #8FB900 25%, #8FB900 75%, transparent)",
          borderRadius: "2px",
          marginTop: "8px",
        }} />
      </div>

      {/* ── SECTION 3: Body text + course title ── */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          color: "#4a5a7a",
          letterSpacing: "0.03em",
          textAlign: "center",
          lineHeight: 1.65,
          marginBottom: "10px",
        }}>
          has successfully completed all requirements and demonstrated proficiency in
        </p>
        <p style={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
          fontSize: "19px",
          color: "#1a2a6c",
          letterSpacing: "0.06em",
          textAlign: "center",
          textTransform: "uppercase",
        }}>
          {data.courseTitle}
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          fontSize: "11.5px",
          color: "#8a9ab8",
          letterSpacing: "0.05em",
          marginTop: "8px",
        }}>
          Awarded on{" "}
          <span style={{ fontWeight: 600, color: "#1a2a6c" }}>{data.completionDate}</span>
        </p>
      </div>

      {/* ── SECTION 4: Separator ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, width: "100%" }}>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, #8FB900)" }} />
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <polygon points="10,1 19,5.5 19,14.5 10,19 1,14.5 1,5.5" stroke="#8FB900" strokeWidth="1.5" fill="none" />
          <circle cx="10" cy="10" r="3" fill="#8FB900" />
        </svg>
        <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, #8FB900, transparent)" }} />
      </div>

      {/* ── SECTION 5: Signatures + seal ── */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        width: "100%",
      }}>
        {/* Signature — Instructor */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "200px" }}>
          <div style={{
            width: "190px",
            height: "48px",
            borderBottom: "2px solid #1a2a6c",
          }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "11.5px", color: "#1a2a6c", letterSpacing: "0.05em", marginTop: "5px" }}>
            {data.instructorName}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "9.5px", color: "#8a9ab8", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
            Course Instructor
          </p>
        </div>

        {/* Official seal */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "4px" }}>
          <div style={{
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            border: "3px solid #1a2a6c",
            outline: "2.5px solid #8FB900",
            outlineOffset: "4px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(145deg, #f8f9ff 55%, #eef1ff)",
            boxShadow: "0 2px 14px rgba(26,42,108,0.13)",
          }}>
            <img
              src="/logo-dark.jpg"
              alt="Softengi seal"
              style={{ width: "68px", objectFit: "contain" }}
            />
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: "8.5px",
            color: "#b0c0d4",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "8px",
          }}>
            ID: {data.certificateId}
          </p>
        </div>

        {/* Signature — Director */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: "200px" }}>
          <div style={{
            width: "190px",
            height: "48px",
            borderBottom: "2px solid #1a2a6c",
          }} />
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: "11.5px", color: "#1a2a6c", letterSpacing: "0.05em", marginTop: "5px" }}>
            {data.directorName}
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "9.5px", color: "#8a9ab8", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "2px" }}>
            Learning Center Director
          </p>
        </div>
      </div>

    </div>{/* end flex column content */}
  </div>
);

// ─── Edit field input ─────────────────────────────────────────────────────────
const FieldInput = ({
  label, value, onChange, placeholder,
}: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
    <label style={{
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 600, fontSize: "10px",
      letterSpacing: "0.16em", textTransform: "uppercase", color: "#1a2a6c",
    }}>
      {label}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#1a2a6c",
        background: "white", border: "1.5px solid #d0d8ef", borderRadius: "6px",
        padding: "8px 11px", outline: "none", transition: "border-color 0.18s",
      }}
      onFocus={(e) => (e.target.style.borderColor = "#8FB900")}
      onBlur={(e)  => (e.target.style.borderColor = "#d0d8ef")}
    />
  </div>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Index() {
  const [certData, setCertData] = useState<CertificateData>({
    recipientName:  "Jane A. Smith",
    courseTitle:    "AI-Enhanced Software Engineering",
    completionDate: "April 27, 2026",
    instructorName: "Dr. Anna Kovalenko",
    directorName:   "Illia Gandzeichuk",
    certificateId:  "SLC-2026-00142",
  });

  const update = (field: keyof CertificateData) => (val: string) =>
    setCertData((prev) => ({ ...prev, [field]: val }));

  return (
    <>
      <style>{`
        /*
         * @page must be at top level — browsers ignore it inside @media.
         * margin:0 removes all browser header/footer/margin chrome.
         */
        @page {
          size: A4 landscape;
          margin: 0;
        }

        @media print {
          /* Render all backgrounds, gradients & images */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }

          /* Collapse doc height → prevents a blank second page */
          html, body {
            height: 0 !important;
            overflow: hidden !important;
          }

          /* Hide the screen UI */
          body * { visibility: hidden !important; }

          /* Reveal only the print certificate */
          #cert-for-print,
          #cert-for-print * { visibility: visible !important; }

          /*
           * Stretch the wrapper to cover the entire page (inset:0).
           * This avoids any scaling arithmetic — the certificate just
           * fills whatever dimensions the browser gives the page.
           */
          #cert-for-print {
            position: fixed !important;
            inset: 0 !important;
            transform: none !important;
            box-shadow: none !important;
            margin: 0 !important;
            padding: 0 !important;
            overflow: hidden !important;
          }

          /*
           * Use viewport units instead of % — in print, 100vw/100vh
           * equal the physical page dimensions (297mm × 210mm for A4
           * landscape) regardless of what parent elements report.
           * % height is unreliable in print because it depends on
           * every ancestor having an explicit height; vw/vh bypasses
           * that chain entirely.
           */
          #certificate-print {
            width: 100vw !important;
            height: 100vh !important;
          }
        }
      `}</style>

      {/*
        Print-only certificate — lives off-screen so it never
        shifts the visual layout, but has NO transform ancestor
        so window.print() renders it at 1:1 size.
      */}
      <div
        id="cert-for-print"
        style={{ position: "absolute", left: "-9999px", top: 0 }}
      >
        <Certificate data={certData} />
      </div>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eef1fa 0%, #e4e9f5 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}>

        {/* ── Top nav ── */}
        <div style={{
          background: "linear-gradient(90deg, #0d1b4b 0%, #1a2a6c 100%)",
          borderBottom: "3px solid #8FB900",
        }}>
          <div style={{
            maxWidth: "1320px", margin: "0 auto",
            padding: "13px 32px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
          }}>
            {/* Nav logo: height 32px → natural width ≈ 94px; 35.3% = ~33px offset */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <img
                src="/logo-dark.jpg"
                alt="Softengi"
                style={{ height: "32px", display: "block", filter: "brightness(0) invert(1)" }}
              />
              <span style={{
                marginLeft: "33px",
                marginTop: "3px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                fontSize: "6px",
                letterSpacing: "0.24em",
                color: "rgba(255,255,255,0.82)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}>
                Learning Center
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Award size={15} color="#8FB900" />
              <span style={{ color: "#dde4f8", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 500 }}>
                Certificate Generator
              </span>
            </div>
          </div>
        </div>

        {/* ── Body layout ── */}
        <div style={{
          maxWidth: "1320px", margin: "0 auto",
          padding: "36px 24px 60px",
          display: "flex", gap: "32px", alignItems: "flex-start",
          flexWrap: "wrap",
        }}>

          {/* ── Left: edit panel ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 32 }}
            style={{
              background: "white", borderRadius: "12px",
              padding: "26px 22px",
              border: "1.5px solid #d4daf0",
              boxShadow: "0 4px 22px rgba(26,42,108,0.08)",
              width: "290px", minWidth: "270px",
            }}
          >
            <p style={{
              fontWeight: 700, fontSize: "11px",
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "#1a2a6c",
              borderBottom: "2px solid #8FB900",
              paddingBottom: "9px", marginBottom: "18px",
            }}>
              Certificate Details
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
              <FieldInput label="Recipient Name"  value={certData.recipientName}  onChange={update("recipientName")}  placeholder="Full name" />
              <FieldInput label="Course Title"    value={certData.courseTitle}    onChange={update("courseTitle")}    placeholder="Course name" />
              <FieldInput label="Completion Date" value={certData.completionDate} onChange={update("completionDate")} placeholder="Month DD, YYYY" />
              <FieldInput label="Instructor Name" value={certData.instructorName} onChange={update("instructorName")} placeholder="Dr. First Last" />
              <FieldInput label="Director Name"   value={certData.directorName}   onChange={update("directorName")}   placeholder="First Last" />
              <FieldInput label="Certificate ID"  value={certData.certificateId}  onChange={update("certificateId")}  placeholder="SLC-YYYY-XXXXX" />
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
              <button
                onClick={() => window.print()}
                style={{
                  background: "linear-gradient(135deg, #1a2a6c 0%, #0d1b4b 100%)",
                  color: "white",
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                  fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase",
                  border: "none", borderRadius: "7px", padding: "12px 16px",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  boxShadow: "0 3px 10px rgba(26,42,108,0.22)",
                  transition: "opacity 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                <Printer size={14} /> Print / Save as PDF
              </button>
              <button
                onClick={() => window.print()}
                style={{
                  background: "white", color: "#1a2a6c",
                  fontFamily: "'Montserrat', sans-serif", fontWeight: 600,
                  fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase",
                  border: "2px solid #8FB900", borderRadius: "7px", padding: "11px 16px",
                  cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "7px",
                  transition: "background 0.18s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#f7ffe0")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                <Download size={14} /> Download PDF
              </button>
            </div>

            <p style={{
              marginTop: "14px", fontSize: "9.5px", color: "#9aaac0",
              lineHeight: 1.65, letterSpacing: "0.03em",
            }}>
              Tip: Print → <em>Save as PDF</em> → select <strong>Landscape</strong> orientation for best quality.
            </p>
          </motion.div>

          {/* ── Right: certificate preview ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 30, delay: 0.08 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <p style={{
              fontWeight: 500, fontSize: "9.5px",
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#8a9ab8", marginBottom: "14px",
            }}>
              Live Preview
            </p>

            {/* Scaled-down certificate */}
            <div style={{
              transform: "scale(0.72)",
              transformOrigin: "top center",
              marginBottom: "-206px",
              boxShadow: "0 14px 50px rgba(26,42,108,0.16)",
            }}>
              <Certificate data={certData} />
            </div>

            <p style={{
              marginTop: "22px", fontSize: "9.5px",
              color: "#c0cce0", letterSpacing: "0.14em", textTransform: "uppercase",
            }}>
              © {new Date().getFullYear()} Softengi Learning Center · All rights reserved
            </p>
          </motion.div>

        </div>
      </div>
    </>
  );
}
