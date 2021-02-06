import { User } from './models/Users';

const user = new User({ name: 'haime', age: 22})

user.on('change', ()=>{});
user.on('change', ()=>{})
user.on('chuhchuhchanges', ()=>{})

console.log(user)