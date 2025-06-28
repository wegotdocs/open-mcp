import { z } from "zod"

export const inputParamsSchema = {
  "symbols": z.array(z.string()),
  "providers": z.array(z.enum(["BINANCE","KRAKEN","BITFINEX","COINBASE"])),
  "from": z.string().datetime({ offset: true }).optional(),
  "to": z.string().datetime({ offset: true }).optional(),
  "limit": z.number().int().optional(),
  "interval": z.string(),
  "cursor": z.string().optional()
}