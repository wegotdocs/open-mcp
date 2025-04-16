import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string(),
  "b_id": z.number().int().optional(),
  "enableUsenet": z.boolean().optional(),
  "enableTorrent": z.boolean().optional(),
  "preferredProtocol": z.enum(["unknown","usenet","torrent"]).optional(),
  "usenetDelay": z.number().int().optional(),
  "torrentDelay": z.number().int().optional(),
  "bypassIfHighestQuality": z.boolean().optional(),
  "bypassIfAboveCustomFormatScore": z.boolean().optional(),
  "minimumCustomFormatScore": z.number().int().optional(),
  "order": z.number().int().optional(),
  "tags": z.array(z.number().int()).nullable().optional()
}