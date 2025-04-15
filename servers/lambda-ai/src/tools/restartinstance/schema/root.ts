import { z } from "zod"

export const inputParamsSchema = {
  "instance_ids": z.array(z.string()).describe("The unique identifiers (IDs) of the instances to restart.")
}