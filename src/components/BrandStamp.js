"use client";
export default function BrandStamp({ text }) {
  const circleRadius = 40; // radius of the circle
  const viewBoxSize = 2 * circleRadius + 20; // Add some extra space to account for the text width

  const centerText = "WEHOWARE";
  // Create a circular path ID for the textPath element to reference
  const pathId = "circularTextPath";

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      <svg
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        className="rotate-animation"
        style={{ transformOrigin: "center" }}
      >
        <defs>
          <path
            id={pathId}
            d={`M ${viewBoxSize / 2}, ${viewBoxSize / 2}
                  m -${circleRadius}, 0
                  a ${circleRadius},${circleRadius} 0 1,1 ${circleRadius * 2},0
                  a ${circleRadius},${circleRadius} 0 1,1 -${
              circleRadius * 2
            },0`}
            fill="transparent"
          />
        </defs>
        <text fill="white" style={{ fontSize: "0.6rem" }}>
          <textPath
            href={`#${pathId}`}
            startOffset="50%"
            textAnchor="middle"
            className="font-semibold"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <span>
        <text
          x="50%"
          y="50%"
          fill="white"
          className="font-bold text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          dominantBaseline="middle"
          textAnchor="middle"
        >
          {centerText}
        </text>
      </span>

      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-animation {
          animation: rotate 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
