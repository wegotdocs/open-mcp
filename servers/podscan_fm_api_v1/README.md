# @open-mcp/podscan_fm_api_v1

## Installing

Use the helper command `add-to-client` to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/podscan_fm_api_v1 add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/podscan_fm_api_v1 add-to-client .cursor/mcp.json
```

### Other

```bash
npx @open-mcp/podscan_fm_api_v1 add-to-client /path/to/client/config.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "podscan_fm_api_v1": {
      "command": "npx",
      "args": ["-y", "@open-mcp/podscan_fm_api_v1"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/podscan_fm_api_v1
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/podscan_fm_api_v1`
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

### alerts_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string")
}
```

### alerts_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert_name": z.string().describe("Name of the alert, mostly for reference in the UI and notification emails"),
  "prompt_filters": z.array(z.string()).describe("A list of strings to scan for, with wildcard (\`word*\`), negation (\`word NOT unwanted_word\`), and phrase (\`\"word word\"\`) support\nHas to be between 1 and 10 items."),
  "alert_enabled": z.boolean().describe("Whether the alert should run or be paused. \`true\` or \`false\`.").optional(),
  "notification_email": z.union([z.string().email().describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set."), z.null().describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set.")]).describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set.").optional(),
  "notification_summary_enabled": z.boolean().describe("Whether to send a summary of the alert's mentions instead of one email per mention. \`true\` or \`false\`.").optional(),
  "notification_summary_frequency": z.union([z.string().max(255).describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`."), z.null().describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`.")]).describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`.").optional(),
  "webhook_enabled": z.boolean().describe("Whether to send a POST request to a URL when a new mention is found. \`true\` or \`false\`.").optional(),
  "webhook_url": z.union([z.string().url().describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details."), z.null().describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details.")]).describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details.").optional(),
  "prompt_question_enabled": z.boolean().describe("Whether to ask an AI-answered question of teh transcript when a new mention is found. \`true\` or \`false\`. Defaults to \`false\`.").optional(),
  "prompt_question": z.union([z.string().describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`."), z.null().describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`.")]).describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`.").optional(),
  "restrict_to_category_ids": z.union([z.string().describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories."), z.null().describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories.")]).describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories.").optional(),
  "ignore_category_ids": z.union([z.string().describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories."), z.null().describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories.")]).describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories.").optional(),
  "restrict_to_podcast_ids": z.union([z.string().describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts."), z.null().describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts.")]).describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts.").optional(),
  "ignore_podcast_ids": z.union([z.string().describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts."), z.null().describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts.")]).describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts.").optional()
}
```

### alerts_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string")
}
```

### alerts_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string")
}
```

### alerts_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string"),
  "alert_name": z.string().describe("Name of the alert, mostly for reference in the UI and notification emails"),
  "prompt_filters": z.array(z.string()).describe("A list of strings to scan for, with wildcard (\`word*\`), negation (\`word NOT unwanted_word\`), and phrase (\`\"word word\"\`) support\nHas to be between 1 and 10 items."),
  "alert_enabled": z.boolean().describe("Whether the alert should run or be paused. \`true\` or \`false\`.").optional(),
  "notification_email": z.union([z.string().email().describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set."), z.null().describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set.")]).describe("An email address to send a notification to when a new mention is found. Defaults to your account's email or the team's email if set.").optional(),
  "notification_summary_enabled": z.boolean().describe("Whether to send a summary of the alert's mentions instead of one email per mention. \`true\` or \`false\`.").optional(),
  "notification_summary_frequency": z.union([z.string().max(255).describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`."), z.null().describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`.")]).describe("How often to send a summary of the alert's mentions. \`daily\`, \`weekly\`, or \`monthly\`.").optional(),
  "webhook_enabled": z.boolean().describe("Whether to send a POST request to a URL when a new mention is found. \`true\` or \`false\`.").optional(),
  "webhook_url": z.union([z.string().url().describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details."), z.null().describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details.")]).describe("A URL to send a POST request to when a new mention is found. The request will contain a JSON object with the mention's details.").optional(),
  "prompt_question_enabled": z.boolean().describe("Whether to ask an AI-answered question of teh transcript when a new mention is found. \`true\` or \`false\`. Defaults to \`false\`.").optional(),
  "prompt_question": z.union([z.string().describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`."), z.null().describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`.")]).describe("The Yes/No question to ask the AI when a new mention is found. Only used if \`prompt_question_enabled\` is \`true\`.").optional(),
  "restrict_to_category_ids": z.union([z.string().describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories."), z.null().describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories.")]).describe("A comma-separated list of category IDs to restrict the alert to. If not set, the alert will scan all categories.").optional(),
  "restrict_to_podcast_ids": z.union([z.string().describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts."), z.null().describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts.")]).describe("A comma-separated list of podcast IDs to restrict the alert to. If not set, the alert will scan all podcasts.").optional(),
  "ignore_category_ids": z.union([z.string().describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories."), z.null().describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories.")]).describe("A comma-separated list of category IDs to ignore for the alert. If not set, the alert will ignore no categories.").optional(),
  "ignore_podcast_ids": z.union([z.string().describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts."), z.null().describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts.")]).describe("A comma-separated list of podcast IDs to ignore for the alert. If not set, the alert will ignore no podcasts.").optional()
}
```

### alerts_mentions_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string")
}
```

### alerts_mentions_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team as a string"),
  "alert": z.string().describe("The ID of the alert as a string"),
  "mention": z.string().describe("The ID of the mention as a string")
}
```

### categories_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### chartsapi_getavailablecountries

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### chartsapi_getsupportedcountries

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### chartsapi_getcategories

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "platform": z.string().describe("The platform (apple or spotify)"),
  "countryCode": z.string().describe("The 2-letter country code")
}
```

### chartsapi_getbycategory

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "platform": z.string().describe("The platform (apple or spotify)"),
  "countryCode": z.string().describe("The 2-letter country code"),
  "category": z.string().describe("The category identifier")
}
```

