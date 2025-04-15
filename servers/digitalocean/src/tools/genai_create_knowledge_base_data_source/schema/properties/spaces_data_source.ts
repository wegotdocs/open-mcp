import { z } from "zod"

export const inputParamsSchema = {
  "bucket_name": z.string().describe("Spaces bucket name").optional(),
  "item_path": z.string().optional(),
  "region": z.string().describe("Region of bucket").optional()
}