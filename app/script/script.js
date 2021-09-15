const headerTop = document.querySelector('.header-top')
const headerTopClose = document.querySelector('.header-top__btn')
const loginBtn = document.querySelector('#login')
const loginPopup = document.querySelector('.header-popup')
const tabItem = document.querySelectorAll('.main-tab')
const modalWindow = document.querySelector('.modal')
const menuBtn = document.querySelector('.header-burger')
const menuList = document.querySelector('.header-nav__list')

headerTopClose.addEventListener('click', () => {
	headerTop.classList.add('hide')
})

loginBtn.addEventListener('click', () => {
	showElement(loginPopup)
})



tabItem.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		if (e.target.classList.contains('add__btn')) {
			modalWindow.classList.add('show')
		}
	})
})

modalWindow.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modalWindow.classList.remove('show')
	}
})

menuBtn.addEventListener('click', () => {
	showElement(menuList)
})

const showElement = (elem) => {
	elem.classList.contains('show') ? elem.classList.remove('show') : elem.classList.add('show')
}