import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "name": z.string().describe("The name of the variable."),
  "value": z.string().describe("The value of the variable."),
  "visibility": z.enum(["all","private","selected"]).describe("The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable."),
  "selected_repository_ids": z.array(z.number().int()).describe("An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.").optional()
}