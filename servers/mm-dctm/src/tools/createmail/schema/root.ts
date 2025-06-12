import { z } from "zod"

export const inputParamsSchema = {
  "otagtoken": z.string().describe("Secure 'otagtoken' token obtained from Appworks Platform SDK. Get otagtoken via POST request to Appworks gateway URL http://<Gateway_URL>:8080/v3/admin/auth"),
  "async": z.boolean().describe("Whether send as async mail.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}