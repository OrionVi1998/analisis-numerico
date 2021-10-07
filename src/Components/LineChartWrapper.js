import React, {useRef, useState, useEffect} from 'react';
import D3LineChart from "./D3LineChart";


const LineChartWrapper = ({ data, chartKey }) => {
  const chartArea = useRef(null)
  const [chart, setChart] = useState(null)

  useEffect(() => {


    if (!chart) {
      setChart(new D3LineChart(chartArea.current, data))
    } else {
      chart.update(data)
    }

  }, [chart, chartKey, data])

  return (
    <div className="line-chart-area" ref={chartArea}/>
  )
}

export default LineChartWrapper
