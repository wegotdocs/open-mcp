import { z } from "zod"

export const inputParamsSchema = {
  "collection_id": z.string().optional()
}