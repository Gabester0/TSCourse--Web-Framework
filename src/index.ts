import { User } from './models/User';

const user = new User({name: 'I am not here', age: 3});

user.save();

user.events.on('change', ()=>{
    console.log('Change!')
});

user.events.trigger('change')