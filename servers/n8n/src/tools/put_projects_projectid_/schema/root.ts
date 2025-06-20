import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string().describe("The ID of the project."),
  "id": z.string().readonly().optional(),
  "name": z.string(),
  "type": z.string().readonly().optional()
}