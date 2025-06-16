import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Load Balancer."),
  "load_balancer_type": z.string().describe("ID or name of Load Balancer type the Load Balancer should migrate to")
}