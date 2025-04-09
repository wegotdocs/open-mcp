import { z } from "zod";
export const inputParams = {
    "accessLevel": z.enum(["open", "limited", "private", "free"]).describe("The access level of the project. Only used by team-managed project").optional(),
    "additionalProperties": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `additionalProperties` to the tool, first call the tool `expandSchema` with \"/properties/details/properties/additionalProperties\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Additional properties of the project</property-description>").optional(),
    "assigneeType": z.enum(["PROJECT_DEFAULT", "COMPONENT_LEAD", "PROJECT_LEAD", "UNASSIGNED"]).describe("The default assignee when creating issues in the project").optional(),
    "avatarId": z.number().int().describe("The ID of the project's avatar. Use the \\[Get project avatars\\](\\#api-rest-api-3-project-projectIdOrKey-avatar-get) operation to list the available avatars in a project.").optional(),
    "categoryId": z.number().int().describe("The ID of the project's category. A complete list of category IDs is found using the [Get all project categories](#api-rest-api-3-projectCategory-get) operation.").optional(),
    "description": z.string().describe("Brief description of the project").optional(),
    "enableComponents": z.boolean().describe("Whether components are enabled for the project. Only used by company-managed project").optional(),
    "key": z.string().describe("Project keys must be unique and start with an uppercase letter followed by one or more uppercase alphanumeric characters. The maximum length is 10 characters.").optional(),
    "language": z.string().describe("The default language for the project").optional(),
    "leadAccountId": z.string().describe("The account ID of the project lead. Either `lead` or `leadAccountId` must be set when creating a project. Cannot be provided with `lead`.").optional(),
    "name": z.string().describe("Name of the project").optional(),
    "url": z.string().describe("A link to information about this project, such as project documentation").optional()
};
