import { z } from "zod"

export const inputParamsSchema = {
  "contractId": z.string().uuid().describe("Contract ID")
}