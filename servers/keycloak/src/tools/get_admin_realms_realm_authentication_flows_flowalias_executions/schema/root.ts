import { z } from "zod"

export const inputParamsSchema = {
  "flowAlias": z.string().describe("Flow alias")
}