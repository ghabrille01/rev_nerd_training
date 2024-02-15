// ES Module Export
const person = {
    name: "Mike",
    role: "front end Engineer"
}

export function printRole() {
    console.log(person.role);
}

export default {
    person,
    printRole
}