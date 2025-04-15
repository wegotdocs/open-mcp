import { z } from "zod"

export const inputParamsSchema = {
  "vpc_id": z.string().uuid().describe("A unique identifier for a VPC."),
  "resource_type": z.string().describe("Used to filter VPC members by a resource type.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}