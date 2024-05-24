const Person = {
    name: "Pratyush",
    age:19,
    isMarried: false
};

//how to clone a person
const person = {...person, name: "Jack"} //everything same except name = jack

const name = person.name
const age = person.age
const isMarried = person.isMarried
//too much space taken

const {name2,age2,isMarried2} = person;

