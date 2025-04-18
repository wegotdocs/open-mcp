import { z } from "zod"

export const inputParamsSchema = {
  "owner": z.string().describe("The account owner of the repository. The name is not case sensitive."),
  "repo": z.string().describe("The name of the repository without the `.git` extension. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery."),
  "delivery_id": z.number().int()
}