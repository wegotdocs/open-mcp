import { z } from "zod"

export const inputParams = {
  "serviceIds": z.array(z.string()).min(1).max(20).describe("The ID of the services (the strings starting with \"b:\" need to be decoded in Base64).")
}