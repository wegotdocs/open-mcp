import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Customer name").optional(),
  "cpfCnpj": z.string().describe("Customer CPF or CNPJ").optional(),
  "email": z.string().describe("Customer email").optional(),
  "phone": z.string().describe("Customer phone").optional(),
  "address": z.string().describe("Customer address").optional(),
  "addressNumber": z.number().int().describe("Address number").optional(),
  "complement": z.string().describe("Address complement (max. 255 characters)").optional(),
  "province": z.string().describe("Province of address").optional(),
  "postalCode": z.string().describe("Address zip code").optional(),
  "city": z.number().int().describe("City code").optional()
}