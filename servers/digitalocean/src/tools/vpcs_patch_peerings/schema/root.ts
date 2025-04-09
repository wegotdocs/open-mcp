import { z } from "zod"

export const inputParams = {
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "vpc_peering_id": z.string().uuid().describe("A unique identifier for a VPC peering.")
}