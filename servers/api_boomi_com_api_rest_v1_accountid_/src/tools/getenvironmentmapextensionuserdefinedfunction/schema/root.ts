import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Represents the unique, system-generated ID of the extended user-defined function.")
}