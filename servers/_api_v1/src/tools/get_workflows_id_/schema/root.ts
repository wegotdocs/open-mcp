import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the workflow."),
  "excludePinnedData": z.boolean().describe("Set this to avoid retrieving pinned data").optional()
}