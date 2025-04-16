import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "includeMovie": z.boolean().optional(),
  "eventType": z.array(z.number().int()).optional(),
  "downloadId": z.string().optional(),
  "movieIds": z.array(z.number().int()).optional(),
  "languages": z.array(z.number().int()).optional(),
  "quality": z.array(z.number().int()).optional()
}