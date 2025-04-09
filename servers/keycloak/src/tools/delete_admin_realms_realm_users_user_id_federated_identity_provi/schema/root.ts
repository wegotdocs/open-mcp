import { z } from "zod"

export const inputParams = {
  "provider": z.string().describe("Social login provider id")
}