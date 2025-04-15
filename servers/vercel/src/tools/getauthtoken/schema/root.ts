import { z } from "zod"

export const inputParamsSchema = {
  "tokenId": z.string().describe("The identifier of the token to retrieve. The special value \\\"current\\\" may be supplied, which returns the metadata for the token that the current HTTP request is authenticated with.")
}