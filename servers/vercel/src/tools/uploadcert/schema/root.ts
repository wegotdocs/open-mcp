import { z } from "zod"

export const inputParamsSchema = {
  "teamId": z.string().describe("The Team identifier to perform the request on behalf of.").optional(),
  "slug": z.string().describe("The Team slug to perform the request on behalf of.").optional(),
  "ca": z.string().describe("The certificate authority"),
  "key": z.string().describe("The certificate key"),
  "cert": z.string().describe("The certificate"),
  "skipValidation": z.boolean().describe("Skip validation of the certificate").optional()
}