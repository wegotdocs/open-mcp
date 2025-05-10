import { z } from "zod"

export const inputParamsSchema = {
  "tag": z.string().describe("The tag's gid to add to the task.")
}