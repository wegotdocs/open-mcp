import { z } from "zod"

export const inputParams = {
  "name": z.string().min(1).max(64).describe("The name of the SSH key."),
  "public_key": z.string().min(1).max(4096).describe("The public key for the SSH key.").optional()
}