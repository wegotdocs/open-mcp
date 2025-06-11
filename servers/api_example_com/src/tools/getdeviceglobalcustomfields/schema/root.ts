import { z } from "zod"

export const inputParamsSchema = {
  "scopes": z.literal("all,node,location,organization").describe("Comma-separated list of scopes").optional()
}