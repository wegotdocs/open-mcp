import { z } from "zod"

export const inputParamsSchema = {
  "field": z.enum(["TRANSACTION_ID","NAME"]).describe("Transaction field for which the rule is defined."),
  "type": z.enum(["EXACT_MATCH","SUBSTRING_MATCH"]).describe("Transaction rule's match type. For TRANSACTION_ID field, EXACT_MATCH is available.\nMatches are case sensitive.\n"),
  "query": z.string().describe("For TRANSACTION_ID field, provide transaction_id. For NAME field, provide a string pattern.\n")
}