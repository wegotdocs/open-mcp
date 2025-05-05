import { z } from "zod"

export const inputParamsSchema = {
  "timeout": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `timeout` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/timeout\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "followRedirects": z.boolean().optional(),
  "useProxyProperties": z.boolean().optional(),
  "userAgent": z.string().min(1).max(128).optional(),
  "compressionEnabled": z.boolean().optional(),
  "ssl": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `ssl` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "maxConnectionsPerHost": z.number().int().optional(),
  "maxConnectionsTotal": z.number().int().optional(),
  "maxConnectionLifetime": z.string().optional(),
  "idleConnectionInPoolTimeout": z.string().optional(),
  "connectionPoolCleanerPeriod": z.string().optional(),
  "maxNumberOfRedirects": z.number().int().optional(),
  "maxRequestRetry": z.number().int().optional(),
  "disableUrlEncoding": z.boolean().optional(),
  "keepAlive": z.boolean().optional(),
  "useLaxCookieEncoder": z.boolean().optional(),
  "useCookieStore": z.boolean().optional(),
  "proxy": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `proxy` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/proxy\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}