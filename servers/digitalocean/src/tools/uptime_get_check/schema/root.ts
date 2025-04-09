import { z } from "zod"

export const inputParams = {
  "check_id": z.string().uuid().describe("A unique identifier for a check.")
}