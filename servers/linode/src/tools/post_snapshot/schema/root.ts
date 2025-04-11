import { z } from "zod"

export const inputParams = {
  "label": z.string().min(1).max(255).describe("The label for the new snapshot.")
}