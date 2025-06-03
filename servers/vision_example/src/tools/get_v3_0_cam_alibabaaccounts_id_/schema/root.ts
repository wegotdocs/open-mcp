import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(16).describe("The ID of the Alibaba Cloud account.")
}