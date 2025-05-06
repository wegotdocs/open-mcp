# @open-mcp/adyen-account-v6

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "adyen-account-v6": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/adyen-account-v6@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/adyen-account-v6@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

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

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `USERNAME_PASSWORD_BASE64` - gets sent to the API provider
- `X_API_KEY` - gets sent to the API provider

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
