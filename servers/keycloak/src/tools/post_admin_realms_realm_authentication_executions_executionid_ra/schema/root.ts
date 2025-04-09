import { z } from "zod"

export const inputParams = {
  "executionId": z.string().describe("Execution id")
}