import { z } from "zod"

export const inputParamsSchema = {
  "documentId": z.string().uuid().optional(),
  "collectionId": z.string().uuid().optional(),
  "index": z.string().optional()
}