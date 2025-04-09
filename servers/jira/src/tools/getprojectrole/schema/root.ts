import { z } from "zod"

export const inputParams = {
  "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "excludeInactiveUsers": z.boolean().describe("Exclude inactive users.").optional()
}