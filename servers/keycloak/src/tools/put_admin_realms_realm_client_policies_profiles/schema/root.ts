import { z } from "zod"

export const inputParams = {
  "profiles": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "executors": z.array(z.object({ "executor": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional() })).optional(),
  "globalProfiles": z.array(z.object({ "name": z.string().optional(), "description": z.string().optional(), "executors": z.array(z.object({ "executor": z.string().optional(), "configuration": z.array(z.any()).optional() })).optional() })).optional()
}