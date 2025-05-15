import { z } from "zod"

export const inputParamsSchema = {
  "apiType": z.string(),
  "authentication": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `authentication` to the tool, first call the tool `expandSchema` with \"/properties/generalSettings/properties/authentication\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "baseUrl": z.string(),
  "examineForwardHeaders": z.boolean().optional(),
  "externalHost": z.string(),
  "internalHost": z.string(),
  "listenerPorts": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `listenerPorts` to the tool, first call the tool `expandSchema` with \"/properties/generalSettings/properties/listenerPorts\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "maxNumberOfThreads": z.number().int().optional(),
  "overrideUrl": z.boolean().optional(),
  "protectedHeaders": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `protectedHeaders` to the tool, first call the tool `expandSchema` with \"/properties/generalSettings/properties/protectedHeaders\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "sslCertificate": z.string()
}