const headerTop = document.querySelector('.header-top')
const headerTopClose = document.querySelector('.header-top__btn')
const loginBtn = document.querySelector('#login')
const loginPopup = document.querySelector('.header-popup')
const tabItem = document.querySelectorAll('.main-tab')
const modalWindow = document.querySelector('.modal')
const menuBtn = document.querySelector('.header-burger')
const menuList = document.querySelector('.header-nav__list')
const submitBtn = document.querySelector('.modal-form__btn')
const formInputs = document.querySelectorAll('.modal-form__input')
const phone = document.querySelector('#phone')

/* close header top  */
headerTopClose.addEventListener('click', () => {
	headerTop.classList.add('hide')
})

/* show/hide popup */
loginBtn.addEventListener('click', () => {
	showElement(loginPopup)
})


/* show modal window */
tabItem.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		if (e.target.classList.contains('add__btn')) {
			modalWindow.classList.add('show')
		}
	})
})

/* hide modal window */
modalWindow.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modalWindow.classList.remove('show')
	}
})

/* validate form */
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const number = new RegExp('^((\\+?380)([0-9]{9}))$')

	formInputs.forEach((elem) => {
		if (elem.value === '' || elem.value === ' ') {
			elem.placeholder = 'Заполните поле!'
			elem.style.borderColor='#EC3C24'
		} else {
			elem.style.borderColor='#9BAAAE'
		}
	})

	if (!number.test(phone.value)) {
		phone.style.borderColor='#EC3C24'
	} else {
		phone.style.borderColor = '#9BAAAE'
		modalWindow.classList.remove('show')
	}
})

/* show/hide mobile menu */
menuBtn.addEventListener('click', () => {
	showElement(menuList)
})

/* add/remove class function */
const showElement = (elem) => {
	elem.classList.contains('show') ? elem.classList.remove('show') : elem.classList.add('show')
}