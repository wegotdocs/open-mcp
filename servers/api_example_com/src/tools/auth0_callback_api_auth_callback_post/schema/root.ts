import { z } from "zod"

export const inputParamsSchema = {
  "code": z.string().describe("Authorization code from Auth0"),
  "redirect_uri": z.string().describe("Redirect URI used in the Auth0 request")
}