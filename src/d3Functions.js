import * as d3 from 'd3';
const height = 1000;
const width = 2000;

export const getColor = (i) => {
  let hVal = (Math.round(Math.random() * 360));
  return `hsl(${hVal}, ${62.5 - (i * 12.5)}%, 50%)`;
}

export const setContext = () => {
  return d3.select('#Tree').append('svg')
    .attr('height', height)
    .attr('width', width)
    .attr('viewBox', '0 0 ' + Math.min(width, height)+' '+ Math.min(width, height))
    .attr('preserveAspectRatio', 'xMinYMin')

}
export const drawLine = (context, leaf) => {
  if (leaf.up !== null){
    return context.append('line')
            .style("stroke", "black")
            .attr("x1", leaf.up.xPos)
            .attr("y1", leaf.up.yPos)
            .attr("x2", leaf.xPos)
            .attr("y2", leaf.yPos);
  }
}


const arc = () => {
  return d3.arc()
    .outerRadius(100)
    .innerRadius(0)
    .startAngle(0)
    .endAngle(Math.PI * 2);
}

export const setLeaf = (context, leaf, id) => {
  var color = getColor(2);
  var test = context.append('g').attr('transform', `translate(${ leaf.xPos }, ${ leaf.yPos })`);
  test.append('path')
  .attr('d', arc())
  .attr('id', 'leaf' + id)
  .style('fill', color)
  .append('line')
  .style("fill", "black")  // colour the line
  .attr('id', 'text' + id);

  test.append("text")
  .style("startOffset", "25%")
  .style("fill", "black")
  .append("textPath")
  .attr("class", "arc-text")
  .attr("xlink:href", "#text" + id)
  .text(id);

}
