import { z } from "zod"

export const inputParams = {
  "include_usage": z.boolean().describe("Whether to include usage information in the stream.").optional()
}