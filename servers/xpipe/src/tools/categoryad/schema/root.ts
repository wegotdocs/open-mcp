import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("The category name"),
  "parent": z.string().describe("The parent category uuid to put the new category in")
}