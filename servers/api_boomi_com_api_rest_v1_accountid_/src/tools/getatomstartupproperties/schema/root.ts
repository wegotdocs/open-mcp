import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID for the Runtime, Runtime cluster, or Runtime cloud. (This API is not applicable for runtimes attached to clouds)")
}