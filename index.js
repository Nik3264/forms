class Checkbox {
  constructor(id, classCheckbox, name, dataOn, dataOff, checked='') {
    this.id = id;
    this.classCheckbox = classCheckbox;
    this.name = name;
    this.dataOn = dataOn;
    this.dataOff = dataOff;
    this.checked=checked;
  }
  createCheckbox(id) {}
  render() {
    return `<input 
                type="radio" 
                id=${this.id} 
                name=${this.name} 
                class=${this.classCheckbox}
                checked=${this.checked}> 
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

  addFieldSet(fieldSetClass,legendText='') {
    const field=this.form.appendChild(document.createElement("fieldset"));
    field.className = fieldSetClass;
    field.appendChild(document.createElement('legend')).innerText=`${legendText}`;
  }

  addLegend(fieldSetClass) {
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

let female = new Checkbox("demo1", "sex", "check", "female", "female");
let male = new Checkbox("demo2", "sex", "check", "male", "male");
let all = new Checkbox("demo3", "sex", "check", "all", "all");

let ageUp = new Checkbox("demo4", "sex", "check1", "age-up", "age-up");
let ageDown = new Checkbox("demo5", "sex", "check1", "age-down", "age-down");
let nameUp = new Checkbox("demo6", "sex", "check1", "name-up", "name-up");
let nameDown = new Checkbox("demo7", "sex", "check1", "name-down", "name-down");
let unsorted = new Checkbox("demo8", "sex", "check1", "unsorted", "unsorted");

const myForm = new Form(".container", "form");

myForm.addFieldSet("field1",'Filter by gender');
myForm.addFieldSet("field2","Sorting");

myForm.addCheckbox(female, '.field1');
myForm.addCheckbox(male, '.field1');
myForm.addCheckbox(all, '.field1');

myForm.addCheckbox(ageUp, '.field2');
myForm.addCheckbox(ageDown, '.field2');
myForm.addCheckbox(nameUp, '.field2');
myForm.addCheckbox(nameDown, '.field2');
myForm.addCheckbox(unsorted, '.field2');
