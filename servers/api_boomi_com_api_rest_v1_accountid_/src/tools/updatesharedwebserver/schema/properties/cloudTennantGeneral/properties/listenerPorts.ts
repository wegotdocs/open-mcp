import { z } from "zod"

export const inputParamsSchema = {
  "port": z.array(z.object({ "authType": z.string(), "baseUrlForRequest": z.string(), "defaultPort": z.boolean().optional(), "enablePort": z.boolean().optional(), "externalPort": z.number().int().optional(), "externalSSL": z.boolean().optional(), "port": z.number().int().optional(), "ssl": z.boolean().optional() })).optional()
}