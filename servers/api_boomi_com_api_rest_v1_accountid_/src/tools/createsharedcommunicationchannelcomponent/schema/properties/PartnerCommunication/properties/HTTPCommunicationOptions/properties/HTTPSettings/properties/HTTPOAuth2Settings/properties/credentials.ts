import { z } from "zod"

export const inputParamsSchema = {
  "accessToken": z.string().optional(),
  "accessTokenKey": z.string().optional(),
  "clientId": z.string().optional(),
  "clientSecret": z.string().optional(),
  "useRefreshToken": z.boolean().optional()
}