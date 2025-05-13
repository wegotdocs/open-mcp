import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string(),
  "name": z.string(),
  "title": z.string().optional(),
  "apiType": z.enum(["NOTIFY","CALLBACK"]),
  "url": z.string().optional(),
  "method": z.string().optional(),
  "encoding": z.string().optional(),
  "headers": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `headers` to the tool, first call the tool `expandSchema` with \"/properties/headers\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>仅在回传类请求中生效</property-description>").optional(),
  "format": z.string(),
  "auth": z.boolean(),
  "authUrl": z.string().optional(),
  "grantType": z.string().optional(),
  "username": z.string().optional(),
  "password": z.string().optional(),
  "secretId": z.string().optional(),
  "secretKey": z.string().optional(),
  "tokenName": z.string().optional(),
  "enabled": z.boolean().optional(),
  "syncCallback": z.boolean().optional()
}