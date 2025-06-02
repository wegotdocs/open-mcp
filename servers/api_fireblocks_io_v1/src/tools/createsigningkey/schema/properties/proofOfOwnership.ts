import { z } from "zod"

export const inputParamsSchema = {
  "message": z.string().min(64).max(2048).describe("The message to be signed by the key as proof of ownership. 64 to 1024 bytes in hexadecimal format."),
  "signature": z.string().min(64).max(128).describe("The signature of the message. 64 bytes in hexadecimal format.")
}