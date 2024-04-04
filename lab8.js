class Person {
    constructor(name, age, occupation, nationality) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
        this.nationality = nationality;
    }

    // Метод для виведення інформації про особу
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}, Occupation: ${this.occupation}, Nationality: ${this.nationality}`;
    }
}

// Створення об'єктів класу Person
const person1 = new Person("Давід Смітт", 30, "Механік", "Американець");
const person2 = new Person("Саша Вотсонн", 27, "Бізнесвумен", "Британка");
const person3 = new Person("Олег Коновал", 35, "Програміст", "Українець");

// Додавання інформації про осіб на веб-сторінку
document.getElementById('box1').textContent = person1.displayInfo();
document.getElementById('box2').textContent = person2.displayInfo();
document.getElementById('box3').textContent = person3.displayInfo();