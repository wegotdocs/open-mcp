import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["VAULT_ACCOUNT","EXCHANGE_ACCOUNT","INTERNAL_WALLET","EXTERNAL_WALLET","CONTRACT","NETWORK_CONNECTION","FIAT_ACCOUNT","COMPOUND","GAS_STATION","ONE_TIME_ADDRESS","UNKNOWN","END_USER_WALLET","PROGRAM_CALL","MULTI_DESTINATION"]),
  "subType": z.enum(["BINANCE","BINANCEUS","BITFINEX","BITHUMB","BITMEX","BITSO","BITSTAMP","BITTREX","BLINC","BYBIT","CIRCLE","COINBASEEXCHANGE","COINBASEPRO","COINMETRO","COINSPRO","CRYPTOCOM","DERIBIT","GEMINI","HITBTC","HUOBI","INDEPENDENTRESERVE","KORBIT","KRAKEN","KRAKENINTL","KUCOIN","LIQUID","OKCOIN","OKEX","PAXOS","POLONIEX","External","Internal"]).optional(),
  "id": z.string().optional(),
  "name": z.string().optional(),
  "walletId": z.string().uuid().optional(),
  "oneTimeAddress": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `oneTimeAddress` to the tool, first call the tool `expandSchema` with \"/properties/transactionRequest/properties/destination/properties/oneTimeAddress\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>").optional(),
  "isCollateral": z.boolean().describe("indicate if the destination is collateral account").optional()
}