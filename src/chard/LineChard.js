import React from "react";
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

function LineChard(props) {
  return (
    <div>
      <VictoryChart
        domainPadding={{ x: 10 }}
        domain={{ x: [0, 56], y: [0.0, 5.0] }}
        theme={VictoryTheme.material}
        height={400}
        width={1050}
        padding={{ bottom: 150, left: 100, right: 100, top: 10 }}
      >
        <VictoryAxis
          dependentAxis
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 8, padding: 15, textAnchor: "begin" },
          }}
        />
        <VictoryAxis
          style={{
            ticks: { stroke: "grey", size: 5 },
            tickLabels: {
              angle: 45,
              fontSize: 8,
              padding: 1,
              textAnchor: "begin",
            },
          }}
        />
        {props.data.isDifficult ? (
          <VictoryLine
            interpolation={"linear"}
            style={{ data: { stroke: "#ffb212" }, strokeWidth: 1 }}
            data={props.chardData}
            x={"assignment"}
            y={"difficultyRate"}
          />
        ) : null}

        {props.data.isEnjoyment ? (
          <VictoryLine
            interpolation={"linear"}
            data={props.chardData}
            style={{ data: { stroke: "#4f8bc9" } }}
            x={"assignment"}
            y={"enjoymentRate"}
          />
        ) : null}
      </VictoryChart>
    </div>
  );
}

export default LineChard;
