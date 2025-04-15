import { z } from "zod"

export const inputParamsSchema = {
  "executionId": z.string().describe("Execution id"),
  "id": z.string().describe("Configuration id")
}