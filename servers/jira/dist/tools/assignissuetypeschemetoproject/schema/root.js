import { z } from "zod";
export const inputParams = {
    "issueTypeSchemeId": z.string().describe("The ID of the issue type scheme."),
    "projectId": z.string().describe("The ID of the project.")
};
