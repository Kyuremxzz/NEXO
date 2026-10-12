import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Stroke({ size = 24, children, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ChatIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.4A8.5 8.5 0 1 1 21 12z" />
  </Stroke>
);

export const PlayIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M8 5l11 7-11 7z" />
  </Stroke>
);

export const NfcIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M8 9a4 4 0 0 1 0 6" />
    <path d="M11.5 6.5a8 8 0 0 1 0 11" />
    <path d="M15 4a11.5 11.5 0 0 1 0 16" />
  </Stroke>
);

export const BookIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v18H6.5A1.5 1.5 0 0 1 5 19.5z" />
    <path d="M9 8h6" />
    <path d="M9 12h6" />
  </Stroke>
);

export const VideoIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M10 9.5l4.5 2.5-4.5 2.5z" />
  </Stroke>
);

export const TagIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M10.5 10a2.5 2.5 0 0 1 0 4" />
    <path d="M13.5 8a5.5 5.5 0 0 1 0 8" />
  </Stroke>
);

export const BellIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M4 17h16" />
    <path d="M6 17a6 6 0 0 1 12 0" />
    <path d="M12 11V8" />
    <path d="M10.5 8h3" />
  </Stroke>
);

export const PanelIcon = (p: IconProps) => (
  <Stroke {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 10h10" />
    <path d="M7 14h6" />
  </Stroke>
);

export const RefreshIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M20 11a8 8 0 0 0-14.9-3" />
    <path d="M4 13a8 8 0 0 0 14.9 3" />
    <path d="M5 4v4h4" />
    <path d="M19 20v-4h-4" />
  </Stroke>
);

export const PinIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </Stroke>
);

export const CheckIcon = (p: IconProps) => (
  <Stroke {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Stroke>
);

export function QrCode({ size = 64 }: { size?: number }) {
  const ink = "var(--preto)";
  const paper = "var(--creme)";
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill={ink} />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill={paper} />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill={ink} />
    </g>
  );
  const dots: [number, number, number, number][] = [
    [9, 1, 2, 2], [8, 4, 1, 3], [11, 5, 2, 1], [9, 8, 3, 2], [14, 9, 2, 2],
    [18, 8, 2, 3], [1, 9, 2, 2], [4, 10, 3, 1], [8, 12, 1, 3], [10, 14, 3, 2],
    [14, 13, 1, 3], [16, 15, 3, 2], [9, 18, 2, 2], [13, 18, 2, 3], [17, 18, 3, 2],
  ];
  return (
    <svg width={size} height={size} viewBox="0 0 21 21" aria-hidden="true">
      {finder(0, 0)}
      {finder(14, 0)}
      {finder(0, 14)}
      {dots.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} fill={ink} />
      ))}
    </svg>
  );
}
