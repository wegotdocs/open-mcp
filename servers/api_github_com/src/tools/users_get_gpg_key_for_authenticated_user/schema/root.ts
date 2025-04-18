import { z } from "zod"

export const inputParamsSchema = {
  "gpg_key_id": z.number().int().describe("The unique identifier of the GPG key.")
}