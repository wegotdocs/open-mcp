import { z } from "zod"

export const inputParamsSchema = {
  "call_center_id": z.number().int().nullable().describe("The ID of a call center that will be used to fulfill the callback.").optional(),
  "phone_number": z.string().nullable().describe("The e164-formatted number to call back").optional()
}