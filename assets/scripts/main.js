var menu = document.querySelector('.menu')
var menuOpen = document.querySelector('.header__bar')
var menuClose = document.querySelector('.close-icon')

menuOpen.addEventListener('click', function() {
    menu.classList.add('menu-active')
})

menuClose.addEventListener('click', function() {
    menu.classList.remove('menu-active')
})

document.addEventListener('click', function(e) {
    //contains() và matches() trả về boolean
    //contains() giống classList.contains()
    //nếu thằng được click vào không phải con của menu & ko có css selector ".header__bar"
    if (!menu.contains(e.target) && !e.target.matches('.header__bar')) {
        menu.classList.remove('menu-active')
    }
})
