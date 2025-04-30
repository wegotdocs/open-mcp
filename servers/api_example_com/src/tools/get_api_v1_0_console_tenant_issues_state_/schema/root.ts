import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("tenant"),
  "state": z.string().describe("state")
}