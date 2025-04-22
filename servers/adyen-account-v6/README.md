# @open-mcp/adyen-account-v6

## Installing

First set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
X_API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add adyen-account-v6 \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add adyen-account-v6 \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Other

```bash
npx @open-mcp/config add adyen-account-v6 \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64 \
  --X_API_KEY=$X_API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "adyen-account-v6": {
      "command": "npx",
      "args": ["-y", "@open-mcp/adyen-account-v6"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","X_API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/adyen-account-v6
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/adyen-account-v6`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### post_checkaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder to verify."),
  "accountStateType": z.enum(["LimitedPayout","LimitedProcessing","LimitlessPayout","LimitlessProcessing","Payout","Processing"]).describe("The state required for the account holder.\n> Permitted values: \`Processing\`, \`Payout\`."),
  "tier": z.number().int().describe("The tier required for the account holder.")
}
```

### post_closeaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountCode": z.string().describe("The code of account to be closed.")
}
```

### post_closeaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder to be closed.")
}
```

### post_closestores

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder."),
  "stores": z.array(z.string()).describe("List of stores to be closed.")
}
```

### post_createaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of Account Holder under which to create the account."),
  "bankAccountUUID": z.string().describe("The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.").optional(),
  "description": z.string().describe("A description of the account, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores \`_\`.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.").optional(),
  "payoutMethodCode": z.string().describe("The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.").optional(),
  "payoutSchedule": z.enum(["BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT","DAILY","DAILY_AU","DAILY_EU","DAILY_SG","DAILY_US","HOLD","MONTHLY","WEEKLY","WEEKLY_MON_TO_FRI_AU","WEEKLY_MON_TO_FRI_EU","WEEKLY_MON_TO_FRI_US","WEEKLY_ON_TUE_FRI_MIDNIGHT","WEEKLY_SUN_TO_THU_AU","WEEKLY_SUN_TO_THU_US"]).describe("The payout schedule for the account.\n\nPossible values: \`DEFAULT\`, \`DAILY\`, \`DAILY_US\`, \`DAILY_EU\`, \`DAILY_AU\`, \`DAILY_SG\`, \`WEEKLY\`, \`WEEKLY_ON_TUE_FRI_MIDNIGHT\`, \`BIWEEKLY_ON_1ST_AND_15TH_AT_MIDNIGHT\`, \`MONTHLY\`, \`HOLD\`.\n> \`HOLD\` prevents scheduled payouts, but you can still initiate payouts manually.").optional(),
  "payoutScheduleReason": z.string().describe("The reason for the payout schedule choice.\n> This field is required when the \`payoutSchedule\` parameter is set to \`HOLD\`.").optional(),
  "payoutSpeed": z.enum(["INSTANT","SAME_DAY","STANDARD"]).describe("Speed at which payouts for this account are processed.\n\nPossible values: \`STANDARD\` (default), \`SAME_DAY\`.").optional()
}
```

### post_createaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("Your unique identifier for the prospective account holder.\nThe length must be between three (3) and fifty (50) characters long. Only letters, digits, and hyphens (-) are allowed."),
  "accountHolderDetails": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe details of the prospective account holder."),
  "createDefaultAccount": z.boolean().describe("If set to **true**, an account with the default options is automatically created for the account holder.\nBy default, this field is set to **true**.").optional(),
  "description": z.string().describe("A description of the prospective account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores \`_\`.").optional(),
  "legalEntity": z.enum(["Business","Individual","NonProfit","Partnership","PublicCompany"]).describe("The legal entity type of the account holder. This determines the information that should be provided in the request.\n\nPossible values: **Business**, **Individual**, or **NonProfit**.\n\n* If set to **Business** or **NonProfit**, then \`accountHolderDetails.businessDetails\` must be provided, with at least one entry in the \`accountHolderDetails.businessDetails.shareholders\` list.\n\n* If set to **Individual**, then \`accountHolderDetails.individualDetails\` must be provided."),
  "processingTier": z.number().int().describe("The starting [processing tier](https://docs.adyen.com/classic-platforms/onboarding-and-verification/precheck-kyc-information) for the prospective account holder.").optional(),
  "verificationProfile": z.string().describe("The identifier of the profile that applies to this entity.").optional()
}
```

### post_deletebankaccounts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder from which to delete the Bank Account(s)."),
  "bankAccountUUIDs": z.array(z.string()).describe("The code(s) of the Bank Accounts to be deleted.")
}
```

### post_deletelegalarrangements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder."),
  "legalArrangements": z.array(z.object({ "legalArrangementCode": z.string().describe("The code of the legal arrangement to be deleted. If you also send \`legalArrangementEntityCodes\`, only the entities listed will be deleted."), "legalArrangementEntityCodes": z.array(z.string()).describe("List of legal arrangement entities to be deleted.").optional() }).strict()).describe("List of legal arrangements.")
}
```

