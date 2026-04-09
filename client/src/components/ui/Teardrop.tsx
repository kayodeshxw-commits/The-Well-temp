interface TeardropProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Teardrop({ className = "", size = 10, color = "black" }: TeardropProps) {
  const w = size;
  // Circle radius = half width, centered so circle sits at bottom
  const r = w / 2;
  const h = r * 2 + r * 1.4; // circle diameter + room for the pointed tip
  const cx = r;
  const cy = h - r; // circle center y

  // Sharp tip at top, cubic bezier curves flare out to circle tangent points,
  // then a full arc for the rounded bottom
  const d = [
    `M ${cx} 0`,
    `C ${cx + r * 0.9} ${cy - r * 1.1}, ${cx + r} ${cy - r * 0.6}, ${cx + r} ${cy}`,
    `A ${r} ${r} 0 1 1 ${cx - r} ${cy}`,
    `C ${cx - r} ${cy - r * 0.6}, ${cx - r * 0.9} ${cy - r * 1.1}, ${cx} 0`,
    "Z",
  ].join(" ");

  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={{ display: "block" }}
    >
      <path d={d} fill={color} />
    </svg>
  );
}
