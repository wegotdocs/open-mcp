import { z } from "zod"

export const inputParamsSchema = {
  "mimePassthrough": z.boolean().optional(),
  "objectName": z.string().optional(),
  "operationType": z.string().optional(),
  "password": z.string().optional(),
  "useDefaultListenOptions": z.boolean().optional(),
  "username": z.string().optional()
}