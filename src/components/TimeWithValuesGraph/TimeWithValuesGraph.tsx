import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import historicalValues, { HistoricalValues } from "./HistoricalValues";
import { scaleTime, scaleLinear } from "@visx/scale";
import { AxisBottom } from '@visx/axis';
import { withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { max, extent } from "d3-array";
import { GridColumns } from '@visx/grid';

//  config variables
type TooltipData = HistoricalValues;
let timeRank = {
  startTime: 0,
  endTime: 8
}
const stock = historicalValues.slice(timeRank.startTime, timeRank.endTime);
const accentColor = '#3498db';
const bgColor = '#bdc3c7';
const axisColor = '#000';
const getDate = (d: HistoricalValues) => new Date(d.date);
const getStockValue = (d: HistoricalValues) => d.close;
type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

// axis config
const axisBottomTickLabelProps = {
  textAnchor: 'middle' as const,
  fontFamily: 'Arial',
  fontSize: 10,
  fill: axisColor,
};

// Graph setup
export default withTooltip(
  ({
    width,
    height,
    margin = { top: 0, right: 0, bottom: 18, left: 15 },
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null;

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    // scales
    const scale = scaleTime({
      range: [15, xMax],
      round: true,
      domain: [1, timeRank.endTime],
    });
  
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [15, xMax],
          domain: extent(stock, getDate) as [Date, Date]
        }),
      [xMax]
    );
    const stockValueScale = useMemo(
      () =>
        scaleLinear({
          range: [yMax, 0],
          domain: [0, (max(stock, getStockValue) || 0) + yMax / 8],
          nice: true
        }),
      [yMax]
    );

    return (
      <div className='shadow'>
        <svg width={width} height={height}>
          <rect x={0}
            y={0}
            width={width}
            height={height}
            fill={bgColor}
            opacity='.5'
          />
          <GridColumns
            scale={scale}
            height={yMax}
            top={15}
            strokeDasharray="2"
            stroke={accentColor}
            strokeOpacity={.6}
            pointerEvents="none"

          />
          <AreaClosed
            data={stock}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => stockValueScale(getStockValue(d)) ?? 0}
            yScale={stockValueScale}
            fill={accentColor}
            opacity='.6'
          />
          <AxisBottom
            top={yMax}
            scale={scale}
            numTicks={width}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisBottomTickLabelProps}
            tickFormat={scaleLinear({
              domain: [0, 1],
            })}
            
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
          />
        </svg>
      </div>
    );
  }
);
