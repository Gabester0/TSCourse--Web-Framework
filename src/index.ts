import { User } from './models/Users';

const user = new User({ name: 'haime', age: 22})

user.set({ name: 'Nwnm', age: 990})
user.set({ name: 'Nwnmee'})

console.log(user.get('name'))
console.log(user.get('age'))