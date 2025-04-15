import { z } from "zod"

export const inputParamsSchema = {
  "accountHolderCode": z.string().describe("The code of the Account Holder on which to update the state."),
  "disable": z.boolean().describe("If true, disable the requested state.  If false, enable the requested state."),
  "reason": z.string().describe("The reason that the state is being updated.\n>Required if the state is being disabled.").optional(),
  "stateType": z.enum(["LimitedPayout","LimitedProcessing","LimitlessPayout","LimitlessProcessing","Payout","Processing"]).describe("The state to be updated.\n>Permitted values are: `Processing`, `Payout`")
}