import { z } from "zod"

export const inputParamsSchema = {
  "id": z.string().describe("The collection link id"),
  "vaultAccountId": z.string().describe("The id of the vault account that initiates the mint function."),
  "to": z.string().describe("The EVM address to mint to "),
  "tokenId": z.string().describe("The token id, recommended to have numerical format and in sequential order"),
  "amount": z.string().describe("For ERC721, amount is optional or should always be 1 and for ERC1155, amount should be 1 or greater").optional(),
  "metadataURI": z.string().describe("URL of metadata uploaded, skip uploading to IPFS if this field is provided with any value").optional(),
  "metadata": z.string().optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}