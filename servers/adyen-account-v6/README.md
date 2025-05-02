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

- `toolName` (string)
- `jsonPointers` (array)

### post_checkaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `accountStateType` (string)
- `tier` (integer)

### post_closeaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountCode` (string)

### post_closeaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)

### post_closestores

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `stores` (array)

### post_createaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `bankAccountUUID` (string)
- `description` (string)
- `metadata` (object)
- `payoutMethodCode` (string)
- `payoutSchedule` (string)
- `payoutScheduleReason` (string)
- `payoutSpeed` (string)

### post_createaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `accountHolderDetails` (object)
- `createDefaultAccount` (boolean)
- `description` (string)
- `legalEntity` (string)
- `processingTier` (integer)
- `verificationProfile` (string)

### post_deletebankaccounts

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `bankAccountUUIDs` (array)

### post_deletelegalarrangements

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `legalArrangements` (array)

### post_deletepayoutmethods

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `payoutMethodCodes` (array)

### post_deleteshareholders

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `shareholderCodes` (array)

### post_deletesignatories

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `signatoryCodes` (array)

### post_getaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountCode` (string)
- `accountHolderCode` (string)
- `showDetails` (boolean)

### post_gettaxform

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `formType` (string)
- `year` (integer)

### post_getuploadeddocuments

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `bankAccountUUID` (string)
- `shareholderCode` (string)

### post_suspendaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)

### post_unsuspendaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)

### post_updateaccount

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountCode` (string)
- `bankAccountUUID` (string)
- `description` (string)
- `metadata` (object)
- `payoutMethodCode` (string)
- `payoutSchedule` (object)
- `payoutSpeed` (string)

### post_updateaccountholder

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `accountHolderDetails` (object)
- `description` (string)
- `legalEntity` (string)
- `processingTier` (integer)
- `verificationProfile` (string)

### post_updateaccountholderstate

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `accountHolderCode` (string)
- `disable` (boolean)
- `reason` (string)
- `stateType` (string)

### post_uploaddocument

**Environment variables**

- `USERNAME_PASSWORD_BASE64`
- `X_API_KEY`

**Input schema**

- `documentContent` (string)
- `documentDetail` (object)
