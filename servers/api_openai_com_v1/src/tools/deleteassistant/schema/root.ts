import { z } from "zod"

export const inputParamsSchema = {
  "assistant_id": z.string().describe("The ID of the assistant to delete.")
}