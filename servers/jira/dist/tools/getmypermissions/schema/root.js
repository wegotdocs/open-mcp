import { z } from "zod";
export const inputParams = {
    "projectKey": z.string().describe("The key of project. Ignored if `projectId` is provided.").optional(),
    "projectId": z.string().describe("The ID of project.").optional(),
    "issueKey": z.string().describe("The key of the issue. Ignored if `issueId` is provided.").optional(),
    "issueId": z.string().describe("The ID of the issue.").optional(),
    "permissions": z.string().describe("A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).").optional(),
    "projectUuid": z.string().optional(),
    "projectConfigurationUuid": z.string().optional(),
    "commentId": z.string().describe("The ID of the comment.").optional()
};
