import Image from "next/image";

/** Logo nexo (manuscrita). */
export function Logo({ height = 30, className = "" }: { height?: number; className?: string }) {
  const width = Math.round((height * 377) / 160);
  return (
    <span className={`logo ${className}`}>
      <Image src="/nexo-logo.png" alt="nexo" width={width} height={height} priority />
    </span>
  );
}
