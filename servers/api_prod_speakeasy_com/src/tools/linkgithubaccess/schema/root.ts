import { z } from "zod"

export const inputParamsSchema = {
  "installation_id": z.string().optional(),
  "github_org": z.string().optional(),
  "github_oidc_token": z.string().optional()
}