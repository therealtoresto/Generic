type Person = {
    name: string,
    born: number,
    city: string,
};

const person: Readonly<person> = {
    name: 'Marcus',
    born: 121,
    city: 'Roma',
};

// person.name = 'Marcus Aurelius';

console.dir(person);