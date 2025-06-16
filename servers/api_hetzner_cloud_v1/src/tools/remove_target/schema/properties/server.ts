import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().lte(9007199254740991).describe("ID of the Server. | ID of the [Server](#servers). | ID of the Server")
}