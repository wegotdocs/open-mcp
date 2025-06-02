import { z } from "zod"

export const inputParamsSchema = {
  "signingDeviceKeyId": z.string().max(256).describe("The ID, name or label of the key specified on the customer's signing device."),
  "signedCertPem": z.string().describe("The signed certificate that includes the public key PEM of the signing key, signed by a validation key."),
  "agentUserId": z.string().min(36).max(36).describe("Id of user to which this key belongs"),
  "proofOfOwnership": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `proofOfOwnership` to the tool, first call the tool `expandSchema` with \"/properties/proofOfOwnership\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>An object containing proof of ownership for the signing key.</property-description>").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}