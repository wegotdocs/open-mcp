import { z } from "zod"

export const inputParamsSchema = {
  "alias": z.string().describe("Alias of required action")
}