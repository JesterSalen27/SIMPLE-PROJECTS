let y = document.querySelector(".year");
let c = document.querySelector(".col");
let hr = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let dis = document.querySelector(".discp");
let num1 = 0;
let num2 = 0;
let num3 = 0;

setInterval(year, 1000);

function year() {
  let dt = new Date();
  let x = dt.getFullYear();

  let dts = new Date();
  let hrfut = (31 - dts.getDate()) * 24 + 24 - dts.getHours() - 1;

  let minnow = 60 - dts.getMinutes() - 1;
  let minfut = minnow < 10 ? "0" + minnow : minnow;

  let secnow = 60 - dts.getSeconds();
  let secfut = secnow < 10 ? "0" + secnow : secnow;

  hr.innerHTML = hrfut;
  min.innerHTML = minfut;

  sec.innerHTML = secfut;

  y.innerHTML = dts.getFullYear();

  if (hrfut === 0 && minfut === 0 && secfut <= 10) {
    num1 = Math.random() * 255;
    num2 = Math.random() * 255;
    num3 = Math.random() * 255;

    y.style.color =
      "rgba(" +
      (num1 + 50) +
      "," +
      (num2 + 50) +
      "," +
      (num3 + 50) +
      "," +
      0.9 +
      ")";
    c.style.background =
      "rgba(" + (num1 - 30) + "," + (num2 - 30) + "," + (num3 - 30) + ")";
  }
  if (hrfut === 0 && minfut === 0 && secfut === 0) {
    num1 = Math.random() * 255;
    num2 = Math.random() * 255;
    num3 = Math.random() * 255;
    y.style.color =
      "rgba(" +
      (num1 + 50) +
      "," +
      (num2 + 50) +
      "," +
      (num3 + 50) +
      "," +
      0.9 +
      ")";
    c.style.background =
      "rgba(" + (num1 - 30) + "," + (num2 - 30) + "," + (num3 - 30) + ")";
    y.style.background =
      "url(" +
      "https://i.pinimg.com/originals/3a/b3/5e/3ab35e9632c5b906f1774272bd260972.gif" +
      ")";
    dis.style.display = "block";
  }
}
