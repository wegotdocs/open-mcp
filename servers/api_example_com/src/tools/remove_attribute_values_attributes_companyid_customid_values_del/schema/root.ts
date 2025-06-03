import { z } from "zod"

export const inputParamsSchema = {
  "customId": z.string(),
  "companyId": z.string(),
  "data": z.array(z.object({ "customId": z.string() }))
}