import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Unique subaccount identifier in Asaas"),
  "daysToExpire": z.number().int().describe("Number of days to expire the payment escrow"),
  "enabled": z.boolean().describe("Indicates whether the Escrow Account is enabled").optional(),
  "isFeePayer": z.boolean().describe("Indicates whether the subaccount is responsible for paying the Escrow Account fee. If not informed, the main account will be responsible for the fee").optional()
}