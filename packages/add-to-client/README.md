# @open-mcp/add-to-client

### Claude desktop

```bash
npx @open-mcp/add-to-client {server-id}\
  ~/Library/Application\ Support/Claude/claude_desktop_config.json\
  --ENV_VAR=abc123
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/add-to-client {server-id}\
  .cursor/mcp.json\
  --ENV_VAR=abc123
```

### Other

```bash
npx @open-mcp/add-to-client {server-id}\
  .cursor/mcp.json\
  --ENV_VAR=abc123
```
