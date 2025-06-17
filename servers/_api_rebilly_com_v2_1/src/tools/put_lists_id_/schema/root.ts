import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "version": z.number().int().gte(1).describe("List version").readonly().optional(),
  "name": z.string().describe("List name"),
  "values": z.array(z.string()).describe("List values"),
  "createdTime": z.string().optional(),
  "updatedTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("Links related to resource").readonly().optional()
}