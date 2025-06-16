import { z } from "zod"

export const inputParamsSchema = {
  "type": z.enum(["least_connections","round_robin"]).describe("Type of the algorithm.")
}