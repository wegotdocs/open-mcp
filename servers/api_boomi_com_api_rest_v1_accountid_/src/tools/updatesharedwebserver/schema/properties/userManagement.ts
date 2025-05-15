import { z } from "zod"

export const inputParamsSchema = {
  "enableAPIMInternalRoles": z.boolean().optional(),
  "users": z.array(z.object({ "clientCertificate": z.string().optional(), "componentFilters": z.array(z.string()).optional(), "externalUsername": z.string().optional(), "ipFilters": z.array(z.string()).optional(), "roleAssociations": z.array(z.string()).optional(), "token": z.string().optional(), "username": z.string(), "usingComponentFilters": z.boolean().optional(), "usingIPFilters": z.boolean().optional() })).optional()
}