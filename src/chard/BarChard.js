import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis,VictoryGroup,VictoryTheme} from "victory"

function BarChard (props){

    return(
        <VictoryChart
      domainPadding={{x:15}}
      domain={{ x: [0, 56], y: [0.0, 5.0] }}
      theme={VictoryTheme.material}
      height={300}
      width={1000}
      padding={{bottom:100,left:50, right: 50}}
      >
        <VictoryAxis dependentAxis
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: {angle: 45, fontSize: 5, padding: 5, textAnchor: 'begin'} }}
        />
        <VictoryAxis 
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: {angle: 45, fontSize: 5, padding: 1, textAnchor: 'begin'} }}
        />
        
      <VictoryGroup
      offset={6}
      colorScale={"qualitative"}
      >
      {props.data.isDifficult ?
      <VictoryBar
      style={{ data: { fill: "#ffb212" } }}
      data={props.chardData}
      x={"assignment"}
      y={"difficultyRate"}
      /> 
    : null}

     { props.data.isEnjoyment ?
      <VictoryBar
      data={props.chardData}
      style={{ data: { fill: "#4f8bc9" } }}
      x={"assignment"}
      y={"enjoymentRate"}
      />
      : null
     }
      </VictoryGroup>
      </VictoryChart>
    )
}

export default BarChard