const menu_btn = document.querySelector('.menu-mobile__hamburger')

// по нажатию на кнопку hamburger
menu_btn.onclick = function(event){
    // получаем весь блок меню
    let menu = this.parentNode
    // если у элемента меню присутствует класс с названием active
    // classList - получаем список всех классов у элемента
    // contains - поиск класса в списке classList
    // тогда условие истина
    if (menu.classList.contains('active') )
    {
        // скрываем
        menu.style.right = '-104px'
        // remove - удаляем класс active
        menu.classList.remove('active')
    }
    else
    {
        // отображаем
        menu.style.right = '0'
        // add - добавить класс active для элемента
        menu.classList.add('active')
    }

}

// если изменили размеры видимой области экрана
window.onresize = function(){
    // если экран более 760px тогда для блока menu-mobile
    // удаляем класс active
    if( window.innerWidth > 760) 
    {
        menu_btn.parentNode.classList.remove('active')
        // скрываем меню
        menu_btn.parentNode.style.right = '-104px'
    }

}
