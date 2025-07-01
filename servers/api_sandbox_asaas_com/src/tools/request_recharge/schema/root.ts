import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().describe("Recharge value"),
  "phoneNumber": z.string().describe("Cellphone number")
}