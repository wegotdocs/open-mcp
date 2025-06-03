import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().uuid().describe("Payment recipient primary identifier"),
  "taxNumber": z.string().describe("Account owner tax number. Can be CPF or CNPJ (only numbers). Send only if the recipient doesn't have a pixKey.").optional(),
  "name": z.string().describe("Account owner name. Send only if the recipient doesn't have a pixKey.").optional(),
  "paymentInstitutionId": z.string().uuid().describe("Primary identifier of the institution associated to the payment recipient. Send only if the recipient doesn't have a pixKey.").optional(),
  "account": z.string().optional(),
  "pixKey": z.string().describe("Pix key associated with the payment recipient").optional()
}