import { z } from "zod"

export const inputParamsSchema = {
  "contractId": z.string().describe("The ID of the contract to return")
}