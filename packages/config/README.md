# @open-mcp/config

## Adding a server to your MCP client

### Claude desktop

```bash
npx @open-mcp/config add {server-id}\
  ~/Library/Application\ Support/Claude/claude_desktop_config.json\
  --ENV_VAR=abc123
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add {server-id}\
  .cursor/mcp.json\
  --ENV_VAR=abc123
```

### Other

```bash
npx @open-mcp/config add {server-id}\
  /path/to/config.json\
  --ENV_VAR=abc123
```

## Removing a server from your MCP client

### Claude desktop

```bash
npx @open-mcp/config remove {server-id}\
  ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

```bash
npx @open-mcp/config remove {server-id}\
  .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/config remove {server-id}\
  /path/to/config.json
```
