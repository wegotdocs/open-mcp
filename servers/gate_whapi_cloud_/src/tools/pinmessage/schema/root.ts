import { z } from "zod"

export const inputParamsSchema = {
  "MessageID": z.string().regex(new RegExp("^[A-Za-z0-9._]{4,23}-[A-Za-z0-9._]{4,14}(-[A-Za-z0-9._]{4,10})?(-[A-Za-z0-9._]{4,10})?$")).describe("Message ID"),
  "time": z.enum(["day","week","month"]).describe("Pin message for this amount of days").optional()
}