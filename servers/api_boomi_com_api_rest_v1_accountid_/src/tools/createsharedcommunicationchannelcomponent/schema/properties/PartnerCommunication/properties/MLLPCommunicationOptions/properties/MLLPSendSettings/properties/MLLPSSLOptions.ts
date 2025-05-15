import { z } from "zod"

export const inputParamsSchema = {
  "clientSSLAlias": z.string().optional(),
  "sslAlias": z.string().optional(),
  "useClientSSL": z.boolean().optional(),
  "useSSL": z.boolean().optional()
}