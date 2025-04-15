import { z } from "zod"

export const inputParamsSchema = {
  "projectIdOrKey": z.string().describe("The project ID or (case-sensitive) key."),
  "id": z.number().int().describe("The ID of the avatar.")
}