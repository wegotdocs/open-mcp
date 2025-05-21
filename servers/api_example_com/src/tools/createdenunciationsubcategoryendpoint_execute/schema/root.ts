import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the denunciation subcategory"),
  "categoryId": z.number().describe("ID of the parent category")
}