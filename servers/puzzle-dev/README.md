# @open-mcp/puzzle-dev

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/puzzle-dev add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/puzzle-dev add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/puzzle-dev add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "puzzle-dev": {
      "command": "npx",
      "args": ["-y", "@open-mcp/puzzle-dev"],
      "env": {}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

No environment variables required

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/puzzle-dev
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/puzzle-dev`
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

### createcompanyapi

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### financialaccounts

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createfinancialaccount

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### balances

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createaccountbalance

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### vendors

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createvendorapi

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### requests

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createrequests

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### vendorspendingreportapi

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### expensemetrics

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### revenuemetrics

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### employeemetrics

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createtemporarylinktoken

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### me

**Environment variables**



**Input schema**

```ts
{}
```

### chartofaccounts

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### classifications

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### ledgeraccount

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### workerslist

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### journalentries

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### upsertjournalentry

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### gettransactions

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createtransactions

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### gettransaction

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### updatetransaction

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createdocument

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### departments

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createdepartment

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### locations

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createlocation

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createcontractor

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createemployee

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### benefits

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createbenefit

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### createdetailedpayroll

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### getpayroll

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### ledgerreportdownload

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### initiateprefilledonboarding

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### monthlychecklists

**Environment variables**



**Input schema**

```ts
{
  "input": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```
