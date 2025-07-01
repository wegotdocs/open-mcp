import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "cpfCnpj": z.string().describe("Filter by the subaccount's CPF or CNPJ").optional(),
  "email": z.string().describe("Filter by subaccount email").optional(),
  "name": z.string().describe("Filter by subaccount name").optional(),
  "walletId": z.string().describe("Filter by subaccount walletId").optional()
}