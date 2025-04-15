import { z } from "zod"

export const inputParamsSchema = {
  "policies": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "enabled": z.boolean().optional(), "conditions": z.array(z.object({ "condition": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional(), "profiles": z.array(z.string()).optional() })).optional(),
  "globalPolicies": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "enabled": z.boolean().optional(), "conditions": z.array(z.object({ "condition": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional(), "profiles": z.array(z.string()).optional() })).optional()
}