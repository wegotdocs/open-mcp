import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().describe("Vault Account name").optional(),
  "hiddenOnUI": z.boolean().describe("Optional - if true, the created account and all related transactions will not be shown on Fireblocks console").optional(),
  "customerRefId": z.string().describe("Optional - Sets a customer reference ID for AML integrations").optional(),
  "autoFuel": z.boolean().describe("Optional - Sets the autoFuel property of the vault account for the Fireblocks Gas Station").optional(),
  "vaultType": z.enum(["MPC","KEY_LINK"]).describe("Type of vault account. The default type will be set to MPC.<br/>  If the workspace does not support the selected type, it will return an error.").optional(),
  "autoAssign": z.boolean().describe("Applicable only when the vault account type is KEY_LINK. For MPC, this parameter will be ignored.<br/> If set to true and there are available keys, random keys will be assigned to the newly created vault account.<br/> If set to true and there are no available keys to be assigned, it will return an error.<br/> If set to false, the vault account will be created without any keys.").optional(),
  "Idempotency-Key": z.string().describe("A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours.").optional()
}