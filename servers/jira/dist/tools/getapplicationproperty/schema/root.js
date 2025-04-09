import { z } from "zod";
export const inputParams = {
    "key": z.string().describe("The key of the application property.").optional(),
    "permissionLevel": z.string().describe("The permission level of all items being returned in the list.").optional(),
    "keyFilter": z.string().describe("When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.").optional()
};
