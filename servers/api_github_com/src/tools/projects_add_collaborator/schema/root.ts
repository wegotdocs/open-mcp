import { z } from "zod"

export const inputParamsSchema = {
  "project_id": z.number().int().describe("The unique identifier of the project."),
  "username": z.string().describe("The handle for the GitHub user account."),
  "permission": z.enum(["read","write","admin"]).describe("The permission to grant the collaborator.").optional()
}