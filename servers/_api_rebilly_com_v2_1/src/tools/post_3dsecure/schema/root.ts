import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().optional(),
  "customerId": z.string(),
  "gatewayAccountId": z.string(),
  "paymentCardId": z.string(),
  "websiteId": z.string(),
  "enrolled": z.enum(["Y","N","U"]).describe("Is the cardholder enrolled in 3DSecure"),
  "enrollmentEci": z.string().describe("The 3D Secure entry enrollment eci"),
  "eci": z.number().int().describe("The 3D Secure entry electronic commerce indicator").optional(),
  "cavv": z.string().describe("The 3D Secure entry cardholder authentication verification value").optional(),
  "xid": z.string().describe("The 3D Secure entry transaction Id").optional(),
  "payerAuthResponseStatus": z.enum(["Y","N","U","A"]).describe("The 3D Secure entry Auth Response Status").optional(),
  "signatureVerification": z.enum(["Y","N"]).describe("If signature was verified").optional(),
  "amount": z.number().describe("Transaction amount"),
  "currency": z.string().describe("The currency three letter code"),
  "createdTime": z.string().optional(),
  "_links": z.array(z.string()).min(1).max(1).describe("The links related to resource").readonly().optional()
}