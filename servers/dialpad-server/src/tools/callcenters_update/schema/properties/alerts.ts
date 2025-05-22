import { z } from "zod"

export const inputParamsSchema = {
  "cc_service_level": z.number().int().nullable().describe("Alert supervisors when the service level drops below how many percent. Default is 95%.").optional(),
  "cc_service_level_seconds": z.number().int().nullable().describe("Inbound calls should be answered within how many seconds. Default is 60.").optional()
}