import { z } from "zod"

export const inputParamsSchema = {
  "customId": z.string(),
  "companyId": z.string(),
  "name": z.string().optional(),
  "active": z.boolean().optional(),
  "values": z.array(z.object({ "customId": z.string(), "name": z.string() })).optional()
}