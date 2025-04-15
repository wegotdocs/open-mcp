import { z } from "zod"

export const inputParamsSchema = {
  "file_key": z.string().describe("File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
}