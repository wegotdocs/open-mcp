import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Primary IP."),
  "assignee_id": z.number().int().describe("ID of a resource of type `assignee_type`"),
  "assignee_type": z.literal("server").describe("Type of resource assigning the Primary IP to")
}