import { z } from "zod"

export const inputParamsSchema = {
  "accountHolderCode": z.string().describe("The code of the account holder to verify."),
  "accountStateType": z.enum(["LimitedPayout","LimitedProcessing","LimitlessPayout","LimitlessProcessing","Payout","Processing"]).describe("The state required for the account holder.\n> Permitted values: `Processing`, `Payout`."),
  "tier": z.number().int().describe("The tier required for the account holder.")
}