import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("Request ID returned by a POST /stats request.")
}