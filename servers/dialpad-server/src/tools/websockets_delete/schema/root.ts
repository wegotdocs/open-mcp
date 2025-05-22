import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The websocket's ID, which is generated after creating a websocket successfully.")
}