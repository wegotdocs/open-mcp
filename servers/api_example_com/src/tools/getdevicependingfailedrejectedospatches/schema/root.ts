import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "status": z.string().describe("Patch Status filter").optional(),
  "type": z.string().describe("Patch Type filter").optional(),
  "severity": z.string().describe("Patch Severity filter").optional()
}