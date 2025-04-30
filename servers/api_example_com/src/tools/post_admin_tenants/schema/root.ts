import { z } from "zod"

export const inputParamsSchema = {
  "did": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `did` to the tool, first call the tool `expandSchema` with \"/properties/did\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "display": z.array(z.object({ "customParameters": z.record(z.union([z.array(z.record(z.any())), z.record(z.record(z.any())), z.union([z.object({ "content": z.string(), "isString": z.boolean() }), z.object({ "content": z.string(), "isString": z.boolean() })])])), "backgroundColor": z.union([z.null(), z.string()]).optional(), "description": z.union([z.null(), z.string()]).optional(), "locale": z.union([z.null(), z.string()]).optional(), "logo": z.null().optional(), "name": z.string(), "textColor": z.union([z.null(), z.string()]).optional() })),
  "tenant": z.string()
}