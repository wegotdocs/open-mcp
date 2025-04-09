import { z } from "zod"

export const inputParams = {
  "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "description": z.string().describe("A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role.").optional(),
  "name": z.string().describe("The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role.").optional()
}