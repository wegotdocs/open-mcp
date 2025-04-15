import { z } from "zod"

export const inputParamsSchema = {
  "attributes": z.array(z.object({ "name": z.string().optional(), "displayName": z.string().optional(), "validations": z.record(z.record(z.any())).optional(), "annotations": z.record(z.any()).optional(), "required": z.object({ "roles": z.array(z.string()).optional(), "scopes": z.array(z.string()).optional() }).optional(), "permissions": z.object({ "view": z.array(z.string()).optional(), "edit": z.array(z.string()).optional() }).optional(), "selector": z.object({ "scopes": z.array(z.string()).optional() }).optional(), "group": z.string().optional(), "multivalued": z.boolean().optional() })).optional(),
  "groups": z.array(z.object({ "name": z.string().optional(), "displayHeader": z.string().optional(), "displayDescription": z.string().optional(), "annotations": z.record(z.any()).optional() })).optional(),
  "unmanagedAttributePolicy": z.enum(["ENABLED","ADMIN_VIEW","ADMIN_EDIT"]).optional()
}