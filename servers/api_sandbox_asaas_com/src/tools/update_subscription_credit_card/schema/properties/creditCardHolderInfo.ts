import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of card holder"),
  "email": z.string().describe("Cardholder email"),
  "cpfCnpj": z.string().describe("CPF or CNPJ of the cardholder"),
  "postalCode": z.string().describe("Cardholder zip code"),
  "addressNumber": z.string().describe("Cardholder address number"),
  "addressComplement": z.string().describe("Supplementing the cardholder's address").optional(),
  "phone": z.string().describe("Phone with cardholder's area code"),
  "mobilePhone": z.string().describe("Cardholder's cell phone").optional()
}