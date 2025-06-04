import { z } from "zod"

export const inputParamsSchema = {
  "CollectionID": z.string().describe("CollectionID")
}