import { z } from "zod"

export const inputParamsSchema = {
  "petId": z.string().describe("The id of the pet to retrieve")
}