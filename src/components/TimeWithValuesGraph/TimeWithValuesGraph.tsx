import React, { useMemo } from "react";
import { AreaClosed, Bar } from "@visx/shape";
import historicalValues, { HistoricalValues } from "./HistoricalValues";
import { scaleUtc, scaleLinear, coerceNumber, scaleTime } from '@visx/scale'
import { AxisBottom } from '@visx/axis';
import { max, extent } from "d3-array";
import { GridColumns } from '@visx/grid';
import moment from 'moment';

const getMinMax = (vals: (number | { valueOf(): number })[]) => {
  const numericVals = vals.map(coerceNumber);
  return [Math.min(...numericVals), Math.max(...numericVals)];
};

//  config variables
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

const timeValues = [new Date('2020-04-24T07:00:00.000Z'), new Date('2020-04-24T07:08:00.000Z')]

/**
 * data [{date: Date, value: number}]
 * color
 * uom ºC ppm
 * 
 */

// Graph setup
export const TimeWithValuesGraph = ({ width, margin, height }: any) => {

  const xMax = 200 - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  // scales
  const scale = scaleTime({
    range: [10, xMax],
    round: true,
    domain: [1, timeRank.endTime],
  });

  const scaleAxisBottom = scaleUtc({
    domain: getMinMax(timeValues),
    range: [0, width],
  })

  const dateScale = useMemo(
    () =>
      scaleTime({
        range: [10, xMax],
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
          scale={scaleAxisBottom}
          numTicks={timeRank.endTime}
          stroke={axisColor}
          tickStroke={axisColor}
          tickLabelProps={() => axisBottomTickLabelProps}
          tickFormat={(value) => {
            return moment(value as Date).format(`HH:mm`)
          }}
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
