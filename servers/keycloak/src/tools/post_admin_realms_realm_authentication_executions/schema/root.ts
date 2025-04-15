import { z } from "zod"

export const inputParamsSchema = {
  "authenticatorConfig": z.string().optional(),
  "authenticator": z.string().optional(),
  "authenticatorFlow": z.boolean().optional(),
  "requirement": z.string().optional(),
  "priority": z.number().int().optional(),
  "id": z.string().optional(),
  "flowId": z.string().optional(),
  "parentFlow": z.string().optional()
}