import { z } from "zod";
export const inputParams = {
    "id": z.string(),
    "category": z.string().describe("The category of the related work"),
    "issueId": z.number().int().describe("The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.").readonly().optional(),
    "relatedWorkId": z.string().describe("The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.").readonly().optional(),
    "title": z.string().describe("The title of the related work").optional(),
    "url": z.string().url().describe("The URL of the related work. Will be null for the native release note related work item, but is otherwise required.").optional()
};
