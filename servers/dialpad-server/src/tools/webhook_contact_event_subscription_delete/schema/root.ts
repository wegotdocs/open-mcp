import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The event subscription's ID, which is generated after creating an event subscription successfully.")
}