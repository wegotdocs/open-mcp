import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().describe("The ID of the execution."),
  "includeData": z.boolean().describe("Whether or not to include the execution's detailed data.").optional()
}