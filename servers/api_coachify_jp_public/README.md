# @open-mcp/api_coachify_jp_public

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_coachify_jp_public \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_coachify_jp_public \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add api_coachify_jp_public \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_coachify_jp_public": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_coachify_jp_public"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_coachify_jp_public
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_coachify_jp_public`
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

### get_mail_magazine_contents_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "page": z.number().int().describe("ページ番号").optional(),
  "page_size": z.number().int().lte(20).describe("1ページあたりの表示件数（最大20）").optional()
}
```

### post_mail_magazine_contents_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject": z.string().describe("メールの件名"),
  "price": z.number().int().gte(110).describe("価格（110円以上）"),
  "html_body": z.string().describe("HTMLフォーマットのメール本文"),
  "text_body": z.string().describe("テキストフォーマットのメール本文"),
  "delivery_date": z.string().datetime({ offset: true }).describe("配信予定日時（現在より未来の日時、e.g. 2025-04-25T09:00:00.00+08:00 形式でタイムゾーン情報を含める）"),
  "is_active": z.boolean().describe("有効/無効フラグ").optional()
}
```

### parameters_mail_magazine_contents_content_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### get_mail_magazine_contents_content_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### patch_mail_magazine_contents_content_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "subject": z.string().describe("メールの件名").optional(),
  "price": z.number().int().gte(110).describe("価格（110円以上）").optional(),
  "html_body": z.string().describe("HTMLフォーマットのメール本文").optional(),
  "text_body": z.string().describe("テキストフォーマットのメール本文").optional(),
  "delivery_date": z.string().datetime({ offset: true }).describe("配信予定日時（現在より未来の日時、e.g. 2025-04-25T09:00:00.00+08:00 形式でタイムゾーン情報を含める）").optional(),
  "is_active": z.boolean().describe("有効/無効フラグ").optional()
}
```

### delete_mail_magazine_contents_content_id_

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```
