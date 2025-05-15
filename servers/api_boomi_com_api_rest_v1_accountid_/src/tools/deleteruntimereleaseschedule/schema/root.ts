import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the container for which you want to set a schedule.")
}