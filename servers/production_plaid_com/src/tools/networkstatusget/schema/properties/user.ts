import { z } from "zod"

export const inputParamsSchema = {
  "phone_number": z.string().describe("The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.")
}