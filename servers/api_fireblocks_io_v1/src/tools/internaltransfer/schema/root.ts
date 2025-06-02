import { z } from "zod"

export const inputParamsSchema = {
  "exchangeAccountId": z.string().describe("The ID of the exchange account to return"),
  "asset": z.string(),
  "amount": z.string(),
  "sourceType": z.enum(["COIN_FUTURES","COIN_MARGINED_SWAP","EXCHANGE","FUNDING","FUNDABLE","FUTURES","FUTURES_CROSS","MARGIN","MARGIN_CROSS","OPTIONS","SPOT","USDT_MARGINED_SWAP_CROSS","USDT_FUTURES","UNIFIED"]),
  "destType": z.enum(["COIN_FUTURES","COIN_MARGINED_SWAP","EXCHANGE","FUNDING","FUNDABLE","FUTURES","FUTURES_CROSS","MARGIN","MARGIN_CROSS","OPTIONS","SPOT","USDT_MARGINED_SWAP_CROSS","USDT_FUTURES","UNIFIED"]),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}