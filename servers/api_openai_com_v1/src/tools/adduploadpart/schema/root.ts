import { z } from "zod"

export const inputParamsSchema = {
  "upload_id": z.string().describe("The ID of the Upload.\n")
}