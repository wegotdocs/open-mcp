import { z } from "zod"

export const inputParams = {
  "screenId": z.number().int().describe("The ID of the screen."),
  "projectKey": z.string().describe("The key of the project.").optional()
}