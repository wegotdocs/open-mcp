import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "customId": z.string(), "attributes": z.array(z.object({ "customId": z.string(), "value": z.string(), "valueCustomId": z.string().optional() })) }))
}