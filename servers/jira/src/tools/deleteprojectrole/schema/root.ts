import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The ID of the project role to delete. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."),
  "swap": z.number().int().describe("The ID of the project role that will replace the one being deleted. The swap will attempt to swap the role in schemes (notifications, permissions, issue security), workflows, worklogs and comments.").optional()
}