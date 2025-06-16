import { z } from "zod"

export const inputParamsSchema = {
  "genLockId": z.string().describe("Unique identifier of the generation target.").optional(),
  "targetType": z.string().describe("The type of the generated target.").optional(),
  "passive": z.boolean().describe("Skip side-effects like incrementing metrics.").optional()
}