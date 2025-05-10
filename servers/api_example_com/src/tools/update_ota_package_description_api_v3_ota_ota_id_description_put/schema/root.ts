import { z } from "zod"

export const inputParamsSchema = {
  "ota_id": z.number().int().describe("OTA 包 ID。"),
  "session_id": z.string().optional()
}