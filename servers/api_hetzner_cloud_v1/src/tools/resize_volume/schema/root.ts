import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Volume."),
  "size": z.number().describe("New Volume size in GB (must be greater than current size)")
}