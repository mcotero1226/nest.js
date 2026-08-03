import { Injectable } from "@nestjs/common";
import { DtoTask } from "./dto";
@Injectable()
export class TaskServicie {
    private InfoTask: DtoTask[] = []

    postTaks(task: DtoTask) {
        this.InfoTask.push(task)
        return this.InfoTask
    }

}