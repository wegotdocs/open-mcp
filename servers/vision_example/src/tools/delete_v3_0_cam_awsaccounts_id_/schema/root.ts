import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().max(12).describe("The ID of the AWS account.")
}