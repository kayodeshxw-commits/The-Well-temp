interface TeardropProps {
  className?: string;
  size?: number;
  color?: string;
}

// size = diameter of the circular body
export function Teardrop({ className = "", size = 24, color = "black" }: TeardropProps) {
  const r = size / 2;         // circle radius
  const cx = r;               // horizontal center
  const cy = r * 1.75;        // circle center y (leaves room for pointed tip)
  const h = cy + r;           // total height

  // One continuous path: pointed tip at top, cubic beziers flaring out,
  // full circular arc at the bottom — no seam, no separate elements
  const d = [
    `M ${cx} 0`,
    `C ${cx + r * 1.0} ${cy * 0.35}, ${cx + r} ${cy - r * 0.5}, ${cx + r} ${cy}`,
    `A ${r} ${r} 0 1 1 ${cx - r} ${cy}`,
    `C ${cx - r} ${cy - r * 0.5}, ${cx - r * 1.0} ${cy * 0.35}, ${cx} 0`,
    "Z",
  ].join(" ");

  return (
    <svg
      width={size}
      height={h}
      viewBox={`0 0 ${size} ${h}`}
      className={className}
      style={{ display: "block", marginTop: "-1px" }}
    >
      <path d={d} fill={color} />
    </svg>
  );
}
