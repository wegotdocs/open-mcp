import { z } from "zod"

export const inputParamsSchema = {
  "componentId": z.string().describe("The ID of the component for which you want to compare versions.")
}