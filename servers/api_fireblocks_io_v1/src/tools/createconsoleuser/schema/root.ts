import { z } from "zod"

export const inputParamsSchema = {
  "firstName": z.string().describe("User's first name"),
  "lastName": z.string().describe("User' last name"),
  "role": z.enum(["OWNER","ADMIN","SIGNER","COLLATERALS_SIGNER","EDITOR","APPROVER","VIEWER","NON_SIGNING_ADMIN","AUDITOR","NCW_ADMIN","NCW_SIGNER"]).describe("The role of the user"),
  "email": z.string().describe("User's valid email address"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}