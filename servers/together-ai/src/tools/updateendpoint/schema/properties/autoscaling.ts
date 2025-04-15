import { z } from "zod"

export const inputParamsSchema = {
  "min_replicas": z.number().int().describe("The minimum number of replicas to maintain, even when there is no load"),
  "max_replicas": z.number().int().describe("The maximum number of replicas to scale up to under load")
}