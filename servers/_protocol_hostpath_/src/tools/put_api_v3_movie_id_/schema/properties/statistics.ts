import { z } from "zod"

export const inputParamsSchema = {
  "movieFileCount": z.number().int().optional(),
  "sizeOnDisk": z.number().int().optional(),
  "releaseGroups": z.array(z.string()).nullable().optional()
}