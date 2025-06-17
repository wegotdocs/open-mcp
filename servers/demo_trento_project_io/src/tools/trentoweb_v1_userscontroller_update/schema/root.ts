import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int(),
  "abilities": z.array(z.object({ "id": z.number().int().describe("Ability ID"), "label": z.string().describe("Description of the ability").optional(), "name": z.string().describe("Ability name"), "resource": z.string().describe("Resource attached to ability") }).strict().describe("Ability entry")).describe("A collection of abilities in the system").optional(),
  "email": z.string().email().describe("User email").optional(),
  "enabled": z.boolean().describe("User enabled in the system").optional(),
  "fullname": z.string().describe("User full name").optional(),
  "password": z.string().describe("User new password").optional(),
  "password_confirmation": z.string().describe("User new password, should be the same as password field").optional(),
  "totp_disabled": z.boolean().describe("TOTP feature disabled for the user. The only accepted value here is 'true'").optional(),
  "if-match": z.number().int().optional()
}