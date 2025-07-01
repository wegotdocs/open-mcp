import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "name": z.string().describe("Filter by name").optional(),
  "email": z.string().describe("Filter by email").optional(),
  "cpfCnpj": z.string().describe("Filter by CPF or CNPJ").optional(),
  "groupName": z.string().describe("Filter by group").optional(),
  "externalReference": z.string().describe("Filter by your system identifier").optional()
}