### post_deletepayoutmethods

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder, from which to delete the payout methods."),
  "payoutMethodCodes": z.array(z.string()).describe("The codes of the payout methods to be deleted.")
}
```

### post_deleteshareholders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder from which to delete the Shareholders."),
  "shareholderCodes": z.array(z.string()).describe("The code(s) of the Shareholders to be deleted.")
}
```

### post_deletesignatories

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder from which to delete the signatories."),
  "signatoryCodes": z.array(z.string()).describe("Array of codes of the signatories to be deleted.")
}
```

### post_getaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountCode": z.string().describe("The code of the account of which to retrieve the details.\n> Required if no \`accountHolderCode\` is provided.").optional(),
  "accountHolderCode": z.string().describe("The code of the account holder of which to retrieve the details.\n> Required if no \`accountCode\` is provided.").optional(),
  "showDetails": z.boolean().describe("True if the request should return the account holder details").optional()
}
```

### post_gettaxform

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The account holder code you provided when you created the account holder."),
  "formType": z.string().describe("Type of the requested tax form. For example, 1099-K."),
  "year": z.number().int().describe("Applicable tax year in the YYYY format.")
}
```

### post_getuploadeddocuments

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder for which to retrieve the documents."),
  "bankAccountUUID": z.string().describe("The code of the Bank Account for which to retrieve the documents.").optional(),
  "shareholderCode": z.string().describe("The code of the Shareholder for which to retrieve the documents.").optional()
}
```

### post_suspendaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder to be suspended.")
}
```

### post_unsuspendaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the account holder to be reinstated.")
}
```

### post_updateaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountCode": z.string().describe("The code of the account to update."),
  "bankAccountUUID": z.string().describe("The bankAccountUUID of the bank account held by the account holder to couple the account with. Scheduled payouts in currencies matching the currency of this bank account will be sent to this bank account. Payouts in different currencies will be sent to a matching bank account of the account holder.").optional(),
  "description": z.string().describe("A description of the account, maximum 256 characters.You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores \`_\`.").optional(),
  "metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nA set of key and value pairs for general use by the merchant.\nThe keys do not have specific names and may be used for storing miscellaneous data as desired.\n> Note that during an update of metadata, the omission of existing key-value pairs will result in the deletion of those key-value pairs.").optional(),
  "payoutMethodCode": z.string().describe("The payout method code held by the account holder to couple the account with. Scheduled card payouts will be sent using this payout method code.").optional(),
  "payoutSchedule": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe details of the payout schedule to which the account must be updated.").optional(),
  "payoutSpeed": z.enum(["INSTANT","SAME_DAY","STANDARD"]).describe("Speed at which payouts for this account are processed.\n\nPossible values: \`STANDARD\` (default), \`SAME_DAY\`.").optional()
}
```

### post_updateaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder to be updated."),
  "accountHolderDetails": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nThe details to which the Account Holder should be updated.\n\nRequired if a processingTier is not provided.").optional(),
  "description": z.string().describe("A description of the account holder, maximum 256 characters. You can use alphanumeric characters (A-Z, a-z, 0-9), white spaces, and underscores \`_\`.").optional(),
  "legalEntity": z.enum(["Business","Individual","NonProfit","Partnership","PublicCompany"]).describe("The legal entity type of the account holder. This determines the information that should be provided in the request.\n\nPossible values: **Business**, **Individual**, or **NonProfit**.\n\n* If set to **Business** or **NonProfit**, then \`accountHolderDetails.businessDetails\` must be provided, with at least one entry in the \`accountHolderDetails.businessDetails.shareholders\` list.\n\n* If set to **Individual**, then \`accountHolderDetails.individualDetails\` must be provided.").optional(),
  "processingTier": z.number().int().describe("The processing tier to which the Account Holder should be updated.\n>The processing tier can not be lowered through this request.\n\n>Required if accountHolderDetails are not provided.").optional(),
  "verificationProfile": z.string().describe("The identifier of the profile that applies to this entity.").optional()
}
```

### post_updateaccountholderstate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "accountHolderCode": z.string().describe("The code of the Account Holder on which to update the state."),
  "disable": z.boolean().describe("If true, disable the requested state.  If false, enable the requested state."),
  "reason": z.string().describe("The reason that the state is being updated.\n>Required if the state is being disabled.").optional(),
  "stateType": z.enum(["LimitedPayout","LimitedProcessing","LimitlessPayout","LimitlessProcessing","Payout","Processing"]).describe("The state to be updated.\n>Permitted values are: \`Processing\`, \`Payout\`")
}
```

### post_uploaddocument

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

```ts
{
  "documentContent": z.string().describe("The content of the document, in Base64-encoded string format.\n\nTo learn about document requirements, refer to [Verification checks](https://docs.adyen.com/classic-platforms/verification-checks)."),
  "documentDetail": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nDetails of the document being submitted.")
}
```
