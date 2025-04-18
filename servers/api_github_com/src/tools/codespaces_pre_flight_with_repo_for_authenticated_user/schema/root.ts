import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "ref": z.string().describe("The branch or commit to check for a default devcontainer path. If not specified, the default branch will be checked.").optional(),
  "client_ip": z.string().describe("An alternative IP for default location auto-detection, such as when proxying a request.").optional()
}