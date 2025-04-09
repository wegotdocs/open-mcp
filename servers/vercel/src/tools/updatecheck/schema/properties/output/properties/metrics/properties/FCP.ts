import { z } from "zod"

export const inputParams = {
  "value": z.number().nullable().describe("First Contentful Paint value"),
  "previousValue": z.number().describe("Previous First Contentful Paint value to display a delta").optional(),
  "source": z.literal("web-vitals")
}