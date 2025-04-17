import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Name of the Group"),
  "siteId": z.string().uuid().describe("Unique identifier of the Site the Group belongs to")
}