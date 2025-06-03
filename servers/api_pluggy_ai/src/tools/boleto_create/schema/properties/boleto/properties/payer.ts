import { z } from "zod"

export const inputParamsSchema = {
  "taxNumber": z.string().describe("Payer tax number (CPF/CNPJ)"),
  "name": z.string().describe("Payer name"),
  "addressStreet": z.string().describe("Payer street address").optional(),
  "addressCity": z.string().describe("Payer city").optional(),
  "addressState": z.string().describe("Payer state"),
  "addressZipCode": z.string().describe("Payer ZIP code")
}