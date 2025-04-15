import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "alias": z.string().optional(),
  "description": z.string().optional(),
  "providerId": z.string().optional(),
  "topLevel": z.boolean().optional(),
  "builtIn": z.boolean().optional(),
  "authenticationExecutions": z.array(z.object({ "authenticatorConfig": z.string().optional(), "authenticator": z.string().optional(), "authenticatorFlow": z.boolean().optional(), "requirement": z.string().optional(), "priority": z.number().int().optional(), "flowAlias": z.string().optional(), "userSetupAllowed": z.boolean().optional() })).optional()
}