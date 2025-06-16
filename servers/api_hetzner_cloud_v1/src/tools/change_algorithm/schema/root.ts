import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "type": z.enum(["least_connections","round_robin"]).describe("Type of the algorithm.")
}