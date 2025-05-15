import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the Runtime, Runtime cluster, or Runtime cloud.")
}