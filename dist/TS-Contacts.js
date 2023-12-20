"use strict";
const persons = [
    {
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        name: 'Максим Лескин',
        age: 35,
        group: 'Веб - Бог',
    },
    {
        name: 'Денис Фомин',
        age: 36,
        group: 'Затупок',
    },
    {
        name: 'Хз Даже',
        age: 12,
        group: 'Обрубок программиста',
    },
    {
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        name: 'Админ',
        age: 20,
        role: 'Админ',
    },
];
const logPerson = (person) => {
    console.log(`${person.name}, ${person.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
