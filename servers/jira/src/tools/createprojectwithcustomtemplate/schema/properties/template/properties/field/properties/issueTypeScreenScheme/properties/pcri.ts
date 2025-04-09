import { z } from "zod"

export const inputParams = {
  "anID": z.boolean().optional(),
  "areference": z.boolean().optional(),
  "entityId": z.string().optional(),
  "entityType": z.string().optional(),
  "id": z.string().optional(),
  "type": z.enum(["id","ref"]).optional()
}