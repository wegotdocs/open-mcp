import { z } from "zod"

export const inputParamsSchema = {
  "tenant": z.string().describe("The ID of the tenant."),
  "callback": z.null().optional(),
  "expires": z.union([z.null(), z.number().int()]).optional(),
  "pdId": z.union([z.null(), z.string()]).optional(),
  "pdRaw": z.union([z.null(), z.record(z.record(z.any()))]).optional(),
  "syncResponse": z.union([z.null(), z.boolean()]).optional(),
  "toComplete": z.union([z.null(), z.boolean()]).optional()
}