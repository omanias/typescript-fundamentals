"use strict";
class Employee {
    //Atributos
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    //Métodos
    showInfo() {
        console.log(`${this.name} - ${this.dept}`);
    }
}
const emp = new Employee(1, "Coderhouse", "Sales");
console.log(emp);
