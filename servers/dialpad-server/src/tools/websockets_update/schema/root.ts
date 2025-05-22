import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("The websocket's ID, which is generated after creating a websocket successfully."),
  "secret": z.string().nullable().describe("[single-line only]\n\nWebsocket's signature secret that's used to confirm the validity of the request.").optional()
}