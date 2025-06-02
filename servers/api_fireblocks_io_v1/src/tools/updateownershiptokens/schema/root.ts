import { z } from "zod"

export const inputParamsSchema = {
  "blockchainDescriptor": z.enum(["ETH","ETH_TEST5","ETH_TEST6","POLYGON","POLYGON_TEST_MUMBAI","AMOY_POLYGON_TEST","BASECHAIN_ETH","BASECHAIN_ETH_TEST5","ETHERLINK","ETHERLINK_TEST","MANTLE","MANTLE_TEST","GUN_GUNZILLA_TEST","ETH_SONEIUM","SONEIUM_MINATO_TEST","IOTX_IOTEX"]).describe("Blockchain descriptor filter"),
  "vaultAccountId": z.string().describe("Vault account filter"),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}