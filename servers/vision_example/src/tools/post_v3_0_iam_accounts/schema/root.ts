import { z } from "zod"

export const inputParamsSchema = {
  "email": z.string().max(256).describe("The email address of a user"),
  "role": z.string().max(256).describe("The role assigned to a user"),
  "authType": z.enum(["local","saml","samlGroup"]).describe("The type of the user account. Available values: `local`, `saml`, `samlGroup`\n"),
  "description": z.string().max(256).describe("A brief note or identifier for the user account.").optional()
}