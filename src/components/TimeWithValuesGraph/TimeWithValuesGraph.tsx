//eslint-disable-next-line
import React, { useMemo } from "react";
import { AreaClosed } from "@visx/shape";
import {  scaleLinear, scaleTime } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis';
import { extent } from "d3-array";
import { GridColumns } from '@visx/grid';
import moment from 'moment';
import "./TimeWithValuesGraph.scss";
import { ApiResponse } from '../../types/api';


const graphColor = '#bdc3c7';
const axisColor = '#878a8c';

// axis config
const axisBottomTickLabelProps = {
  dx: '0em',
  dy: '-0.2em',
  textAnchor: 'middle' as const,
  fontFamily: 'Montserrat',
  fontSize: 10,
  fill: axisColor,
};
const axisLeftTickLabelProps = {
  dx: '0.4em',
  fontFamily: 'Montserrat',
  fontSize: 10,
  textAnchor: 'end' as const,
  fill: axisColor,
};

interface Props {
  endTimeValue: number,
  width: number,
  historicalValues: ApiResponse[],
  uom: string,
  marginY: number,
  marginX: number,
  height: number,
  timeFormat: string,
  bottomAxisNumTicks?: number
}

// Graph setup
export const TimeWithValuesGraph = ({ endTimeValue, width, historicalValues, uom, marginY, marginX, height, timeFormat, bottomAxisNumTicks }: Props)=> {

  const timeRank = {
    startTime: 0,
    endTime: endTimeValue
  }
  const stock = historicalValues
  const getDate = (d: ApiResponse) => new Date(parseInt(d.time) * 1000);
  const getStockValue = (d: ApiResponse) => d.value;
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
          Math.max(...stock.map((d: ApiResponse) => d.value)),
          Math.min(...stock.map((d: ApiResponse) => d.value))
        ],
        range: [0, yMax - marginY],
      }),
    [yMax, marginY, stock]
  );

  const scaleAxisBottom = useMemo(
    () =>
      scaleTime({
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
          Math.min(...stock.map((d: ApiResponse) => Math.min(d.value))),
          Math.max(...stock.map((d: ApiResponse) => Math.max(d.value)))
        ],
        reverse: true
      }),
    [yMax, marginY, stock]
  );

  return (
    <div className='text-left time-with-values-graph-elem'>
      <svg width={width + marginY} height={height}>
        <AreaClosed
          data={stock}
          x={(d: ApiResponse) => dateScale(getDate(d)) ?? 0}
          y={(d: ApiResponse) => stockValueScale(getStockValue(d)) ?? 0}
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
          numTicks={bottomAxisNumTicks}
          stroke={axisColor}
          hideTicks={true}
          tickStroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
          tickFormat={(value) => {
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
