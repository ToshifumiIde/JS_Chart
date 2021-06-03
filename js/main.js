"use strict";

(function () {
  console.log("hello world"); //出力確認

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
        data: [120, 500, 200, 210],
      },
      {
        label: "@fkoji",
        data: [180, 250, 320, 180],
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
            // min:0,
            // max:400,//ただしこの場合、最大値が400を超える場合グラフの描画範囲を超える。下記に変更。
            //基本的な範囲は0~400だが、超えた場合は適切に範囲を再選択する。
            suggestedMin: 0,
            suggestedMax: 400,
            //軸を100刻みにしたい場合、stepSizeで指定可能。
            // stepSize: 100,
            //軸の単位をつける場合、callbackをkeyに渡し、値は無名関数。第一引数：値、第二引数：何番目、第三引数：
            // callback: function (value, index, values) {
            //   return "JPY" + value;
            // },
          },
        },
      ],
    },
    //titleを追加したい場合、optionにtitleを追加
    title: {
      display: true,//表示するか否か
      text: "Annual Sales",//title欄に入力するtext
      fontSize:18,
      position:"bottom",//デフォルトはtop
    },
    animation:{
      // duration:0,//グラフのアニメーションをキャンセルする場合
    },
    //凡例の設定
    legend:{
      // position:"right",//位置を右に置きたい場合
      display:false,//そもそも表示させない場合
    }
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
