import { z } from "zod"

export const inputParams = {
  "id": z.string().describe("The ID of the related LKE cluster.").optional(),
  "label": z.string().describe("The label of the related LKE cluster.").optional(),
  "type": z.string().describe("__Read-only__ The type for LKE clusters.").readonly().optional(),
  "url": z.string().describe("The URL where you can access the related LKE cluster.").optional()
}