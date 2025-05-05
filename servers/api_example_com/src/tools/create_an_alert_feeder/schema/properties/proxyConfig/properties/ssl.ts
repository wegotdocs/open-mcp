import { z } from "zod"

export const inputParamsSchema = {
  "default": z.boolean().optional(),
  "protocol": z.string().optional(),
  "checkRevocation": z.boolean().optional(),
  "revocationLists": z.array(z.string().min(1).max(128)).optional(),
  "enabledCipherSuites": z.array(z.string().min(1).max(128)).optional(),
  "enabledProtocols": z.array(z.string()).optional(),
  "hostnameVerifierClass": z.string().min(1).max(128).optional(),
  "secureRandom": z.string().min(1).max(128).optional(),
  "trustManager": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `trustManager` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl/properties/trustManager\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "keyManager": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `keyManager` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl/properties/keyManager\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "sslParametersConfig": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `sslParametersConfig` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl/properties/sslParametersConfig\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "debug": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `debug` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl/properties/debug\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "loose": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `loose` to the tool, first call the tool `expandSchema` with \"/properties/proxyConfig/properties/ssl/properties/loose\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>")
}