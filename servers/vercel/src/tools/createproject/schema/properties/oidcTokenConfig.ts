import { z } from "zod"

export const inputParamsSchema = {
  "enabled": z.boolean().describe("Whether or not to generate OpenID Connect JSON Web Tokens.").optional(),
  "issuerMode": z.enum(["team","global"]).describe("team: `https://oidc.vercel.com/[team_slug]` global: `https://oidc.vercel.com`").optional()
}