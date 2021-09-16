const body = document.querySelector('body')
const headerTop = document.querySelector('.header-top')
const headerTopClose = document.querySelector('.header-top__btn')
/* popup */
const loginBtn = document.querySelector('#login')
const loginPopup = document.querySelector('.header-popup')
/* menu */
const menuBtn = document.querySelector('.header-burger')
const menuList = document.querySelector('.header-nav__list')
/* form */
const modalWindow = document.querySelector('.modal')
const submitBtn = document.querySelector('.modal-form__btn')
const formInputs = document.querySelectorAll('.modal-form__input')
const phone = document.querySelector('#phone')
/* tab */
const tabItem = document.querySelectorAll('.main-tab')


/* close header top  */
headerTopClose.addEventListener('click', () => {
	headerTop.classList.add('hide')
})

/* show/hide popup */
loginBtn.addEventListener('click', () => {
	showElement(loginPopup)
})


/*open/close tabs & show modal window */
tabItem.forEach((elem) => {
	const tabName = elem.querySelector('.main-tab__name')
	const tabContent = elem.querySelector('.main-tab__content')

	elem.addEventListener('click', (e) => {
		if (e.target.classList.contains('add__btn')) {
			modalWindow.classList.add('show')
			body.classList.add('lock')
		}
		if (e.target === tabName ||
			e.target.classList.contains('main-tab__open') ||
			e.target.classList.contains('main-tab__name-text')) {

			tabName.classList.toggle('active')
			tabContent.classList.toggle('show')
		}
	})
})

/* hide modal window */
modalWindow.addEventListener('click', (e) => {
	if (e.target.classList.contains('modal')) {
		modalWindow.classList.remove('show')
		body.classList.remove('lock')
	}
})

/* validate form */
submitBtn.addEventListener('click', (e) => {
	e.preventDefault()
	const number = new RegExp('^((\\+?380)([0-9]{9}))$')

	formInputs.forEach((elem) => {
		if (elem.value === '' || elem.value === ' ') {
			elem.placeholder = 'Заполните поле!'
			elem.style.borderColor = '#EC3C24'
		} else {
			elem.style.borderColor = '#9BAAAE'
		}
	})

	if (!number.test(phone.value)) {
		phone.style.borderColor = '#EC3C24'
	} else {
		phone.style.borderColor = '#9BAAAE'
	}
})

/* show/hide mobile menu */
menuBtn.addEventListener('click', () => {
	showElement(menuList)
	menuBtn.classList.toggle('active')
	body.classList.toggle('lock')
})

/* hide/show tabs */


/* add/remove class function */
const showElement = (elem) => {
	elem.classList.contains('show') ? elem.classList.remove('show') : elem.classList.add('show')
}