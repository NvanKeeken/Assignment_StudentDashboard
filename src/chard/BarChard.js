import React from "react"
import {VictoryBar, VictoryChart, VictoryAxis,VictoryGroup,VictoryTheme,VictoryTooltip} from "victory"

function BarChard (props){

    return(
        <VictoryChart
      domainPadding={{x:10}}
      domain={{ x: [0, 56], y: [0.0, 6.0] }}
      theme={VictoryTheme.material}
      height={400}
      width={1000}
      padding={{bottom:100,left:100, right: 100, top:10}}
      
      >
      
        <VictoryAxis dependentAxis
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: { fontSize: 8, padding: 15,textAnchor: 'begin'} }}
        />
        <VictoryAxis 
        style={{ ticks: {stroke: "grey", size: 5},
        tickLabels: {angle: 45, fontSize: 7, padding: 1, textAnchor: 'begin'} }}
        />
        
      <VictoryGroup
      offset={6}
      colorScale={"qualitative"}
      >
      {props.data.isDifficult ?
      <VictoryBar
      labelComponent={<VictoryTooltip />}
      labels={({ datum }) => `difficulty: ${datum.difficultyRate}`}
      style={{ data: { fill: "#ffb212" } }}
      data={props.chardData}
      x={"assignment"}
      y={"difficultyRate"}
      /> 
    : null}

     { props.data.isEnjoyment ?
      <VictoryBar
      data={props.chardData}
      labelComponent={<VictoryTooltip/>}
      labels={({ datum }) => `Enjoyment: ${datum.enjoymentRate}`}
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