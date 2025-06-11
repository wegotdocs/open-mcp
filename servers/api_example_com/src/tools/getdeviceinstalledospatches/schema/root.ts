import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "status": z.string().describe("Patch Status filter (FAILED, INSTALLED)").optional(),
  "installedBefore": z.string().describe("Include patches installed before specified date").optional(),
  "installedAfter": z.string().describe("Include patches installed after specified date").optional()
}