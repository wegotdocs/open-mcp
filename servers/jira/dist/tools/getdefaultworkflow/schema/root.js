import { z } from "zod";
export const inputParams = {
    "id": z.number().int().describe("The ID of the workflow scheme."),
    "returnDraftIfExists": z.boolean().describe("Set to `true` to return the default workflow for the workflow scheme's draft rather than scheme itself. If the workflow scheme does not have a draft, then the default workflow for the workflow scheme is returned.").optional()
};
