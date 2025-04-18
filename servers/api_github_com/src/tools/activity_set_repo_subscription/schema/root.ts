import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "subscribed": z.boolean().describe("Determines if notifications should be received from this repository.").optional(),
  "ignored": z.boolean().describe("Determines if all notifications should be blocked from this repository.").optional()
}