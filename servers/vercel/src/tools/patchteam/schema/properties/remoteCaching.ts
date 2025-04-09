import { z } from "zod"

export const inputParams = {
  "enabled": z.boolean().describe("Enable or disable remote caching for the team.").optional()
}