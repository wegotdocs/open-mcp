import { z } from "zod";
export const inputParams = {
    "thread_id": z.string().describe("The ID of the thread to which the run and run step belongs."),
    "run_id": z.string().describe("The ID of the run to which the run step belongs."),
    "step_id": z.string().describe("The ID of the run step to retrieve.")
};
