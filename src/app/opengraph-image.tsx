import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#FAFAF8",
          color: "#16181D",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#4B5563", display: "flex" }}>
          manuelalbanese.it
        </div>
        <div
          style={{
            fontSize: 60,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>AI di cui ti puoi fidare.</span>
          <span>Software che consegna risultati.</span>
        </div>
        <div style={{ display: "flex", gap: 12, marginTop: 48 }}>
          {["ISO/IEC/IEEE 29148", "IEEE 1016", "RAG", "Ollama"].map(
            (item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  border: "1px solid #E5E2DB",
                  background: "#F1F2EE",
                  color: "#4B5563",
                  borderRadius: 999,
                  padding: "8px 18px",
                  fontSize: 20,
                }}
              >
                {item}
              </div>
            ),
          )}
        </div>
      </div>
    ),
    { ...size },
  );
}
