"use strict";

(function () {
  console.log("hello world");

  let type;
  let data;
  let options;

  let ctx = document.getElementById("js-my_chart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options,
  });
})();
