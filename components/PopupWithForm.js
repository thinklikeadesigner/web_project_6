import Popup from "./Popup.js";



// It stores a private method named _getInputValues(), which collects data from all the input fields.
// It modifies the setEventListeners() parent method. The setEventListeners() method of the PopupWithForm class has to add the click event listener to the close icon while also adding the submit event handler.


// It takes a callback of the form submission into the constructor, as well as the popup selector.

// function editFormSubmitHandler(evt) {
//     evt.preventDefault();
//     profileName.textContent = inputName.value;
//     profileJob.textContent = inputJob.value;
//     toggleModalWindow(editModalWindow);
//   }

export default class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._formEdit = document.querySelector(".form_edit");
        this._formAdd = document.querySelector(".form_add");
    }
open() {
    super.open();
        document.querySelector(".form__input_type_job").value = document.querySelector(".profile__job").textContent
    document.querySelector(".form__input_type_name").value = document.querySelector(".profile__name").textContent

}
// It modifies the close() parent method in order to reset the form once the popup is closed.
close() {
    super.close();
    this._formEdit.reset();
    this._formAdd.reset();


}



setEventListeners() {
  super.setEventListeners();
  this._popupElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();


  })
}

_getInputValues() {
    this._inputList = this._popupElement.querySelectorAll(".form__input");
    
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    
    return this._formValues;
  }

}


// export default class SubmitForm {
//     constructor({ formSelector, handleFormSubmit }) {
//       this._formSelector = formSelector;
//       this._handleFormSubmit = handleFormSubmit;
//     }
  
//     _getTemplate() {
//         const formElement = document
//         .querySelector(this._formSelector)
//         .content
//         .querySelector(".form")
//         .cloneNode(true);
  
//       return formElement;
//     }
  
//     _setEventListeners() {
//       this._element.addEventListener("submit", (evt) => {
//         evt.preventDefault();
//         this._handleFormSubmit(this._getInputValues());
  
//         this._element.reset();
//       })
//     }
  
    // _getInputValues() {
    //   this._inputList = this._element.querySelectorAll(".form__input");
      
    //   this._formValues = {};
    //   this._inputList.forEach(input => this._formValues[input.name] = input.value);
      
    //   return this._formValues;
    // }
  
//     generateForm() {
//       this._element = this._getTemplate();
//       this._setEventListeners();
  
//         return this._element;
//     }
//   }