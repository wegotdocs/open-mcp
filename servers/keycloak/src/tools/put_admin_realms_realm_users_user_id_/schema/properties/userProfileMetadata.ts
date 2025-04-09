import { z } from "zod"

export const inputParams = {
  "attributes": z.array(z.object({ "name": z.string().optional(), "displayName": z.string().optional(), "required": z.boolean().optional(), "readOnly": z.boolean().optional(), "annotations": z.record(z.any()).optional(), "validators": z.record(z.record(z.any())).optional(), "group": z.string().optional(), "multivalued": z.boolean().optional() })).optional(),
  "groups": z.array(z.object({ "name": z.string().optional(), "displayHeader": z.string().optional(), "displayDescription": z.string().optional(), "annotations": z.record(z.any()).optional() })).optional()
}