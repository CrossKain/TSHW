interface User {
    type: 'User'
    name: string;
    age: number;
    group: string;
};

interface Admin {
    type: 'Admin';
    name: string;
    age: number;
    role: string;
};

type Person = User | Admin;

const persons: Person[] = [
    {
        type: 'User',
        name: 'Иван Петров',
        age: 27,
        group: 'SEO-специалист',
    },
    {
        type: 'User',
        name: 'Максим Лескин',
        age: 35,
        group: 'Веб - Бог',
    },
    {
        type: 'User',
        name: 'Денис Фомин',
        age: 36,
        group: 'Затупок',
    },
    {
        type: 'User',
        name: 'Хз Даже',
        age: 12,
        group: 'Обрубок программиста',
    },
    {
        type: 'User',
        name: 'Марат Aляуддинов',
        age: 20,
        group: 'Музыкант',
    },
    {
        type: 'Admin',
        name: 'Админ',
        age: 20,
        role: 'Админ',
    },
];



console.log('Users:');



const logPerson = (person: Person) => {
    let information: string = "";
    if (person.type === 'Admin') {
        information = person.role;
    } else {
        information = person.group;
    }
    console.log(`${person.name}, ${person.age}, ${information}`);
};

persons.forEach(logPerson);