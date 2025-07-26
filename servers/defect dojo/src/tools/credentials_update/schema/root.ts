import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this cred_ user."),
  "name": z.string().min(1).max(200),
  "username": z.string().min(1).max(200),
  "role": z.string().min(1).max(200),
  "authentication": z.enum(["Form","SSO"]).describe("* `Form` - Form Authentication\n* `SSO` - SSO Redirect").optional(),
  "http_authentication": z.union([z.literal("Basic"), z.literal("NTLM"), z.literal(""), z.literal(null)]).nullable().describe("* `Basic` - Basic\n* `NTLM` - NTLM").optional(),
  "description": z.string().max(2000).nullable().optional(),
  "url": z.string().url().min(1).max(2000),
  "login_regex": z.string().max(200).nullable().optional(),
  "logout_regex": z.string().max(200).nullable().optional(),
  "is_valid": z.boolean().optional(),
  "environment": z.number().int()
}