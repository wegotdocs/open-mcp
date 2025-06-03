import { z } from "zod"

export const inputParamsSchema = {
  "companyId": z.string(),
  "data": z.array(z.object({ "customId": z.string().describe("Embat custom/auto unique reconciling item identifier. You can use as your internal reconciling item identifier") }))
}