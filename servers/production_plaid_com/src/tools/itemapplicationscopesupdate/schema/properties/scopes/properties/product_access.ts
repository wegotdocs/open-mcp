import { z } from "zod"

export const inputParamsSchema = {
  "statements": z.boolean().nullable().describe("Allow access to statements. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "identity": z.boolean().nullable().describe("Allow access to the Identity product (name, email, phone, address). Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "auth": z.boolean().nullable().describe("Allow access to account number details. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "transactions": z.boolean().nullable().describe("Allow access to transaction details. Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "accounts_details_transactions": z.boolean().nullable().describe("Allow access to \"accounts_details_transactions\". Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "accounts_routing_number": z.boolean().nullable().describe("Allow access to \"accounts_routing_number\". Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "accounts_statements": z.boolean().nullable().describe("Allow access to \"accounts_statements\". Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "accounts_tax_statements": z.boolean().nullable().describe("Allow access to \"accounts_tax_statements\". Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional(),
  "customers_profiles": z.boolean().nullable().describe("Allow access to \"customers_profiles\". Only used by certain partners. If relevant to the partner and unset, defaults to `true`.").optional()
}