import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "disabledFeatures": z.array(z.enum(["ALERTS","PATCHING","AVSCANS","TASKS"]).describe("List of features that will be disabled during maintenance")).describe("List of features that will be disabled during maintenance").optional(),
  "start": z.number().describe("Maintenance window start (optional, defaults to now)").optional(),
  "end": z.number().describe("Maintenance window end").optional()
}