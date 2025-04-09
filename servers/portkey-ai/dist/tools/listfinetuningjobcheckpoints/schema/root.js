import { z } from "zod";
export const inputParams = {
    "fine_tuning_job_id": z.string().describe("The ID of the fine-tuning job to get checkpoints for.\n"),
    "after": z.string().describe("Identifier for the last checkpoint ID from the previous pagination request.").optional(),
    "limit": z.number().int().describe("Number of checkpoints to retrieve.").optional()
};
