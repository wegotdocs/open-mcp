import { z } from "zod"

export const inputParams = {
  "provider_id": z.string().describe("The provider id to get the factory")
}