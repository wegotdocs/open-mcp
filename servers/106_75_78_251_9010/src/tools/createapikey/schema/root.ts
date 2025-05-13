import { z } from "zod"

export const inputParamsSchema = {
  "createTime": z.number().int().optional(),
  "createUser": z.string().optional(),
  "updateUser": z.string().optional(),
  "updateTime": z.number().int().optional(),
  "id": z.number().int().optional(),
  "apiKeyName": z.string().optional(),
  "apiKey": z.string().optional()
}