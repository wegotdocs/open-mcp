import { z } from "zod";
export const inputParams = {
    "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme. This ID must be included in `issueTypeIds`.").optional(),
    "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(),
    "issueTypeIds": z.array(z.string()).describe("The list of issue types IDs of the issue type scheme. At least one standard issue type ID is required."),
    "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.")
};
