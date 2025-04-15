import { z } from "zod"

export const inputParamsSchema = {
  "contract_id": z.string().uuid(),
  "title": z.string().optional(),
  "description": z.string().optional(),
  "image_uri": z.string().optional(),
  "ignore_nulls": z.boolean().optional()
}