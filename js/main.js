"use strict";

(function () {
  console.log("hello world");

  let type = "line"; //棒グラフの場合、"line"

  //渡すデータはオブジェクト形式で渡す//
  //横軸はlabelsで定義、格納する値はdatasetsで定義
  //格納するデータの1セットはオブジェクトで渡す
  //複数のデータを渡す場合は配列で渡す
  let data = {
    labels: [2010, 2011, 2012, 2013],
    datasets: [
      {
        label: "@taguchi",
        data: [120, 300, 200, 210],
      },
      {
        label: "@fkoji",
        data: [180, 250, 320, 180],
      },
    ],
  };

  let options;

  let ctx = document.getElementById("js-my_chart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });
})();
