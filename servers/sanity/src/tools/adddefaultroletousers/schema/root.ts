import { z } from "zod"

export const inputParamsSchema = {
  "resourceId": z.string().describe("The resource ID to scope the access request to. Must be a valid ID for the resource type.")
}