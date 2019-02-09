import { Delay } from "./delay.model";
import { Step } from "./step.model";

export class TaskDetail {
id: number;
goal: string;
timeFrame: string;
delays: Delay;
steps: Step;
}