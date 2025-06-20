import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string().describe("The ID of the project."),
  "userId": z.string().describe("The ID of the user."),
  "role": z.string().describe("The role assigned to the user in the project.")
}