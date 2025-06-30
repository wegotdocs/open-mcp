import { z } from "zod"

export const inputParamsSchema = {
  "projectId": z.string().describe("The ID of the project."),
  "relations": z.array(z.object({ "userId": z.string().describe("The unique identifier of the user."), "role": z.string().describe("The role assigned to the user in the project.") })).describe("A list of userIds and roles to add to the project.")
}