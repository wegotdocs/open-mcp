import { z } from "zod"

export const inputParamsSchema = {
  "namespaceId": z.string().optional(),
  "universalId": z.string().optional(),
  "universalIdType": z.string().optional()
}