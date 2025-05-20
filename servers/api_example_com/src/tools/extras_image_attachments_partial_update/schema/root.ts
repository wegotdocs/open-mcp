import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this image attachment."),
  "object_type": z.string().optional(),
  "object_id": z.number().int().gte(0).lte(9223372036854776000).optional(),
  "name": z.string().max(50).optional(),
  "image": z.string().base64().optional()
}