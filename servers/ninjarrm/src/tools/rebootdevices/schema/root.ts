import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "mode": z.enum(["NORMAL","FORCED"]).describe("Reboot mode"),
  "reason": z.string().describe("Stated reboot reason").optional()
}