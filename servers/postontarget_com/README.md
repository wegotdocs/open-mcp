# @open-mcp/postontarget_com

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/postontarget_com add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/postontarget_com add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/postontarget_com add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "postontarget_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/postontarget_com"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/postontarget_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/postontarget_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### post_fields_country

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "country_code": z.string().optional(), "country_name_EN": z.string().optional(), "country_name_IT": z.string().optional() }).optional()
}
```

### post_fields_admin1_geo

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "ID": z.string().optional(), "admin1_name": z.string().optional(), "admin1_name_ascii": z.string().optional(), "country_code": z.string().optional() }).optional()
}
```

### post_fields_admin2_geo

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "ID": z.string().optional(), "admin2_name": z.string().optional(), "admin2_name_ascii": z.string().optional(), "country_code": z.string().optional(), "id_admin1": z.string().optional() }).optional()
}
```

### post_fields_dipendenti

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "dipendenti": z.string().optional() }).optional()
}
```

### post_fields_fatturato

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "fatturato": z.string().optional() }).optional()
}
```

### post_fields_forma_giuridica

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "ID": z.number().int().optional(), "forma_giuridica": z.string().optional(), "country_code": z.string().optional() }).optional()
}
```

### post_fields_macrocategorie

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "ID": z.number().int().optional(), "macro_name_IT": z.string().optional(), "macro_name_EN": z.string().optional() }).optional()
}
```

### post_fields_microcategorie

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "limit": z.number().int().optional(),
  "query": z.object({ "ID": z.number().int().optional(), "micro_name_IT": z.string().optional(), "micro_name_EN": z.string().optional(), "id_macro": z.number().int().optional() }).optional()
}
```

### post_search

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "query": z.object({ "country_code": z.string().describe("Code of the country where you want to search for personal data").optional(), "admin1_code": z.string().describe("Code of the region where you want to search for data").optional(), "admin2_code": z.string().describe("Code of the province where you want to search for data").optional(), "dipendenti": z.string().describe("Range of employed employees who must have the company").optional(), "fatturato": z.string().describe("Range of turnover in which the company must be included").optional(), "forma_giuridica_id": z.number().int().describe("Legal form identifier that the company must have").optional(), "macro_id": z.number().int().describe("Commodity macro-category identifier to which the company must belong").optional(), "micro_id": z.number().int().describe("Commodity macro-category identifier to which the company must belong").optional() })
}
```

### post_buying

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id_request": z.string().describe("Request identifier returned after performing a POST Search").optional(),
  "records": z.number().int().describe("Number of records that you want to buy").optional()
}
```

### get_state

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_state_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "_id": z.string().describe("Request / search identifier")
}
```
