import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The API call router's ID")
}