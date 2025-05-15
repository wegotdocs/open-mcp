import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Required. Read only. The Boomi-generated, unique identifier of the folder.")
}