import { z } from "zod";
export const inputParams = {
    "statuses": z.array(z.object({ "description": z.string().describe("The description of the status.").optional(), "id": z.string().describe("The ID of the status."), "name": z.string().describe("The name of the status."), "statusCategory": z.enum(["TODO", "IN_PROGRESS", "DONE"]).describe("The category of the status.") }).catchall(z.any()).describe("Details of the status being updated.")).describe("The list of statuses that will be updated.")
};
