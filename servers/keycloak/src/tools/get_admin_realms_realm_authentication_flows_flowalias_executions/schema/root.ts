import { z } from "zod"

export const inputParams = {
  "flowAlias": z.string().describe("Flow alias")
}