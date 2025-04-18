import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "selected_repository_ids": z.array(z.number().int()).describe("The IDs of the repositories that can access the organization variable.")
}