import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("the name of the workday type")
}