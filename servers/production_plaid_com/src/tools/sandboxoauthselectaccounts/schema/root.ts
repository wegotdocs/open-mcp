import { z } from "zod"

export const inputParamsSchema = {
  "oauth_state_id": z.string(),
  "accounts": z.array(z.string())
}