import { z } from "zod"

export const inputParams = {
  "enabled": z.boolean().describe("Indicates whether the routing-agent component is enabled.").optional()
}