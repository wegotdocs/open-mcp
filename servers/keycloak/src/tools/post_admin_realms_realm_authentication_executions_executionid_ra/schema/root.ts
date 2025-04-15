import { z } from "zod"

export const inputParamsSchema = {
  "executionId": z.string().describe("Execution id")
}