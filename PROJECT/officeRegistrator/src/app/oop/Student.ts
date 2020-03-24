import { User } from './User'
import { Course } from './Course'

export class Student extends User 
{
	id: String;
	userName: String;
	userPassword: String;
	name: String;
	courses: Course[] = [];
	newHeaders: String[];
	news: String[];
}
