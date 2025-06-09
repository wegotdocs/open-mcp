import { z } from "zod"

export const inputParamsSchema = {
  "language": z.string(),
  "document_name": z.string().optional()
}