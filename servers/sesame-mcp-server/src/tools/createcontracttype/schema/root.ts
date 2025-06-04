import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Contract type name")
}