### chartsapi_getmovements

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "platform": z.string().describe("The platform (apple or spotify)"),
  "countryCode": z.string().describe("The 2-letter country code"),
  "category": z.string().describe("The category identifier"),
  "days": z.string().optional()
}
```

### chartsapi_gettoppodcasts

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "platform": z.string().describe("The platform (apple or spotify)"),
  "countryCode": z.string().describe("The 2-letter country code"),
  "category": z.string().describe("The category identifier"),
  "limit": z.string().optional()
}
```

### chartsapi_getbycountry

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "countryCode": z.string().describe("The 2-letter country code")
}
```

### chartsapi_gettrending

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "countryCode": z.string().describe("The 2-letter country code")
}
```

### entities_search

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "query": z.string().optional(),
  "type": z.string().optional(),
  "role": z.string().optional(),
  "min_appearances": z.string().optional(),
  "search_fields": z.string().optional(),
  "order_by": z.string().describe("Handle sorting parameters").optional(),
  "order_dir": z.string().optional()
}
```

### entities_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "entityId": z.string(),
  "with_appearances": z.boolean().optional()
}
```

### entities_appearances

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "entityId": z.string(),
  "role": z.string().optional(),
  "podcast_id": z.string().optional(),
  "from": z.string().optional(),
  "to": z.string().optional()
}
```

### entities_similar

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "entityId": z.string()
}
```

### episodes_entities

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episodeId": z.string(),
  "role": z.string().optional()
}
```

### episodes_search

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### episodes_search_by_guid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### episodes_recent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### episodes_bulkdownloadepisodes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### episodes_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode": z.string().describe("The ID of the episode")
}
```

### episodes_retranscribe

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode": z.string()
}
```

### episodes_reanalyzeepisode

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "episode": z.string()
}
```

### lists_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team")
}
```

### lists_create

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "name": z.string().max(255),
  "type": z.string().max(50).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "is_private": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "webhook_active": z.boolean().optional(),
  "item": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### lists_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list")
}
```

### lists_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list"),
  "name": z.string().max(255).optional(),
  "description": z.union([z.string(), z.null()]).optional(),
  "is_private": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "webhook_active": z.boolean().optional()
}
```

### lists_delete

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list")
}
```

### lists_items_add

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list"),
  "type": z.enum(["Podcast","PodcastEpisode","Alert","Mention","Topic","Entity"]),
  "id": z.string()
}
```

### lists_items_remove

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team"),
  "list": z.string().describe("The ID of the list"),
  "type": z.enum(["Podcast","PodcastEpisode","Alert","Mention","Topic","Entity"]),
  "id": z.string()
}
```

### podcasts_suggest

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "url": z.string().url()
}
```

### podcasts_search

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### podcasts_search_by_itunesid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### podcasts_search_by_rss

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### podcasts_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "podcast": z.string().describe("The ID of the podcast")
}
```

### podcasts_related

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "podcast": z.string().describe("The ID of the podcast")
}
```

### podcasts_episodes_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "podcast": z.string().describe("The ID of the podcast*")
}
```

### podcasts_retranscribeallepisodes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "podcast": z.string()
}
```

### podcasts_setdiarizationstatus

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "podcast": z.string()
}
```

### teams_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### webhooks_index

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "team": z.string().describe("The ID of the team")
}
```

### teams_firehose_settings_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "teamId": z.string()
}
```

### teams_firehose_settings_update

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "teamId": z.string(),
  "enabled": z.boolean().optional(),
  "webhook_url": z.union([z.string().url(), z.null()]).optional(),
  "compression_enabled": z.boolean().optional(),
  "include_entities": z.boolean().optional(),
  "include_topics": z.boolean().optional(),
  "include_extraction": z.boolean().optional(),
  "restricted_to": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional(),
  "blocked": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:").optional()
}
```

### topics_trending

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "timeframe": z.string().optional(),
  "with_history": z.boolean().optional()
}
```

### topics_search

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "query": z.string().optional(),
  "per_page": z.string().optional()
}
```

### topics_show

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "topic": z.string(),
  "with_history": z.boolean().optional()
}
```

### topics_related

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "topic": z.string()
}
```

### topics_episodes

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "topicId": z.string()
}
```
