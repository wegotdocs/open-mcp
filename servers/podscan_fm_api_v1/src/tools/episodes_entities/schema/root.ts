import { z } from "zod"

export const inputParams = {
  "episodeId": z.string(),
  "role": z.string().optional()
}