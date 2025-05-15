import { z } from "zod"

export const inputParamsSchema = {
  "clientauth": z.boolean().optional(),
  "clientsslalias": z.string().optional(),
  "trustServerCert": z.boolean().optional(),
  "trustedcertalias": z.string().optional()
}