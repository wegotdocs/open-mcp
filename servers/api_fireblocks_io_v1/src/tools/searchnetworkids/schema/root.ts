import { z } from "zod"

export const inputParamsSchema = {
  "search": z.string().min(1).describe("Search string - displayName networkId. Optional").optional(),
  "excludeSelf": z.boolean().describe("Exclude your networkIds. Optional, default false").optional(),
  "onlySelf": z.boolean().describe("Include just your networkIds. Optional, default false").optional(),
  "excludeConnected": z.boolean().describe("Exclude connected networkIds. Optional, default false").optional(),
  "pageCursor": z.string().describe("ID of the record after which to fetch $limit records").optional(),
  "pageSize": z.number().gte(1).lte(50).describe("Number of records to fetch. By default, it is 50").optional()
}