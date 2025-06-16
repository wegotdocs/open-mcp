import { z } from "zod"

export const inputParamsSchema = {
  "documentChecksum": z.string().describe("The checksum of the document to retrieve the signed access url for.")
}