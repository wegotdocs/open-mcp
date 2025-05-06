import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "environment_name": z.string().describe("The name of the environment. The name must be URL encoded. For example, any slashes in the name must be replaced with `%2F`.")
}