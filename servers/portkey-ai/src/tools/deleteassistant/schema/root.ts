import { z } from "zod"

export const inputParams = {
  "assistant_id": z.string().describe("The ID of the assistant to delete.")
}