import { z } from "zod"

export const inputParamsSchema = {
  "role": z.string().describe("Users role"),
  "name": z.string().describe("Users name"),
  "csrPem": z.string().describe("CSR file that is used to verify API requests. read more https://developers.fireblocks.com/docs/quickstart"),
  "coSignerSetupType": z.string().describe("Different environments allow for different setup options, field is required for management/signer role").optional(),
  "coSignerSetupIsFirstUser": z.boolean().describe("pass as true if this is the first user on the coSigner machine").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}