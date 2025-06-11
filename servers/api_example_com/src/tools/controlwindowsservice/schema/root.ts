import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "serviceId": z.string().describe("Service identifier"),
  "action": z.enum(["START","PAUSE","STOP","RESTART"]).describe("Action").optional()
}