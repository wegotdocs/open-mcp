import { z } from "zod"

export const inputParamsSchema = {
  "alertFeederName": z.string(),
  "description": z.string().max(1048576),
  "method": z.enum(["GET","POST"]),
  "url": z.string(),
  "interval": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `interval` to the tool, first call the tool `expandSchema` with \"/properties/interval\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>1 minute is the minimal interval allowed</property-description>"),
  "body": z.string().describe("The body that may be necessary to the alert provider").optional(),
  "headers": z.array(z.object({ "key": z.string().regex(new RegExp("^[ -~]+$")).min(1), "value": z.string().min(1).max(512) })).optional(),
  "enabled": z.boolean().optional(),
  "auth": z.object({ "username": z.string().min(1).max(128), "password": z.string().min(1).max(512), "type": z.literal("basic") }).describe("Optional, the type of authentication: basic, bearer or key. Leaving it empty means no authentication").optional(),
  "proxyConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `proxyConfig` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "requestTimeout": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `requestTimeout` to the tool, first call the tool `expandSchema` with \"/properties/requestTimeout\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>The maximum amount of time the request is allowed to take</property-description>").optional(),
  "responseMaxSize": z.number().int().gt(0).describe("The maximum tolerated response payload max size in bytes").optional()
}