import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The webhook's ID, which is generated after creating a webhook successfully.")
}