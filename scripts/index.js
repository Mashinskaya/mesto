/*
let popup = document.querySelector('.popup');

let openPopupBtn = document.querySelector('.profile__vector');

let closePopupBtn = document.querySelector('.popup__close-button');

let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let nameElement = document.querySelector('.profile__title');
let jobElement = document.querySelector('.profile__subtitle');

function openPopup() {
  popup.classList.add('popup_visible');
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
}
function closePopup() {
  popup.classList.remove('popup_visible')
}

openPopupBtn.addEventListener('click', openPopup) 

closePopupBtn.addEventListener('click', closePopup)

let formElement = document.querySelector('.popup__form');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
  closePopup()
};
formElement.addEventListener('submit', formSubmitHandler); 

*/

const initialCardsData = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const editModal = document.querySelector('.popup_type_edit')
const addCardModal = document.querySelector('.popup_type_add-card')
const imageModal = document.querySelector('.popup_type_image')

const openEditModalButton = document.querySelector('.profile__vector')
const openAddCardModalButton = document.querySelector('.profile__add-button')
const openImageModalButton = document.querySelector('.popup_type_edit')

const closeEditModalButton = editModal.querySelector('.popup__close-button','.popup__save-button')
const closeAddCardModalButton = addCardModal.querySelector('.popup__close-button')
const closeImageModalButton = imageModal.querySelector('.popup__close-button')
const imageModalImage = imageModal.querySelector('.cards__image')
const imageModalCaption = imageModal.querySelector('.cards__title')
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const nameElement = document.querySelector('.profile__title');
const jobElement = document.querySelector('.profile__subtitle');

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
 
};

formElement.addEventListener('submit', formSubmitHandler); 

function toggleModalWindow (modal) {
 modal.classList.toggle('popup_visible')
}


openEditModalButton.addEventListener('click', () => toggleModalWindow(editModal))
openAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))

closeEditModalButton.addEventListener('click', () => toggleModalWindow(editModal))
closeAddCardModalButton.addEventListener('click', () => toggleModalWindow(addCardModal))


 function generateCard(data) {

  function imageClickHandler (e) {
    imageModalImage.src = data.link;
    imageModalCaption.textContent = data.name;
     toggleModalWindow(imageModal);
   }

   const img = '';
   img.addEventListener('click', imageClickHandler)
 }
