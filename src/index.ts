import { User } from './models/Users';

const user = new User({ name: 'haime', age: 22})

user.on('change', ()=>{
    console.log('Change #1')
});
user.on('change', ()=>{
    console.log('Change #2')
})
user.on('chuhchuhchanges', ()=>{
    console.log("chuh chuhh chaaaanges")
})

user.trigger('chuhchuhchangees')
