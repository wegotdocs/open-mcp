import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the new default issue resolution. Must be an existing ID or null. Setting this to null erases the default resolution setting.")
}