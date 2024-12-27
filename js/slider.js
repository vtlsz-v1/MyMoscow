const images = document.querySelectorAll(".slider-box_line img");
const sliderLine = document.querySelector(".slider-box_line");
const panel = document.querySelector(".slider-box_control-panel");

//count - счетчик
let count = 0;
//width - какая-то ширина
let width = null;

console.log(images);
console.log(sliderLine);

//arrow left
//addEventListener('click',function(){}) - функция устанавливает событие на выбранный эл-т
panel.children[0].addEventListener("click", function (event) {
  count++
  //если мы дошли до конца - обнуляем счетчик
  if (count >= images.length ){
    count = 0
  }
  
  rollslider()
})
//arrow right
panel.children[1].addEventListener("click", function (event) {
  count--
//если = 0 тогда count = длине массива - 1
  if (count < 0) count = images.length -1
  rollslider()
})
//запускаем функцию при загрузке страницы
window.onload = init();

//при изменении размеров экрана каждый раз запускаем ф-ию init
window.addEventListener('resize',init)

function rollslider()
{
  sliderLine.style.transform = "translateX(-"+(count * width)+"px"
}

function init() {
  //получаем ширину блока
  width = document.querySelector(".slider-box").offsetWidth
  //sliderLine.style.width = (width * images.length) + 'px'
  console.log(width)
  rollslider()
}
