import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The name of the new project template."),
  "team": z.string().describe("Sets the team of the new project template. If the project exists in an organization, specify team and not workspace.").optional(),
  "workspace": z.string().describe("Sets the workspace of the new project template. Only specify workspace if the project exists in a workspace.").optional(),
  "public": z.boolean().describe("Sets the project template to public to its team.")
}