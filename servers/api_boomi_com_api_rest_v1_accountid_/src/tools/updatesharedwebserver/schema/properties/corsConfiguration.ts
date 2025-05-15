import { z } from "zod"

export const inputParamsSchema = {
  "origins": z.array(z.object({ "EnableHTTPRequestHandling": z.boolean(), "EnableHTTPSRequestHandling": z.boolean(), "allowCredentials": z.boolean(), "allowMethods": z.array(z.string()).optional(), "allowRequestHeaders": z.array(z.string()).optional(), "allowResponseHeaders": z.array(z.string()).optional(), "cacheTimeout": z.number().int().optional(), "domain": z.string(), "ports": z.array(z.number().int()).optional() })).optional()
}