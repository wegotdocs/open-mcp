# @open-mcp/fincar-server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "fincar-server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/fincar-server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/fincar-server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add fincar-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add fincar-server \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add fincar-server \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "fincar-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/fincar-server"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### get_v1_packages

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### get_v1_packages_packageid_

**Environment variables**

- `API_KEY`

**Input schema**

- `packageId` (integer)

### get_v1_businesses

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `offset` (integer)

### post_v1_businesses

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (integer)
- `businessId` (integer)
- `name` (string)
- `abn` (string)
- `acn` (string)
- `industryType` (string)
- `businessSize` (string)
- `streetAddress` (string)
- `suburb` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `contactEmail` (string)
- `phoneNumber` (string)
- `website` (string)
- `participantsCount` (integer)
- `packagesEnrolled` (array)
- `status` (integer)
- `createdAt` (string)
- `updatedAt` (string)

### get_v1_businesses_businessid_

**Environment variables**

- `API_KEY`

**Input schema**

- `businessId` (integer)

### put_v1_businesses_businessid_

**Environment variables**

- `API_KEY`

**Input schema**

- `businessId` (integer)
- `id` (integer)
- `b_businessId` (integer)
- `name` (string)
- `abn` (string)
- `acn` (string)
- `industryType` (string)
- `businessSize` (string)
- `streetAddress` (string)
- `suburb` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `contactEmail` (string)
- `phoneNumber` (string)
- `website` (string)
- `participantsCount` (integer)
- `packagesEnrolled` (array)
- `status` (integer)
- `createdAt` (string)
- `updatedAt` (string)

### delete_v1_businesses_businessid_

**Environment variables**

- `API_KEY`

**Input schema**

- `businessId` (integer)

### get_v1_businesses_businessid_participants

**Environment variables**

- `API_KEY`

**Input schema**

- `businessId` (integer)
- `limit` (integer)
- `offset` (integer)

### post_v1_businesses_businessid_participants

**Environment variables**

- `API_KEY`

**Input schema**

- `businessId` (string)
- `id` (integer)
- `participantId` (integer)
- `employeeId` (string)
- `name` (string)
- `email` (string)
- `employmentStatus` (string)
- `employmentStartDate` (string)
- `department` (string)
- `streetAddress` (string)
- `suburb` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `phoneNumber` (string)
- `salary` (number)
- `status` (integer)
- `createdAt` (string)
- `updatedAt` (string)

### get_v1_businesses_businessid_participants_participantid_

**Environment variables**

- `API_KEY`

**Input schema**

- `participantId` (string)
- `businessId` (string)

### put_v1_businesses_businessid_participants_participantid_

**Environment variables**

- `API_KEY`

**Input schema**

- `participantId` (string)
- `businessId` (string)
- `id` (integer)
- `b_participantId` (integer)
- `employeeId` (string)
- `name` (string)
- `email` (string)
- `employmentStatus` (string)
- `employmentStartDate` (string)
- `department` (string)
- `streetAddress` (string)
- `suburb` (string)
- `state` (string)
- `postcode` (string)
- `country` (string)
- `phoneNumber` (string)
- `salary` (number)
- `status` (integer)
- `createdAt` (string)
- `updatedAt` (string)

### delete_v1_businesses_businessid_participants_participantid_

**Environment variables**

- `API_KEY`

**Input schema**

- `participantId` (string)
- `businessId` (string)
