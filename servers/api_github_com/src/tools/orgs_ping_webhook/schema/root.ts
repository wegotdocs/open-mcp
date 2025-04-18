import { z } from "zod"

export const inputParamsSchema = {
  "org": z.string().describe("The organization name. The name is not case sensitive."),
  "hook_id": z.number().int().describe("The unique identifier of the hook. You can find this value in the `X-GitHub-Hook-ID` header of a webhook delivery.")
}