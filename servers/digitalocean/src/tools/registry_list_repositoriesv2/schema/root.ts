import { z } from "zod"

export const inputParamsSchema = {
  "registry_name": z.string().describe("The name of a container registry."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return. Ignored when 'page_token' is provided.").optional(),
  "page_token": z.string().describe("Token to retrieve of the next or previous set of results more quickly than using 'page'.").optional()
}