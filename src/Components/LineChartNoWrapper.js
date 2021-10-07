import React, {useEffect, useRef} from 'react';
import * as d3 from "d3";
import {scaleLinear} from "d3";

const LineChartNoWrapper = ({data, xa, xb}) => {

  const d3Chart = useRef()

  useEffect(() => {

    console.log(data.filter(d => d.x === -0.5))
    console.log(d3.extent(data, d => d.x))
    console.log(d3.extent(data, d => d.y))

    const margin = {top:50, bottom:30, right:30, left:30}
    const width = 500
    const height = 500

    const svg = d3.select(d3Chart.current)
    .attr("width", width+margin.left+margin.right)
    .attr("height", height+margin.top+margin.bottom)
    .style("background-color","lightgrey")
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.right})`);

    const xScale = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x))
    .range([0, width])

    const yScale = scaleLinear()
    .domain(d3.extent(data, d => d.x))
    .range([height, 0])

    svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale))

    svg.append("g")
    .call(d3.axisLeft(yScale))

    let line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))

    svg.append("path")
    .datum(data.filter(d => d.funcion === "xy"))
    .attr("fill", "none")
    .attr("stroke", "green")
    .attr("stroke-width",1)
    .attr("d",line)

    svg.append("path")
    .datum(data.filter(d => d.funcion === "fx"))
    .attr("fill", "none")
    .attr("stroke", "red")
    .attr("stroke-width",1)
    .attr("d",line)

    svg.append("path")
    .datum(data.filter(d => d.funcion === "gx"))
    .attr("fill", "none")
    .attr("stroke", "blue")
    .attr("stroke-width",1)
    .attr("d",line)


  },[data]);

  return (
    <div id={"d3LineChartPF"}>
      <svg ref={d3Chart}/>
    </div>
  );
};

export default LineChartNoWrapper;
