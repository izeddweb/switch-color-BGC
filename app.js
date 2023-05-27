//   Set Variable
const container = document.querySelector(".container");
const paragraph = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener('click',changeBGC)

//   test 1   ok
function changeBGC (){
  let color;
  color = Math.random().toString().slice(2,8)
  container.style.backgroundColor = ` #${color}`
  paragraph.innerText = `hex: #${color}`
}


//   test 2   ok
// function changeBGC (){
//   const colorBG = ` rgb(${getRGB()},${getRGB()},${getRGB()})`;
//   container.style.backgroundColor = colorBG
//   paragraph.innerText =colorBG
// }
// //    get rgb value
// function getRGB (){
//   return Math.floor(Math.random() * 255).toString();
// }

















