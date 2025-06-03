import { z } from "zod"

export const inputParamsSchema = {
  "type": z.string().describe("Channel type to interact with"),
  "id": z.string().describe("Channel ID to interact with"),
  "hard_delete": z.boolean().optional()
}