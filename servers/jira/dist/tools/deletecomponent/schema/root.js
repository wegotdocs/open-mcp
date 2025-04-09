import { z } from "zod";
export const inputParams = {
    "id": z.string().describe("The ID of the component."),
    "moveIssuesTo": z.string().describe("The ID of the component to replace the deleted component. If this value is null no replacement is made.").optional()
};
