import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The ID of the GenericConnectorRecord. You obtain this ID from querying the GenericConnectorRecord object.")
}