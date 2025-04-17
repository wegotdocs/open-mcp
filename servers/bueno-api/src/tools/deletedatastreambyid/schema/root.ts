import { z } from "zod"

export const inputParamsSchema = {
  "dataStreamId": z.string().uuid().describe("Unique identifier of the Data Stream")
}