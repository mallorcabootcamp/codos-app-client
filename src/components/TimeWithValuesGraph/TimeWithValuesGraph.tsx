//eslint-disable-next-line
import React, { useMemo } from "react";
import { AreaClosed } from "@visx/shape";
import { scaleUtc, scaleLinear, scaleTime } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis';
import { extent } from "d3-array";
import { GridColumns } from '@visx/grid';
import moment from 'moment';
import "./TimeWithValuesGraph.scss";


interface HistoricalValues {
  date: string;
  close: number;
}
const graphColor = '#bdc3c7';
const bgColor = '#ecf0f1';
const axisColor = '#878a8c';

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
export const TimeWithValuesGraph = ({ endTimeValue, width, historicalValues, uom, marginY, marginX, height, timeFormat }:
  {
    endTimeValue: number,
    width: number,
    historicalValues: HistoricalValues[],
    uom: string,
    marginY: number,
    marginX: number,
    height: number,
    timeFormat: string
  }):JSX.Element => {

  const timeRank = {
    startTime: 0,
    endTime: endTimeValue
  }
  const stock = historicalValues.slice(timeRank.startTime, timeRank.endTime);
  const getDate = (d: HistoricalValues) => new Date(d.date);
  const getStockValue = (d: HistoricalValues) => d.close;
  const xMax = width - marginX;
  const yMax = height - marginY;


  // scales
  const scaleGridColumns = useMemo(
    () =>
      scaleLinear({
        range: [marginX, xMax + marginX],
        domain: [1, timeRank.endTime],
      }),
    [xMax, marginX, timeRank.endTime]
  );
  const scaleAxisLeft = useMemo(
    () =>
      scaleLinear({
        domain: [
          Math.max(...stock.map((d: HistoricalValues) => d.close)),
          Math.min(...stock.map((d: HistoricalValues) => d.close))
        ],
        range: [0, yMax - marginY],
      }),
    [yMax, marginY, stock]
  );

  const scaleAxisBottom = useMemo(
    () =>
      scaleUtc({
        range: [marginX, xMax + marginX],
        domain: extent(stock, getDate) as [Date, Date]
      }),
    [xMax, marginX, stock]
  );

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [marginX, xMax + marginX],
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
        reverse: true
      }),
    [yMax, marginY, stock]
  );

  return (
    <div className='text-left time-with-values-graph-elem'>
      <svg width={width + marginY} height={height}>
        <rect
          x={marginX}
          y={marginY}
          width={width - marginX}
          height={height - marginY * 2}
          fill={bgColor}
        ></rect>
        <AreaClosed
          data={stock}
          x={(d: HistoricalValues) => dateScale(getDate(d)) ?? 0}
          y={(d: HistoricalValues) => stockValueScale(getStockValue(d)) ?? 0}
          yScale={stockValueScale}
          fill={graphColor}
        />
        <GridColumns
          scale={scaleGridColumns}
          height={yMax - marginY}
          top={marginY}
          numTicks={timeRank.endTime}
          stroke={axisColor}
          strokeWidth={1.5}
        />

        <AxisBottom
          top={yMax}
          scale={scaleAxisBottom}
          numTicks={timeRank.endTime}
          stroke={axisColor}
          hideTicks={true}
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
          hideTicks={true}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisLeftTickLabelProps}
          tickFormat={(e) => `${e} ${uom}`}
        />

      </svg>
    </div>
  );
}
