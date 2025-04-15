import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The block storage volume's name.").optional(),
  "region": z.enum(["ams1","ams2","ams3","blr1","fra1","lon1","nyc1","nyc2","nyc3","sfo1","sfo2","sfo3","sgp1","tor1","syd1"]).describe("The slug identifier for the region where the resource will initially be  available.").optional()
}