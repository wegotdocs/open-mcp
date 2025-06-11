import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "ownerUid": z.string().uuid().describe("Device owner identifier")
}