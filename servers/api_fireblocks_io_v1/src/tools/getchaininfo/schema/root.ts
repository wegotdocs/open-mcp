import { z } from "zod"

export const inputParamsSchema = {
  "chainDescriptor": z.enum(["ETH","SOL","MATIC","ETH_TEST6","SOL_TEST"]).describe("The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\"/\"STETH_ETH\") to use")
}