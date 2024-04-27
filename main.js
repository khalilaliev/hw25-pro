"use strict";

class Person {
  constructor(firstName, gender, age) {
    this.firstName = firstName;
    this.gender = gender;
    this.age = age;
  }
}

class Apartment {
  constructor() {
    this.residents = [];
  }

  addPerson(resident) {
    return this.residents.push(resident);
  }
}

class Home {
  constructor(maxValue) {
    this.apartments = [];
    this.maxValue = maxValue;
  }

  valueOfApartments(value) {
    if (this.apartments.length < this.maxValue) {
      return this.apartments.push(value);
    } else {
      console.log("Max value of Apartments!");
    }
  }
}

const person1 = new Person("Bob", "Male", 33);
const person2 = new Person("John", "Male", 25);
const person3 = new Person("Emile", "Female", 21);
const person4 = new Person("Elizabeth", "Female", 32);
const person5 = new Person("Bob", "Male", 45);
const person6 = new Person("Mary", "Female", 37);

const apartment = new Apartment();

apartment.addPerson(person1);
apartment.addPerson(person2);
apartment.addPerson(person3);
apartment.addPerson(person4);
apartment.addPerson(person5);
apartment.addPerson(person6);

const home = new Home(5);

home.valueOfApartments(apartment);

console.log(apartment.residents);
