import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().optional(),
  "code": z.string(),
  "name": z.string(),
  "ownerCode": z.string().optional(),
  "skuFirstCategory": z.string().optional(),
  "enable": z.boolean().optional(),
  "version": z.number().int().optional(),
  "batchAttributeFieldConfigs": z.array(z.object({ "fieldCode": z.string(), "fieldName": z.string(), "enable": z.boolean().optional(), "required": z.boolean().optional(), "exactMatch": z.boolean().optional(), "keyAttribute": z.boolean().optional(), "index": z.number().int().optional() }))
}