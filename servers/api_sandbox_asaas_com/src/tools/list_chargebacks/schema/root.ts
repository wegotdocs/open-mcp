import { z } from "zod"

export const inputParamsSchema = {
  "offset": z.number().int().describe("List starting element").optional(),
  "limit": z.number().int().lte(100).describe("Number of list elements (max: 100)").optional(),
  "creditCardBrand": z.enum(["VISA","MASTERCARD","ELO","DINERS","DISCOVER","AMEX","HIPERCARD","CABAL","BANESCARD","CREDZ","SOROCRED","CREDSYSTEM","JCB","UNKNOWN"]).describe("Filter by used card brand.").optional(),
  "originDisputeDate[le]": z.string().describe("Filter up to the chargeback opening date.").optional(),
  "originDisputeDate[ge]": z.string().describe("Filter from a chargeback opening date.").optional(),
  "originTransactionDate[le]": z.string().describe("Filter up to the transaction date.").optional(),
  "originTransactionDate[ge]": z.string().describe("Filter from a transaction date.").optional(),
  "status": z.enum(["REQUESTED","IN_DISPUTE","DISPUTE_LOST","REVERSED","DONE"]).describe("Filter by chargeback status.").optional()
}