import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID for the Runtime, Runtime cluster, or Runtime cloud.")
}