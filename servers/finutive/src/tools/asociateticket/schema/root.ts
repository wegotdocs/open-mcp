import { z } from "zod"

export const inputParamsSchema = {
  "invoice_id": z.string().optional(),
  "client_provider_id": z.string().optional(),
  "client_provider_name": z.string().optional(),
  "type": z.string().optional(),
  "client_provider_cif": z.string().optional()
}