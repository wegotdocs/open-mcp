import { z } from "zod"

export const inputParamsSchema = {
  "chainDescriptor": z.enum(["ETH","SOL","MATIC","ETH_TEST6","SOL_TEST"]).describe("Use \"ETH\" / \"SOL\" / \"MATIC\" / \"STETH_ETH\" in order to obtain information related to the specific blockchain network or retrieve information about all chains that have data available by providing no argument.").optional()
}