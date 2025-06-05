import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team."),
  "payment_method_id": z.string().describe("The payment method ID to retrieve.")
}