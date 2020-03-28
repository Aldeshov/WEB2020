import { User } from './User'

export class Teacher extends User
{
    id: string;
	login: string;
    password: string;
    name: string;
    type: string;
}