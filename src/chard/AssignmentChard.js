import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

function AssignmentChard(props) {
  return (
    <VictoryChart
      domainPadding={{ x: 40 }}
      domain={{ x: [0, 10], y: [0.0, 5.0] }}
      theme={VictoryTheme.material}
      height={400}
      width={800}
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

      <VictoryGroup offset={20} colorScale={"qualitative"}>
        {props.data.isDifficult ? (
          <VictoryBar
            labelComponent={
              <VictoryTooltip
                cornerRadius={10}
                pointerLength={0}
                flyoutStyle={{
                  stroke: "none",
                  fill: " #4f8bc9",
                }}
              />
            }
            labels={({ datum }) =>
              `${datum.name} difficulty: ${datum.difficultyRate}`
            }
            style={{ data: { fill: "#4f8bc9" } }}
            data={props.chardData}
            x={props.xAs}
            y={"difficultyRate"}
          />
        ) : null}

        {props.data.isEnjoyment ? (
          <VictoryBar
            data={props.chardData}
            labelComponent={
              <VictoryTooltip
                cornerRadius={10}
                pointerLength={0}
                flyoutStyle={{
                  stroke: "none",
                  fill: "#ffb212 ",
                }}
              />
            }
            labels={({ datum }) =>
              `${datum.name} enjoyment: ${datum.enjoymentRate}`
            }
            style={{ data: { fill: "#ffb212" } }}
            x={props.xAs}
            y={"enjoymentRate"}
          />
        ) : null}
      </VictoryGroup>
    </VictoryChart>
  );
}

export default AssignmentChard;
