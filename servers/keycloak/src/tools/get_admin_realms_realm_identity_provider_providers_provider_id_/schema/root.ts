import { z } from "zod"

export const inputParamsSchema = {
  "provider_id": z.string().describe("The provider id to get the factory")
}