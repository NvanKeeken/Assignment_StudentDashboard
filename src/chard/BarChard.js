import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis,VictoryGroup} from "victory"

function BarChard (props){

    return(
        <VictoryChart
      domainPadding={50}
      height={250}
      width={900}
      >
        <VictoryAxis dependentAxis
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: {angle: 45, fontSize: 5, padding: 5, textAnchor: 'begin'} }}
        />
        <VictoryAxis 
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: {angle: 45, fontSize: 5, padding: 2, textAnchor: 'begin'} }}
        />
        
      <VictoryGroup
      offset={5}
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