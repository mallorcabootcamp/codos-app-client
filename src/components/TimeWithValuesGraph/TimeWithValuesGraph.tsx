import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import historicalValues, { HistoricalValues } from "./HistoricalValues";
import { scaleTime, scaleLinear } from "@visx/scale";
import { withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import { max, extent } from "d3-array";
import { GridColumns } from '@visx/grid';

type TooltipData = HistoricalValues;

const stock = historicalValues.slice(0,8);
export const accentColor = '#fff';

const getDate = (d: HistoricalValues) => new Date(d.date);
const getStockValue = (d: HistoricalValues) => d.close;
export type AreaProps = {
  width: number;
  height: number;
  margin?: { top: number; right: number; bottom: number; left: number };
};

export default withTooltip(
  ({
    width,
    height,
    margin = { top: 0, right: 0, bottom: 0, left: 0 },
    hideTooltip
  }: AreaProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null;

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;
    
    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          range: [0, xMax],
          domain: extent(stock, getDate) as [Date, Date]
        }),
      [xMax]
    );
    const stockValueScale = useMemo(
      () =>
        scaleLinear({
          range: [yMax, 0],
          domain: [0, (max(stock, getStockValue) || 0) + yMax / 3],
          nice: true
        }),
      [yMax]
    );

    return (
      <div className='shadow'>
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="#bdc3c7" opacity='.5' />
          <GridColumns
            scale={dateScale}
            height={yMax}
            strokeDasharray="1.5"
            stroke={accentColor}
            strokeOpacity={1}
            pointerEvents="none"
            offset={12}
            
            
          />
          <AreaClosed
            data={stock}
            x={(d) => dateScale(getDate(d)) ?? 0}
            y={(d) => stockValueScale(getStockValue(d)) ?? 0}
            yScale={stockValueScale}
            fill="#3498db"
            opacity='.6'
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
