import { z } from "zod"

export const inputParamsSchema = {
  "personType": z.enum(["JURIDICA","FISICA"]).describe("Person Type").optional(),
  "cpfCnpj": z.string().describe("CPF or CNPJ of the account owner").optional(),
  "birthDate": z.string().date().describe("Birthday (Required if the information is from an individual)").optional(),
  "companyType": z.enum(["MEI","LIMITED","INDIVIDUAL","ASSOCIATION"]).describe("Type of company (only when Legal Entity)").optional(),
  "companyName": z.string().describe("Company Name").optional(),
  "incomeValue": z.number().describe("Billing/Monthly income").optional(),
  "email": z.string().describe("Account's email").optional(),
  "phone": z.string().describe("Telephone").optional(),
  "mobilePhone": z.string().describe("Cell phone").optional(),
  "site": z.string().describe("Web site").optional(),
  "postalCode": z.string().describe("Address zip code").optional(),
  "address": z.string().describe("Public place").optional(),
  "addressNumber": z.string().describe("Address number").optional(),
  "complement": z.string().describe("Address complement").optional(),
  "province": z.string().describe("Neighborhood").optional()
}