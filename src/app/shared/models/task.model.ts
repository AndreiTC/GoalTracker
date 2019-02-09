import { Difficulty } from "./difficulty.model";
import { TaskDetail } from "./task-detail.model";

export class Task {
id: number;
name: string;
difficulty: Difficulty;
description: string;
category: string;
date: Date;
userId: number;
taskDetails: TaskDetail;
}