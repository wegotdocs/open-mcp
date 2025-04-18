import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the project."),
  "body": z.string().describe("The description of the project.").optional()
}