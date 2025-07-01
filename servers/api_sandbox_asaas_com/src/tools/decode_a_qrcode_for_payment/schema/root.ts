import { z } from "zod"

export const inputParamsSchema = {
  "payload": z.string().describe("QRCode payload"),
  "changeValue": z.number().describe("Change amount (for QRCode Change)").optional()
}