import { z } from "zod"

export const inputParamsSchema = {
  "client-types": z.array(z.object({ "name": z.string().optional(), "provider": z.string().optional(), "parent": z.string().optional(), "config": z.record(z.object({ "applicable": z.boolean().optional(), "value": z.any().optional() })).optional() })).optional(),
  "global-client-types": z.array(z.object({ "name": z.string().optional(), "provider": z.string().optional(), "parent": z.string().optional(), "config": z.record(z.object({ "applicable": z.boolean().optional(), "value": z.any().optional() })).optional() })).optional()
}