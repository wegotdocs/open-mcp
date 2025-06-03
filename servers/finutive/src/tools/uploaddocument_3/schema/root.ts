import { z } from "zod"

export const inputParamsSchema = {
  "businessId": z.string(),
  "type": z.enum(["CLIENT","PROVIDER"]),
  "force": z.boolean(),
  "client_id": z.string().optional(),
  "client_cif": z.string().optional()
}