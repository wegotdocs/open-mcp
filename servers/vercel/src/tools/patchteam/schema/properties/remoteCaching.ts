import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Enable or disable remote caching for the team.").optional()
}