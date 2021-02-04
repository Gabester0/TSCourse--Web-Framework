import { User } from './models/Users';

const user = new User({ name: 'haime', age: 22})

console.log(user.get('name'))
console.log(user.get('age'))