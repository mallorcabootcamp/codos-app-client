import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import historicalValues, { HistoricalValues } from "./HistoricalValues";
import { scaleUtc, scaleLinear, coerceNumber, scaleTime } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis';
import { max, extent } from "d3-array";
import { GridColumns } from '@visx/grid';
import { timeFormat } from 'd3-time-format';
import moment from 'moment';


//  config variables
const formatDate = timeFormat("%b %d, '%y");

let timeRank = {
  startTime: 0,
  endTime: 8
}
const stock = historicalValues.slice(timeRank.startTime, timeRank.endTime);
const accentColor = '#3498db';
const bgColor = '#bdc3c7';
const axisColor = '#2980b9';
const getDate = (d: HistoricalValues) => new Date(d.date);
const getStockValue = (d: HistoricalValues) => d.close;

// axis config
const axisBottomTickLabelProps = {
  textAnchor: 'middle' as const,
  fontFamily: 'Arial',
  fontSize: 10,
  fill: axisColor,
};


/**
 * data [{date: Date, value: number}]
 * color
 * uom ºC ppm
 * 
 */

// Graph setup
export const TimeWithValuesGraph = ({ width, margin, height }: any) => {

  const xMax = width - margin;
  const yMax = height - margin;

  // scales

  const scaleAxisLeft = useMemo(
    () =>
      scaleLinear<number>({
        domain: [
          Math.max(...historicalValues.map(d => Math.max(d.close))),
          Math.min(...historicalValues.map(d => Math.min(d.close)))
        ],
        nice: true,
        range: [0, Math.max(...historicalValues.map(d => Math.max(d.close)))]
      }),
    []
  );

  const scale = useMemo(
    () =>
      scaleLinear({
        range: [margin, xMax],
        domain: [1, timeRank.endTime],
      }),
    [xMax]
  );

  const scaleAxisBottom = useMemo(
    () =>
      scaleUtc({
        range: [margin, xMax],
        domain: extent(stock, getDate) as [Date, Date]
      }),
    [xMax]
  );

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [margin, xMax],
        domain: extent(stock, getDate) as [Date, Date]
      }),
    [xMax]
  );
  const stockValueScale = useMemo(
    () =>
      scaleLinear({
        range: [yMax, 0],
        domain: [0, (max(stock, getStockValue) || 0) + yMax / 10],
        nice: true
      }),
    [yMax]
  );

  return (
    <div className='shadow'>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={bgColor}
          opacity='.5'
        />
        <GridColumns
          scale={scale}
          height={yMax}
          top={margin}
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
          scale={scaleAxisBottom}
          numTicks={timeRank.endTime}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
          tickFormat={(value) => {
            return moment(value as Date).format(`HH:mm`)
          }}
        />
        <AxisLeft
          top={47}
          left={margin}
          scale={scaleAxisLeft}
          numTicks={3}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
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
