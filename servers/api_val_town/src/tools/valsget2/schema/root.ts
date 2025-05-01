import { z } from "zod"

export const inputParamsSchema = {
  "val_id": z.string().uuid().describe("Id of a val")
}