import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Floating IP."),
  "action_id": z.number().int().lte(9007199254740991).describe("ID of the Action.")
}