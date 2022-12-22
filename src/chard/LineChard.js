import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

function LineChard(props) {
  return (
    <div>
      <VictoryChart
        domainPadding={{x:15}}
        domain={{ x: [0, 56], y: [0.0, 5.0] }}
        theme={VictoryTheme.material}
        height={300}
        width={1500}
      >
        <VictoryAxis
          dependentAxis
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: {
              angle: 45,
              fontSize: 5,
              padding: 5,
              textAnchor: "begin",
            },
          }}
        />
        <VictoryAxis
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: {
              angle: 45,
              fontSize: 5,
              padding: 2,
              textAnchor: "begin",
            },
          }}
        />
        {props.data.isDifficult?
        <VictoryLine
          interpolation={"linear"}
          style={{ data: { stroke: "#ffb212" }, strokeWidth: 1 }}
          data={props.chardData}
          x={"assignment"}
          y={"difficultyRate"}
        />
        : null}
        
        {props.data.isEnjoyment ?
        <VictoryLine
          interpolation={"linear"}
          data={props.chardData}
          style={{ data: { stroke: "#4f8bc9" } }}
          x={"assignment"}
          y={"enjoymentRate"}
        />
        : null }
      </VictoryChart>
    </div>
  );
}

export default LineChard;
