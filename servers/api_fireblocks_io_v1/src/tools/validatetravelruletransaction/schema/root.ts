import { z } from "zod"

export const inputParamsSchema = {
  "notation": z.string().describe("Specifies the notation of the transaction. Possible values are: - `notabene`: Uses Notabene notation (default behavior). - `fireblocks`: Uses Fireblocks notation, with automatic translation of asset tickers and amounts. - `<none>`: Defaults to `notabene` for backward compatibility.\n**Note:** The default value for the `notation` parameter will change from `notabene` to `fireblocks` Update your integrations accordingly.").optional(),
  "transactionAsset": z.string().describe("Transaction asset symbol BTC,ETH)"),
  "destination": z.string().describe("Transaction destination address"),
  "transactionAmount": z.string().describe("Transaction amount in the transaction asset"),
  "originatorVASPdid": z.string().describe("This is the identifier assigned to your VASP"),
  "originatorEqualsBeneficiary": z.boolean().describe("\"True\" if the originator and beneficiary is the same person and you therefore do not need to collect any information. \"False\" if it is a third-party transfer."),
  "travelRuleBehavior": z.boolean().describe("This will also check if the transaction is a TRAVEL_RULE in the beneficiary VASP's jurisdiction").optional(),
  "beneficiaryVASPdid": z.string().describe("This is the identifier assigned to the VASP the funds are being sent to").optional(),
  "beneficiaryVASPname": z.string().describe("Beneficiary VASP name").optional(),
  "beneficiaryName": z.string().describe("Beneficiary  name").optional(),
  "beneficiaryAccountNumber": z.string().describe("Beneficiary  name").optional(),
  "beneficiaryAddress": z.string().optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}