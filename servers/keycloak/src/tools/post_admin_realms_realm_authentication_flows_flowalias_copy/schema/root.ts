import { z } from "zod"

export const inputParams = {
  "flowAlias": z.string().describe("name of the existing authentication flow")
}