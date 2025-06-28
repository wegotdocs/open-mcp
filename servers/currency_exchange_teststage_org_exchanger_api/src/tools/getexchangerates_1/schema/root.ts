import { z } from "zod"

export const inputParamsSchema = {
  "currency": z.string().describe("Currency code to be exchanged"),
  "sum": z.number().describe("Amount to be exchanged"),
  "provider": z.enum(["BINANCE","KRAKEN","BITFINEX","COINBASE"]).describe("Specifies the coin provider. If not provided, exchange rates for all providers will be returned.").optional(),
  "pageable": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `pageable` to the tool, first call the tool `expandSchema` with \"/properties/pageable\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Pagination parameters</property-description>")
}