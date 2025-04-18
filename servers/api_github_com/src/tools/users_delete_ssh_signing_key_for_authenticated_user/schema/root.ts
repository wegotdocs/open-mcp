import { z } from "zod"

export const inputParamsSchema = {
  "ssh_signing_key_id": z.number().int().describe("The unique identifier of the SSH signing key.")
}