import { z } from "zod"

export const inputParamsSchema = {
  "exchangeType": z.enum(["INDEPENDENT_RESERVE","ENCLAVE_MARKETS","BIT","COINFLEX","KUCOIN","PXS","LIQUID","BITHUMB","BITFINEX","BITSO","BITSTAMP","KRAKEN","KRAKENINTL","BINANCE","BINANCEUS","CRYPTOCOM","BYBIT_V2","COINBASEPRO","COINBASEPRIME","COINBASEINTERNATIONAL","WHITEBIT","COINBASEEXCHANGE","KORBIT","HITBTC","GEMINIs","CIRCLE","BITMEX","HUOBI","DERIBIT","OKCOIN_V5","OKEX","COINMETRO","GATEIO","SCRYPT","COINHAKO","LIGHTBIT","BULLISH","CANVAS_CONNECT","BITGET","LUNO","BIT_GENERA","TRANSFERO"]).describe("Exchange account's type"),
  "name": z.string().describe("Display name of the exchange account"),
  "creds": z.string().describe("Encrypted credentials").optional(),
  "key": z.string().describe("Api key of the exchange").optional(),
  "mainAccountId": z.string().describe("Optional - main account id of the exchange").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}