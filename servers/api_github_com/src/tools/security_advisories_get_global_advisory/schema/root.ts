import { z } from "zod"

export const inputParamsSchema = {
  "ghsa_id": z.string().describe("The GHSA (GitHub Security Advisory) identifier of the advisory.")
}