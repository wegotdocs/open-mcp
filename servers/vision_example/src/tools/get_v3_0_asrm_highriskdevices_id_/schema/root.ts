import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().min(1).max(128).describe("The ID of the device on the Trend Vision One platform"),
  "riskyEventScore": z.number().int().gt(0).lte(100).describe("The minimum risk score of the risk events this API endpoint returns.\n\nDefault: `70`\n").optional()
}