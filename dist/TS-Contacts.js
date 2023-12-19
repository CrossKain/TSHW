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
];
const logPerson = (persons) => {
    console.log(`${persons.name}, ${persons.age}`);
};
console.log('Users:');
persons.forEach(logPerson);
