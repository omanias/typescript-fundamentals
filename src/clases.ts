class Employee {
  //Atributos

  constructor(private id: number, private name: string, private dept: string) {
    this.showInfo();
  }

  //Métodos
  private showInfo(): void {
    console.log(`${this.name} - ${this.dept}`);
  }
}

const emp = new Employee(1, "Coderhouse", "Sales");

console.log(emp);
