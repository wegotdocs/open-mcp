import { z } from "zod"

export const inputParamsSchema = {
  "accessToken": z.string().optional(),
  "accessTokenURL": z.string().optional(),
  "authorizationURL": z.string().optional(),
  "consumerKey": z.string().optional(),
  "consumerSecret": z.string().optional(),
  "realm": z.string().optional(),
  "requestTokenURL": z.string().optional(),
  "signatureMethod": z.enum(["SHA1","SHA256"]).optional(),
  "suppressBlankAccessToken": z.boolean().optional(),
  "tokenSecret": z.string().optional()
}