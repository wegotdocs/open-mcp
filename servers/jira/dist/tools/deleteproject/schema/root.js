import { z } from "zod";
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "enableUndo": z.boolean().describe("Whether this project is placed in the Jira recycle bin where it will be available for restoration.").optional()
};
