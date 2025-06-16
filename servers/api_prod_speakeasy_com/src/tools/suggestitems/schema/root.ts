import { z } from "zod"

export const inputParamsSchema = {
  "prompt": z.string().describe("The prompt to use for the suggestion. Think of this as the \"preamble\"."),
  "items": z.array(z.string()).describe("The list of \"things\" to get suggestions for. One suggestion will be returned for each item in the list.")
}