import { z } from "zod"

export const inputParamsSchema = {
  "clientId": z.string().describe("filter by clientId").optional(),
  "first": z.number().int().describe("the first result").optional(),
  "max": z.number().int().describe("the max results to return").optional(),
  "q": z.string().optional(),
  "search": z.boolean().describe("whether this is a search query or a getClientById query").optional(),
  "viewableOnly": z.boolean().describe("filter clients that cannot be viewed in full by admin").optional()
}