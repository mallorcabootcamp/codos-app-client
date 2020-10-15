import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import { scaleUtc, scaleLinear, scaleTime } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis';
import { extent } from "d3-array";
import { GridColumns } from '@visx/grid';
import moment from 'moment';
import "./TimeWithValuesGraph.css";

const timeRank = {
  startTime: 0,
  endTime: 8
}
interface HistoricalValues {
  date: string;
  close: number;
}
const graphColor = '#67aedd';
const bgColor = '#dee1e3';
const axisColor = '#2980b9';

// axis config
const axisBottomTickLabelProps = {
  textAnchor: 'middle' as const,
  fontFamily: 'Arial',
  fontSize: 10,
  fill: axisColor,
};
const axisLeftTickLabelProps = {
  dx: '-0.25em',
  dy: '0.25em',
  fontFamily: 'Arial',
  fontSize: 10,
  textAnchor: 'end' as const,
  fill: axisColor,
};

/**
 * data [{date: Date, value: number}] - Done
 * uom ºC ppm Done
 * Added also timeFormat. This could be usefull if we want to show our bottom axis with diferent time values.
 */

// Graph setup
export const TimeWithValuesGraph = ({ width, historicalValues, uom, marginY=22, marginX=27 , height, timeFormat }: any) => {
  const stock = historicalValues.slice(timeRank.startTime, timeRank.endTime);
  const getDate = (d: HistoricalValues) => new Date(d.date);
  const getStockValue = (d: HistoricalValues) => d.close;
  const xMax = width - marginX;
  const yMax = height - marginY;

  // scales
  const scaleGridColumns = useMemo(
    () =>
      scaleLinear({
        range: [marginX, xMax],
        domain: [1, timeRank.endTime],
      }),
    [xMax, marginX]
  );
  const scaleAxisLeft = useMemo(
    () =>
      scaleLinear({
        domain: [
          Math.max(...stock.map((d: HistoricalValues) => d.close)),
          Math.min(...stock.map((d: HistoricalValues) => d.close))
        ],
        nice: true,
        range: [0, yMax - marginY],

      }),
    [yMax, marginY, stock]
  );

  const scaleAxisBottom = useMemo(
    () =>
      scaleUtc({
        range: [marginX, xMax],
        domain: extent(stock, getDate) as [Date, Date]
      }),
    [xMax, marginX, stock]
  );

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [marginX, xMax],
        domain: extent(stock, getDate) as [Date, Date]
      }),
    [xMax, marginX, stock]
  );
  const stockValueScale = useMemo(
    () =>
      scaleLinear({
        range: [marginY, yMax],
        domain: [
          Math.min(...stock.map((d: HistoricalValues) => Math.min(d.close))),
          Math.max(...stock.map((d: HistoricalValues) => Math.max(d.close)))
        ],
        nice: true,
        reverse: true
      }),
    [yMax, marginY, stock]
  );

  return (
    <div className='text-left'>
        <div className='display graph-label pb-1 px-3 d-inline p-0 rounded-top'>
          {uom}
        </div>
        <svg width={width} height={height}>
          <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill={bgColor}
          ></rect>
          <GridColumns
            scale={scaleGridColumns}
            height={yMax - marginY}
            top={marginY}
            numTicks={timeRank.endTime}
            strokeDasharray="3"
            stroke={graphColor}
            pointerEvents="none"

          />
          <AreaClosed
            data={stock}
            x={(d: HistoricalValues) => dateScale(getDate(d)) ?? 0}
            y={(d: HistoricalValues) => stockValueScale(getStockValue(d)) ?? 0}
            yScale={stockValueScale}
            fill={graphColor}
          />
          <AxisBottom
            top={yMax}
            scale={scaleAxisBottom}
            numTicks={timeRank.endTime}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisBottomTickLabelProps}
            tickFormat={(value: any) => {
              return moment(value as Date).format(timeFormat)
            }}
          />
          <AxisLeft
            top={marginY}
            left={marginX}
            scale={scaleAxisLeft}
            numTicks={3}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={() => axisLeftTickLabelProps}
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
