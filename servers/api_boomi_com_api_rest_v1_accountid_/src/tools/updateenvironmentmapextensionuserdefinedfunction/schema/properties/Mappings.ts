import { z } from "zod"

export const inputParamsSchema = {
  "Mapping": z.array(z.object({ "fromFunction": z.string().optional(), "fromKey": z.number().int().optional(), "toFunction": z.string().optional(), "toKey": z.number().int().optional() })).optional()
}