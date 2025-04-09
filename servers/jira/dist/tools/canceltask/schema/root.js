import { z } from "zod";
export const inputParams = {
    "taskId": z.string().describe("The ID of the task.")
};
