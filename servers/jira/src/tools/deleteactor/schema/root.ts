import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "user": z.string().describe("The user account ID of the user to remove from the project role.").optional(),
  "group": z.string().describe("The name of the group to remove from the project role. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended.").optional(),
  "groupId": z.string().describe("The ID of the group to remove from the project role. This parameter cannot be used with the `group` parameter.").optional()
}