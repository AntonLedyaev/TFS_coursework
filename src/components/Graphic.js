import React from 'react';
import FusionCharts from "fusioncharts";
import ReactFC from "react-fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import Line from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.gammel";
//charts(FusionCharts);

ReactFC.fcRoot(FusionCharts, Line, FusionTheme);

const Graphic = (props) => {

  let data = [];
  for (let weight of props.weightHistory) {
    data.push({label: new Date(weight.id).toLocaleDateString("ru-RU"), value: weight.value});
  }



  const dataSource = {
    chart: {
      caption: "История веса",
      yaxisname: "Вес, кг",
      numbersfuffix: " кг",
      rotatetables: "1",
      setadaptiveymin: "1",
      theme: "gammel"
    },
    data: data
  }


  return (
    <ReactFusioncharts
      type="line"
      width="100%"
      height="60%"
      dataFormat="JSON"
      dataSource = {dataSource}
    />
  );
};

export default Graphic;