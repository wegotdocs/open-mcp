import { z } from "zod"

export const inputParamsSchema = {
  "blockchainId": z.string().describe("Native asset ID of the blockchain"),
  "address": z.string().describe("Asset address.\n- EVM-based chains: token contract address\n- Stellar (XLM): issuer address\n- Algorand (ALGO): asset ID\n- TRON (TRX): token contract address\n- NEAR: token address\n- Solana: token's mint account address\n"),
  "symbol": z.string().describe("Required for Stellar only, asset code is expected.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}