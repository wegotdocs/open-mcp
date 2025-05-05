import { z } from "zod"

export const inputParamsSchema = {
  "configId": z.string(),
  "id": z.string().optional(),
  "name": z.string(),
  "mailbox": z.object({ "provider": z.object({ "name": z.enum(["imap","office365","google-workspace","MSGraph365"]) }), "credential": z.object({ "email": z.string().describe("The e-mail of the user account"), "basicAuth": z.object({ "password": z.string() }).describe("Basic authentication (e-mail, password)").optional(), "oAuth2": z.object({ "clientId": z.string(), "tenantId": z.string().optional(), "secret": z.string(), "authority": z.string().optional(), "scopes": z.array(z.string()).optional(), "redirectUri": z.string().optional(), "authorizationCode": z.string().optional() }).describe("The OAuth2.0 (clientId, secret)").optional() }), "inbox": z.string().describe("The folder where the emails are fetched"), "archive": z.string().describe("The folder where the email should be moved").optional(), "markAsRead": z.boolean(), "_kind": z.literal("api").describe("The type of the provider config (imap, api)").optional() }),
  "organisations": z.array(z.string()).describe("At least one organisation").optional(),
  "enabled": z.boolean().optional(),
  "createdAt": z.string().datetime({ offset: true }).optional(),
  "alertProperties": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `alertProperties` to the tool, first call the tool `expandSchema` with \"/properties/alertProperties\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional()
}