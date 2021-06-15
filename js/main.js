"use strict";

(function () {
  console.log("hello world"); //出力確認

  let type = "pie";
  type = "doughnut";

  //渡すデータはオブジェクト形式で渡す//
  let data = {
    labels:["YES","NO","MAYBE"],
    datasets:[
      {
        data:[122,53,33,],
        backgroundColor:[
          "red",
          "green",
          "blue",
        ]
      },
  ]
  };

  //オプションを渡す場合、オブジェクトで渡す。
  //渡す箇所は、インスタンス生成時の第二引数のoptions。
  let options = {
    cutoutPercentage:40,
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
