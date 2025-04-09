import { z } from "zod"

export const inputParams = {
  "id": z.string().optional(),
  "type": z.string().optional(),
  "userLabel": z.string().optional(),
  "createdDate": z.number().int().optional(),
  "secretData": z.string().optional(),
  "credentialData": z.string().optional(),
  "priority": z.number().int().optional(),
  "value": z.string().optional(),
  "temporary": z.boolean().optional()
}