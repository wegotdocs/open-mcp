import { z } from "zod"

export const inputParamsSchema = {
  "Mapping": z.array(z.object({ "fromFunction": z.string().optional(), "fromXPath": z.string().optional(), "toFunction": z.string().optional(), "toXPath": z.string().optional() })).optional()
}