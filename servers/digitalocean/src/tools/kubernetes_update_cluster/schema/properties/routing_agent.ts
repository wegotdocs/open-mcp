import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional()
}