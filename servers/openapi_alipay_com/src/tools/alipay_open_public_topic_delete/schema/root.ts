import { z } from "zod"

export const inputParams = {
  "topic_id": z.string().describe("营销位id").optional()
}