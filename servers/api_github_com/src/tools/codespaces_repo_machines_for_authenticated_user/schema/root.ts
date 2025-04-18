import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "location": z.string().describe("The location to check for available machines. Assigned by IP if not provided.").optional(),
  "client_ip": z.string().describe("IP for location auto-detection when proxying a request").optional(),
  "ref": z.string().describe("The branch or commit to check for prebuild availability and devcontainer restrictions.").optional()
}