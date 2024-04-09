type GenericDataPoint = {
  label: string;
  value: number;
};

type LineChartProps = Readonly<{
  data: GenericDataPoint[];
  viewBoxWidth?: number;
  viewBoxHeight?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
  strokeColor?: string;
  fillColor?: string;
  strokeWidth?: number;
  circleRadius?: number;
}>;

export default function LineChart({
  data,
  viewBoxWidth = 960,
  viewBoxHeight = 400,
  margin = { top: 20, right: 30, bottom: 30, left: 40 },
  strokeColor = "blue",
  fillColor = "red",
  strokeWidth = 8,
  circleRadius = 9,
}: LineChartProps) {
  // Calculate max value for y-axis scale
  const maxValue = Math.max(...data.map((d) => d.value));

  const scaleY = (value: number) =>
    (1 - value / maxValue) * (viewBoxHeight - margin.top - margin.bottom) +
    margin.top;

  const scaleX = (index: number) =>
    (index * (viewBoxWidth - margin.left - margin.right)) / (data.length - 1) +
    margin.left;

  const pathData = data.reduce((acc, point, index, array) => {
    const x = scaleX(index);
    const y = scaleY(point.value);
    if (index === 0) {
      return `M ${x},${y}`;
    }
    const previousX = scaleX(index - 1);
    const previousY = scaleY(array[index - 1].value);
    const controlX1 = (previousX + x) / 2;
    const controlY1 = previousY;
    const controlX2 = (previousX + x) / 2;
    const controlY2 = y;
    return `${acc} C ${controlX1},${controlY1} ${controlX2},${controlY2} ${x},${y}`;
  }, "");

  return (
    <div className="p-4">
      <svg
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-auto"
      >
        <path
          d={pathData}
          strokeWidth={strokeWidth}
          fill="none"
          stroke={strokeColor}
          className="transition-all duration-300 ease-in-out"
        />
        {data.map((point, index) => {
          const x = scaleX(index);
          const y = scaleY(point.value);
          return (
            <>
              <circle cx={x} cy={y} r={circleRadius} fill={fillColor} />
              <text
                x={x}
                y={viewBoxHeight - margin.bottom + 20}
                textAnchor="middle"
                fill="white"
                className="text-sm"
              >
                {point.label}
              </text>
            </>
          );
        })}
      </svg>
    </div>
  );
}
