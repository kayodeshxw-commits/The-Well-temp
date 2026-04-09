interface TeardropProps {
  className?: string;
  size?: number;
  color?: string;
}

export function Teardrop({ className = "", size = 10, color = "black" }: TeardropProps) {
  const w = size;
  const h = size * 1.5;
  const cx = w / 2;
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      className={className}
      style={{ display: "block" }}
    >
      {/* Tip at top connecting to line, circle body below */}
      <path
        d={`M${cx} 0 C${w} ${h * 0.3}, ${w} ${h * 0.6}, ${cx} ${h} C0 ${h * 0.6}, 0 ${h * 0.3}, ${cx} 0 Z`}
        fill={color}
      />
    </svg>
  );
}
