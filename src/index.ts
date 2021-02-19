import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: "NAAAME", age: 34})

const root = document.getElementById('root');
const userForm = new UserForm(root, user);

userForm.render();