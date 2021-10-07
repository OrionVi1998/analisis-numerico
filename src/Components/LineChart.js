import * as d3 from "d3";

const margin = {
  top: 10,
  bottom: 20,
  right: 10,
  left: 50
};

margin.xdelta = margin.left + margin.right;
margin.ydelta = margin.top + margin.bottom;

const width = 500;
const height = 500;

class D3LineChart {

  constructor(element, data) {

    data = []

    this.svg = d3.select(element)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

    this.x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.xValue))
    .range([margin.left, width - margin.right]);


    this.y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.yValue)])
    .nice()
    .range([height - margin.bottom, margin.top]);

    this.line = d3.line()
    .defined(d => !isNaN(d.yValue) && d.yValue !== null)
    .x(d => this.x(d.xValue))
    .y(d => this.y(d.yValue));

    this.mainG = this.svg.append("g");
    this.xAxisGroup = this.svg.append("g");
    this.yAxisGroup = this.svg.append("g");

    this.update(data);

  }

  update(data) {

  }

}

export default D3LineChart
