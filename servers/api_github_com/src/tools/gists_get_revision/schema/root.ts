import { z } from "zod"

export const inputParamsSchema = {
  "gist_id": z.string().describe("The unique identifier of the gist."),
  "sha": z.string()
}