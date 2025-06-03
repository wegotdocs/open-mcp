import { z } from "zod"

export const inputParamsSchema = {
  "taxNumber": z.string().describe("Account owner tax number. Can be CPF or CNPJ (only numbers). Send only when the pixKey is not sent.").optional(),
  "name": z.string().describe("Account owner name. Send only this when the pixKey is not sent.").optional(),
  "paymentInstitutionId": z.string().uuid().describe("Primary identifier of the institution associated to the payment recipient. Send only when the pixKey is not sent.").optional(),
  "account": z.string().optional(),
  "pixKey": z.string().describe("Pix key associated with the payment recipient").optional()
}