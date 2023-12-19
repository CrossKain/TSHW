

type User = {
    name: string;
    age: number;
    group: string;

};
type Admin = {
    name: string;
    age: number;
    role?: string;
};

type Persons = User[]

const persons: Persons = [
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

const logPerson = (persons: User | Admin) => {
    console.log(`${persons.name}, ${persons.age}`);
}

console.log('Users:');
persons.forEach(logPerson);

