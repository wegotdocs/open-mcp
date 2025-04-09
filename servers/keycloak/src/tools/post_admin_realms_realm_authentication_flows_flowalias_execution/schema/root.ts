import { z } from "zod"

export const inputParams = {
  "flowAlias": z.string().describe("Alias of parent authentication flow")
}