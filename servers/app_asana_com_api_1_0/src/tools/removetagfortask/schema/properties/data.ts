import { z } from "zod"

export const inputParamsSchema = {
  "tag": z.string().describe("The tag's gid to remove from the task.")
}