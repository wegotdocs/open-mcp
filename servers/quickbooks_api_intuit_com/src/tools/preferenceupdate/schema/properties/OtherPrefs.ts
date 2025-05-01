import { z } from "zod"

export const inputParamsSchema = {
  "NameValue": z.array(z.object({ "Name": z.string().optional(), "Value": z.string().optional() })).optional()
}