import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "CMO Vision for UB Greensfelder | Kyle Naughtrip";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f172a",
          padding: "60px 80px",
          justifyContent: "space-between",
        }}
      >
        {/* Top: Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#14b8a6",
            }}
          />
          <span
            style={{
              color: "#14b8a6",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            CMO Application
          </span>
        </div>

        {/* Middle: Main Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "72px",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            A Growth Vision for
            <br />
            UB Greensfelder
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            90-day roadmap, referral intelligence, and content systems
          </p>
        </div>

        {/* Bottom: Author */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              backgroundColor: "#14b8a6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            K
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                color: "white",
                fontSize: "24px",
                fontWeight: 600,
              }}
            >
              Kyle Naughtrip
            </span>
            <span
              style={{
                color: "#64748b",
                fontSize: "18px",
              }}
            >
              kyle@naughtrip.com
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
