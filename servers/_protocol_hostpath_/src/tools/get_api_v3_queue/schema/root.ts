import { z } from "zod"

export const inputParamsSchema = {
  "page": z.number().int().optional(),
  "pageSize": z.number().int().optional(),
  "sortKey": z.string().optional(),
  "sortDirection": z.enum(["default","ascending","descending"]).optional(),
  "includeUnknownMovieItems": z.boolean().optional(),
  "includeMovie": z.boolean().optional(),
  "movieIds": z.array(z.number().int()).optional(),
  "protocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "languages": z.array(z.number().int()).optional(),
  "quality": z.array(z.number().int()).optional(),
  "status": z.array(z.enum(["unknown","queued","paused","downloading","completed","failed","warning","delay","downloadClientUnavailable","fallback"])).optional()
}