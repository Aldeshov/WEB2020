import { CourseFile } from './CourseFile'

export class Course 
{
	id: String;
	name: String;
	credits: number;
	schedule: number[][] = [];
	courseFiles: CourseFile[];
	teacherName: String;
	cabinet: String;
}
