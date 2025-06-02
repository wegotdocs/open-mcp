import { z } from "zod"

export const inputParamsSchema = {
  "contractAddress": z.string().describe("The contract's onchain address"),
  "baseAssetId": z.string().describe("The blockchain base assetId"),
  "vaultAccountId": z.string().describe("The vault account id this contract was deploy from"),
  "abiFunction": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `abiFunction` to the tool, first call the tool `expandSchema` with \"/properties/abiFunction\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>"),
  "amount": z.string().describe("Amount in base asset. Being used in payable functions").optional(),
  "feeLevel": z.enum(["LOW","MEDIUM","HIGH"]).describe("Fee level for the write function transaction. interchangeable with the 'fee' field").optional(),
  "fee": z.string().describe("Max fee amount for the write function transaction. interchangeable with the 'feeLevel' field").optional(),
  "note": z.string().describe("Custom note, not sent to the blockchain, that describes the transaction at your Fireblocks workspace").optional(),
  "useGasless": z.boolean().describe("Indicates whether the token should be created in a gasless manner, utilizing the ERC-2771 standard. When set to true, the transaction will be relayed by a designated relayer. The workspace must be configured to use Fireblocks gasless relay.").optional(),
  "externalId": z.string().describe("External id that can be used to identify the transaction in your system. The unique identifier of the transaction outside of Fireblocks with max length of 255 characters").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}