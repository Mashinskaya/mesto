const popup = document.querySelector('.popup');

const openPopupBtn = document.getElementById('open_popup_btn');

const closePopupBtn = document.querySelector('.popup__close-button');
const safePopupBtn = document.querySelector('.popup__safe-button');

function openPopup() {
  popup.classList.add('popup__visible')
}
function closePopup() {
  popup.classList.remove('popup__visible')
}

openPopupBtn.addEventListener('click', function() {
  openPopup()
});

closePopupBtn.addEventListener('click', function() {
  closePopup()
});

safePopupBtn.addEventListener('click', function() {
  closePopup()
});

let formElement = document.querySelector('.popup__content');
let nameInput = document.querySelector('.profile__title');
let jobInput = document.querySelector('.profile__subtitle');
let nameElement = document.querySelector('.popup__name');
let jobElement = document.querySelector('.popup__job');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInput.textContent = nameElement.value;
  jobInput.textContent = jobElement.value;
};

formElement.addEventListener('submit', formSubmitHandler); 