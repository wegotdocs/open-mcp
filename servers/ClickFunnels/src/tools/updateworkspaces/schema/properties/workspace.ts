import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Workspace Name").optional(),
  "subdomain": z.string().describe("The subdomain can currently only be changed in rare cases right after the creation of your new workspace.").optional()
}