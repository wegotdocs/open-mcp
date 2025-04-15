import { z } from "zod"

export const inputParamsSchema = {
  "value": z.number().nullable().describe("Largest Contentful Paint value"),
  "previousValue": z.number().describe("Previous Largest Contentful Paint value to display a delta").optional(),
  "source": z.literal("web-vitals")
}