import { z } from "zod"

export const inputParamsSchema = {
  "IP": z.string().describe("The source IP address of the request.").optional(),
  "app": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `app` to the tool, first call the tool `expandSchema` with \"/properties/principal/properties/app\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describes the principal information of an application.</property-description>").optional(),
  "authType": z.enum(["Certificate","UserToken","AppToken","Hostname","Token","ComponentToken","External"]).describe("The type of authentication.").optional(),
  "claims": z.array(z.string()).describe("List of claims extracted from the user query.").optional(),
  "team": z.string().describe("The team that was used to authorize the request.").optional(),
  "tokenName": z.string().describe("The name of the token, if any.").optional(),
  "type": z.enum(["User","App","External"]).describe("The type of principal."),
  "user": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `user` to the tool, first call the tool `expandSchema` with \"/properties/principal/properties/user\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Describes the principal information of a user.</property-description>").optional()
}