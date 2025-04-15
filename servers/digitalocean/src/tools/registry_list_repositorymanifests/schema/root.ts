import { z } from "zod"

export const inputParamsSchema = {
  "registry_name": z.string().describe("The name of a container registry."),
  "repository_name": z.string().describe("The name of a container registry repository. If the name contains `/` characters, they must be URL-encoded, e.g. `%2F`."),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}