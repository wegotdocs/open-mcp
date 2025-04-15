import { z } from "zod"

export const inputParamsSchema = {
  "edgeConfigId": z.string().regex(new RegExp("^ecfg_")),
  "dryRun": z.string().optional(),
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "items": z.array(z.object({ "operation": z.enum(["create","update","upsert","delete"]).optional(), "key": z.string().regex(new RegExp("^[\\\\w-]+$")).max(256).optional(), "value": z.any().optional(), "description": z.string().max(512).optional() }).and(z.union([z.object({ "operation": z.literal("create").optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.enum(["update","upsert"]).optional() }), z.object({ "operation": z.literal("delete").optional() })]))),
  "definition": z.any()
}