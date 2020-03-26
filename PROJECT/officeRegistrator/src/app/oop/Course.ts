import { CourseFile } from './CourseFile'
import { Teacher } from './Teacher';

export class Course 
{
	id: String;
	name: String;
	credits: number;
	schedule: number[][] = [];
	teacher: Teacher;
	room: String;
}
