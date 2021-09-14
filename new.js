class Person {
     constructor(firstName, lastName, salary) {
          this.firstName = firstName;
          this.lastName = lastName;
          this.salary = salary;
     }
}

const heroPerson = new Person('Ankon', 'Boruya', 30000);
console.log(heroPerson);
const friendlyPerson = new Person('Abdulah Al', 'Umar', 25000);
console.log(friendlyPerson);

// BEFORE ES6 

// function Person1(firstName, lastName, salary){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.salary = salary;
// }

// const oldPerson = new Person1('khursheda', 'Begom', 12000);
// console.log(oldPerson);  