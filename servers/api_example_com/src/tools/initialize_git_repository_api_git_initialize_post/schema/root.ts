import { z } from "zod"

export const inputParamsSchema = {
  "force": z.boolean().describe("Force re-initialization even if repository exists").optional()
}