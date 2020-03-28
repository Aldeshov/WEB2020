import { Teacher } from './Teacher';

export class Course 
{
	id: string;
	name: string;
	credits: number;
	schedule: number[][] = [];
	teacher: Teacher;
	room: string;
}
