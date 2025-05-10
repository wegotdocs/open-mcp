import { z } from "zod"

export const inputParamsSchema = {
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "body": z.string().max(65535).describe("The comment text.")
}