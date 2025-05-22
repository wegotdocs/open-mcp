import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The operator's user id."),
  "duty_status_reason": z.string().nullable().describe("[single-line only]\n\nA description of this status.").optional(),
  "on_duty": z.boolean().nullable().describe("True if this status message indicates an \"on-duty\" status.")
}