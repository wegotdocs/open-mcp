import { z } from "zod"

export const inputParamsSchema = {
  "org_id": z.number().int().describe("組織 ID。"),
  "session_id": z.string().optional()
}