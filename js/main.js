"use strict";

(function () {
  console.log("hello world"); //出力確認

  let type = "bar"; //棒グラフの場合、"bar"
  // type = "line"; //折れ線グラフの場合、"line"
  // type = "horizontalBar";//横棒グラフの場合"horizontalBar""

  //渡すデータはオブジェクト形式で渡す//
  let data = {
    //横軸はlabelsで定義、格納する値はdatasetsで定義
    labels: [2010, 2011, 2012, 2013],
    //複数のデータを渡す場合は配列で渡す
    datasets: [
      //格納するデータの1セットはオブジェクトで渡す
      {
        label: "Sales",
        data: [120, 500, 200, 210],
        yAxisID:"sales-axes",
      },
      {
        label: "Subscribers",
        data: [802, 1324, 1433, 1889],
        type: "line", //こちらだけ折れ線グラフにしたい場合、typeで指定
        fill: false, //折れ線グラフの下の塗り潰しの有無
        yAxisID:"subscribers-axes",
      },
    ],
  };

  //オプションを渡す場合、オブジェクトで渡す。
  //渡す箇所は、インスタンス生成時の第二引数のoptions。
  let options = {
    //軸に関してはscalesに記述
    scales: {
      //y軸はyAxes（y軸）に記載。ticksは「刻む」という意味。
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 400,
          },
          id:"sales-axes",
          type:"linear",
          position:"left",
        },
        {
          ticks:{
            suggestedMin:0,
            suggestedMax:2000,
          },
          id:"subscribers-axes",
          type:"linear",
          position:"right",
          gridLines:{
            display:false,
          }
        }, 
      ],
    },
  };

  //id="js-my_chart"のcanvasに2dのContextを渡す
  let ctx = document.getElementById("js-my_chart").getContext("2d");

  //インスタンスの生成。第一引数にCOntext、第二引数にデータのオブジェクトを渡す
  let myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });
})();
