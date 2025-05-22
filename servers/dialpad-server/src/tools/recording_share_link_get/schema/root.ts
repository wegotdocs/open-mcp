import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The recording share link's ID.")
}