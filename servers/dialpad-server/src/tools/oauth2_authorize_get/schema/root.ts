import { z } from "zod"

export const inputParamsSchema = {
  "code_challenge_method": z.enum(["S256","plain"]).describe("PKCE challenge method (hashing algorithm).").optional(),
  "code_challenge": z.string().describe("PKCE challenge value (hash commitment).").optional(),
  "scope": z.string().describe("Space-separated list of additional scopes that should be granted to the vended token.").optional(),
  "response_type": z.literal("code").describe("The OAuth flow to perform. Must be 'code' (authorization code flow).").optional(),
  "redirect_uri": z.string().describe("The URI the user should be redirected back to after granting consent to the app."),
  "client_id": z.string().describe("The client_id of the OAuth app."),
  "state": z.string().describe("Unpredictable token to prevent CSRF.").optional()
}