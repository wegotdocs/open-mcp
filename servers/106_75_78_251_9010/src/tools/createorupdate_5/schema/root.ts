import { z } from "zod"

export const inputParamsSchema = {
  "createTime": z.number().int().optional(),
  "createUser": z.string().optional(),
  "updateUser": z.string().optional(),
  "updateTime": z.number().int().optional(),
  "id": z.number().int().optional(),
  "code": z.string(),
  "editable": z.boolean().optional(),
  "name": z.string(),
  "description": z.string().optional(),
  "items": z.array(z.object({ "value": z.string(), "showContent": z.string().optional(), "order": z.number().int().optional(), "defaultItem": z.boolean().optional(), "description": z.string().optional() })),
  "version": z.number().int().optional()
}