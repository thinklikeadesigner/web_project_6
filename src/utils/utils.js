// const initialCards = [
//   {
//     name: "Bald Mountains",
//     link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
//   },
//   {
//     name: "Yosemite Valley",
//     link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
//   },
//   {
//     name: "Lake Louise",
//     link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://code.s3.yandex.net/web-code/latemar.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://code.s3.yandex.net/web-code/lago.jpg",
//   },
//   {
//     name: "Vanoise National Park",
//     link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
//   },
// ];

const settings = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button",
  inactiveButtonClass: "form__button_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_visible",
};

const cardsConfig = {
  cardSelector: "#card__template",
  placesWrap: ".cards__list",
};

const profileConfig = {
  profileTitle: ".profile__name",
  profileDescription: ".profile__job",
  profileAvatar: ".profile__pic",
};

const popupConfig = {
  addFormModalWindow: ".modal_type_add",
  avatarFormModalWindow: ".modal_type_avatar",
  editFormModalWindow: ".modal_type_edit",
};

const avatarModalButton = document.querySelector(".profile__pic");
const editModalButton = document.querySelector(".profile__edit-btn");
const inputJob = document.querySelector(".form__input_type_job");
const inputName = document.querySelector(".form__input_type_name");
const profileJob = document.querySelector(".profile__job");
const profileName = document.querySelector(".profile__name");
const profileAvatar = document.querySelector(".profile__pic");
const deleteSubmit = document.querySelector(".delete-submit");
const submitButtonPlaces = document.querySelector(".places-submit");
const editSubmit = document.querySelector(".edit-submit");
const avatarSubmit = document.querySelector(".avatar-submit");
const addModalButton = document.querySelector(".profile__add-btn");

export {
  submitButtonPlaces,
  editSubmit,
  avatarSubmit,
  addModalButton,
  profileConfig,
  avatarModalButton,
  editModalButton,
  popupConfig,
  cardsConfig,
  settings,
  inputJob,
  profileAvatar,
  inputName,
  profileName,
  profileJob,
  deleteSubmit,
};