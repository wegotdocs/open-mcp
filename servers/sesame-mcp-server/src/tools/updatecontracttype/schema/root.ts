import { z } from "zod"

export const inputParamsSchema = {
  "contractTypeId": z.string().uuid().describe("Contract type ID"),
  "name": z.string().describe("Start date of contract")
}