import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The block storage volume's name.").optional(),
  "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional(),
  "per_page": z.number().int().gte(1).lte(200).describe("Number of items returned per page").optional(),
  "page": z.number().int().gte(1).describe("Which 'page' of paginated results to return.").optional()
}