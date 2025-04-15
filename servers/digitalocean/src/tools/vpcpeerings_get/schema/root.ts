import { z } from "zod"

export const inputParamsSchema = {
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}