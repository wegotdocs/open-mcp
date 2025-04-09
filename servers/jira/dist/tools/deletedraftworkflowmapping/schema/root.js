import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the workflow scheme that the draft belongs to."),
    "workflowName": z.string().describe("The name of the workflow.")
};
