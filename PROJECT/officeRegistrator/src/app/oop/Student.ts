import { User } from './User'
import { Course } from './Course'

export class Student extends User 
{
	id: String;
	login: String;
	password: String;
	name: String;
	courses: Course[];
	type: String;
}
