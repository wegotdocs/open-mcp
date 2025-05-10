import { z } from "zod"

export const inputParamsSchema = {
  "file_id": z.string().describe("The ID of the file to use for this request.")
}