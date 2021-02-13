import { User } from './models/User';

const user = new User({name: 'I am not here', age: 3});

user.on('change', ()=> {
    console.log('User was changed')
})

user.set({name: "Sam-bo"})