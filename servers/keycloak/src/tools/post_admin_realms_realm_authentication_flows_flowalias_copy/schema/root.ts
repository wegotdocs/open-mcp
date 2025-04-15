import { z } from "zod"

export const inputParamsSchema = {
  "flowAlias": z.string().describe("name of the existing authentication flow")
}