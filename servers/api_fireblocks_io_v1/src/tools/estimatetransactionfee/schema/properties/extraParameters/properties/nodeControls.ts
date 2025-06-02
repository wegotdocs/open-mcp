import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["MEV","NODE_ROUTER"]).describe("`NODE_ROUTER` - used for transaction routing to a custom node\n`MEV` - used for transaction routing to a MEV protection provider\n").optional(),
  "tag": z.string().describe("Should be used when type is `NODE_ROUTER` only").optional()
}