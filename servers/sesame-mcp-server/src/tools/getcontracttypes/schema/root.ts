import { z } from "zod"

export const inputParamsSchema = {
  "contractTypeId": z.string().uuid().describe("Contract Type ID")
}