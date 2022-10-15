class Checkbox {
  constructor(id, classCheckbox, name, dataOn, dataOff) {
    this.id = id;
    this.classCheckbox = classCheckbox;
    this.name = name;
    this.dataOn = dataOn;
    this.dataOff = dataOff;
  }
  createCheckbox(id) {}
  render() {
    return `<input 
                type="radio" 
                id=${this.id} 
                name=${this.name} 
                class=${this.classCheckbox}> 
            <label 
                for=${this.id} 
                data-on-label=${this.dataOn} 
                data-off-label=${this.dataOff}>
            </label>`;
  }
}

class Form {
  constructor(containerClassName, classForm) {
    this.classForm = classForm;
    this.parent = document.querySelector(containerClassName);
    this.render(this.classForm);
    this.form = document.querySelector(this.classForm);
  }

  addFieldSet(fieldSetClass) {
    this.form.appendChild(document.createElement("fieldset"))
    .className = fieldSetClass;
  }

  addCheckbox(checkbox, parentClassName=this.classForm) {
    document.querySelector(parentClassName).innerHTML += checkbox.render();
  }

  render(classForm) {
    console.log(this.parent);
    this.parent.innerHTML = `<form class=${classForm}></form>`;
  }
}

let checkbox = new Checkbox("demo1", "age", "check", "on", "щаа");
let checkbox2 = new Checkbox("demo2", "sex", "check2", "male", "female");
let checkbox3 = new Checkbox("demo3", "sex", "check2", "up", "down");

const myForm = new Form(".container", "form");

myForm.addFieldSet("field1");
myForm.addFieldSet("field2");

myForm.addCheckbox(checkbox, '.field1');
myForm.addCheckbox(checkbox2, '.field2');
myForm.addCheckbox(checkbox3, '.field2');
