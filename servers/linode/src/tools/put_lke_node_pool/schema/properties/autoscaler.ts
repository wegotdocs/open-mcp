import { z } from "zod"

export const inputParams = {
  "enabled": z.boolean().describe("Whether automatic scaling is enabled for this node pool. Defaults to `false`.").optional(),
  "max": z.number().int().gte(1).lte(100).describe("The maximum number of nodes to automatically scale to. Defaults to the value provided by the `count` field.").optional(),
  "min": z.number().int().gte(1).lte(100).describe("The minimum number of nodes to automatically scale to. Defaults to the node pool's `count`.").optional()
}