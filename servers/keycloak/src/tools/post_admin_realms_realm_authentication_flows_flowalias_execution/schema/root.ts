import { z } from "zod"

export const inputParamsSchema = {
  "flowAlias": z.string().describe("Alias of parent authentication flow")
}