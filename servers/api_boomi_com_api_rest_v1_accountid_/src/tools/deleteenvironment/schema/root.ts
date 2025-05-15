import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("A unique ID assigned by the system to the environment.")
}