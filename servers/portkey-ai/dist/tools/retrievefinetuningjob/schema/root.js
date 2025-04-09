import { z } from "zod";
export const inputParams = {
    "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job.\n")
};
