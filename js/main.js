"use strict";

(function () {
  console.log("hello world"); //出力確認

  let type = "radar";

  //渡すデータはオブジェクト形式で渡す//
  let data = {
    labels:["PHP" , "HTML" , "CSS" , "JavaScript" , "Python"],
    datasets:[
      {
      label:"@taguchi",
      data:[40,50,60,70,60],
      backgroundColor:"rgba(255,0,0,0.3)",
      },
      {
      label:"@fkoji",
      data:[80,30,40,60,80],
      backgroundColor:"rgba(0,0,255,0.3)",
      },
  ]
  };

  //オプションを渡す場合、オブジェクトで渡す。
  //渡す箇所は、インスタンス生成時の第二引数のoptions。
  let options = {
    scale:{
      ticks:{
        beginAtZero:true,
        suggestedMax:100,
      },
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
