import { User } from './User'

export class Teacher extends User
{
    id: String;
	login: String;
    password: String;
    name: String;
    type: String;
}