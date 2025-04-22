# @open-mcp/figma

## Installing

First set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
X_FIGMA_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add figma \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add figma \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Other

```bash
npx @open-mcp/config add figma \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN \
  --X_FIGMA_TOKEN=$X_FIGMA_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "figma": {
      "command": "npx",
      "args": ["-y", "@open-mcp/figma"],
      "env": {"OAUTH2_TOKEN":"...","X_FIGMA_TOKEN":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/figma
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/figma`
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

### getfile

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to export JSON from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "version": z.string().describe("A specific version ID to get. Omitting this will get the current version of the file.").optional(),
  "ids": z.string().describe("Comma separated list of nodes that you care about in the document. If specified, only a subset of the document will be returned corresponding to the nodes listed, their children, and everything between the root node and the listed nodes.\n\nNote: There may be other nodes included in the returned JSON that are outside the ancestor chains of the desired nodes. The response may also include dependencies of anything in the nodes' subtrees. For example, if a node subtree contains an instance of a local component that lives elsewhere in that file, that component and its ancestor chain will also be included.\n\nFor historical reasons, top-level canvas nodes are always returned, regardless of whether they are listed in the \`ids\` parameter. This quirk may be removed in a future version of the API.").optional(),
  "depth": z.number().describe("Positive integer representing how deep into the document tree to traverse. For example, setting this to 1 returns only Pages, setting it to 2 returns Pages and all top level objects on each page. Not setting this parameter returns all nodes.").optional(),
  "geometry": z.string().describe("Set to \"paths\" to export vector data.").optional(),
  "plugin_data": z.string().describe("A comma separated list of plugin IDs and/or the string \"shared\". Any data present in the document written by those plugins will be included in the result in the \`pluginData\` and \`sharedPluginData\` properties.").optional(),
  "branch_data": z.boolean().describe("Returns branch metadata for the requested file. If the file is a branch, the main file's key will be included in the returned response. If the file has branches, their metadata will be included in the returned response. Default: false.").optional()
}
```

### getfilenodes

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to export JSON from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "ids": z.string().describe("A comma separated list of node IDs to retrieve and convert."),
  "version": z.string().describe("A specific version ID to get. Omitting this will get the current version of the file.").optional(),
  "depth": z.number().describe("Positive integer representing how deep into the node tree to traverse. For example, setting this to 1 will return only the children directly underneath the desired nodes. Not setting this parameter returns all nodes.\n\nNote: this parameter behaves differently from the same parameter in the \`GET /v1/files/:key\` endpoint. In this endpoint, the depth will be counted starting from the desired node rather than the document root node.").optional(),
  "geometry": z.string().describe("Set to \"paths\" to export vector data.").optional(),
  "plugin_data": z.string().describe("A comma separated list of plugin IDs and/or the string \"shared\". Any data present in the document written by those plugins will be included in the result in the \`pluginData\` and \`sharedPluginData\` properties.").optional()
}
```

### getimages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to export images from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "ids": z.string().describe("A comma separated list of node IDs to render."),
  "version": z.string().describe("A specific version ID to get. Omitting this will get the current version of the file.").optional(),
  "scale": z.number().gte(0.01).lte(4).describe("A number between 0.01 and 4, the image scaling factor.").optional(),
  "format": z.enum(["jpg","png","svg","pdf"]).describe("A string enum for the image output format.").optional(),
  "svg_outline_text": z.boolean().describe("Whether text elements are rendered as outlines (vector paths) or as \`<text>\` elements in SVGs.\n\nRendering text elements as outlines guarantees that the text looks exactly the same in the SVG as it does in the browser/inside Figma.\n\nExporting as \`<text>\` allows text to be selectable inside SVGs and generally makes the SVG easier to read. However, this relies on the browser's rendering engine which can vary between browsers and/or operating systems. As such, visual accuracy is not guaranteed as the result could look different than in Figma.").optional(),
  "svg_include_id": z.boolean().describe("Whether to include id attributes for all SVG elements. Adds the layer name to the \`id\` attribute of an svg element.").optional(),
  "svg_include_node_id": z.boolean().describe("Whether to include node id attributes for all SVG elements. Adds the node id to a \`data-node-id\` attribute of an svg element.").optional(),
  "svg_simplify_stroke": z.boolean().describe("Whether to simplify inside/outside strokes and use stroke attribute if possible instead of \`<mask>\`.").optional(),
  "contents_only": z.boolean().describe("Whether content that overlaps the node should be excluded from rendering. Passing false (i.e., rendering overlaps) may increase processing time, since more of the document must be included in rendering.").optional(),
  "use_absolute_bounds": z.boolean().describe("Use the full dimensions of the node regardless of whether or not it is cropped or the space around it is empty. Use this to export text nodes without cropping.").optional()
}
```

### getimagefills

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get image URLs from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key.")
}
```

### getteamprojects

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "team_id": z.string().describe("ID of the team to list projects from")
}
```

### getprojectfiles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "project_id": z.string().describe("ID of the project to list files from"),
  "branch_data": z.boolean().describe("Returns branch metadata in the response for each main file with a branch inside the project.").optional()
}
```

### getfileversions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get version history from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "page_size": z.number().lte(50).describe("The number of items returned in a page of the response. If not included, \`page_size\` is \`30\`.").optional(),
  "before": z.number().describe("A version ID for one of the versions in the history. Gets versions before this ID. Used for paginating. If the response is not paginated, this link returns the same data in the current response.").optional(),
  "after": z.number().describe("A version ID for one of the versions in the history. Gets versions after this ID. Used for paginating. If the response is not paginated, this property is not included.").optional()
}
```

### getcomments

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get comments from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "as_md": z.boolean().describe("If enabled, will return comments as their markdown equivalents when applicable.").optional()
}
```

### postcomment

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to add comments in. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "message": z.string().describe("The text contents of the comment to post."),
  "comment_id": z.string().describe("The ID of the comment to reply to, if any. This must be a root comment. You cannot reply to other replies (a comment that has a parent_id).").optional(),
  "client_meta": z.object({ "x": z.number().describe("X coordinate of the vector."), "y": z.number().describe("Y coordinate of the vector.") }).describe("A 2d vector.").describe("The position where to place the comment.").optional()
}
```

### deletecomment

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to delete comment from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "comment_id": z.string().describe("Comment id of comment to delete")
}
```

### getcommentreactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get comment containing reactions from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "comment_id": z.string().describe("ID of comment to get reactions from."),
  "cursor": z.string().describe("Cursor for pagination, retrieved from the response of the previous call.").optional()
}
```

### postcommentreaction

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to post comment reactions to. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "comment_id": z.string().describe("ID of comment to react to."),
  "emoji": z.string().describe("The emoji type of reaction as shortcode (e.g. \`:heart:\`, \`:+1::skin-tone-2:\`). The list of accepted emoji shortcodes can be found in [this file](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json) under the top-level emojis and aliases fields, with optional skin tone modifiers when applicable.")
}
```

### deletecommentreaction

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to delete comment reaction from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "comment_id": z.string().describe("ID of comment to delete reaction from."),
  "emoji": z.string().describe("The emoji type of reaction as shortcode (e.g. \`:heart:\`, \`:+1::skin-tone-2:\`). The list of accepted emoji shortcodes can be found in [this file](https://raw.githubusercontent.com/missive/emoji-mart/main/packages/emoji-mart-data/sets/14/native.json) under the top-level emojis and aliases fields, with optional skin tone modifiers when applicable.")
}
```

### getme

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{}
```

### getteamcomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "team_id": z.string().describe("Id of the team to list components from."),
  "page_size": z.number().describe("Number of items to return in a paged list of results. Defaults to 30.").optional(),
  "after": z.number().describe("Cursor indicating which id after which to start retrieving components for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional(),
  "before": z.number().describe("Cursor indicating which id before which to start retrieving components for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional()
}
```

### getfilecomponents

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to list components from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
}
```

### getcomponent

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("The unique identifier of the component.")
}
```

### getteamcomponentsets

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "team_id": z.string().describe("Id of the team to list component sets from."),
  "page_size": z.number().describe("Number of items to return in a paged list of results. Defaults to 30.").optional(),
  "after": z.number().describe("Cursor indicating which id after which to start retrieving component sets for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional(),
  "before": z.number().describe("Cursor indicating which id before which to start retrieving component sets for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional()
}
```

### getfilecomponentsets

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to list component sets from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
}
```

### getcomponentset

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("The unique identifier of the component set.")
}
```

### getteamstyles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "team_id": z.string().describe("Id of the team to list styles from."),
  "page_size": z.number().describe("Number of items to return in a paged list of results. Defaults to 30.").optional(),
  "after": z.number().describe("Cursor indicating which id after which to start retrieving styles for. Exclusive with before. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional(),
  "before": z.number().describe("Cursor indicating which id before which to start retrieving styles for. Exclusive with after. The cursor value is an internally tracked integer that doesn't correspond to any Ids.").optional()
}
```

### getfilestyles

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to list styles from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
}
```

### getstyle

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "key": z.string().describe("The unique identifier of the style.")
}
```

### postwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "event_type": z.enum(["PING","FILE_UPDATE","FILE_VERSION_UPDATE","FILE_DELETE","LIBRARY_PUBLISH","FILE_COMMENT"]).describe("An enum representing the possible events that a webhook can subscribe to"),
  "team_id": z.string().describe("Team id to receive updates about"),
  "endpoint": z.string().describe("The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters."),
  "passcode": z.string().describe("String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters."),
  "status": z.enum(["ACTIVE","PAUSED"]).describe("State of the webhook, including any error state it may be in").optional(),
  "description": z.string().describe("User provided description or name for the webhook. Max length 150 characters.").optional()
}
```

### getwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "webhook_id": z.string().describe("ID of webhook to get")
}
```

### putwebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "webhook_id": z.string().describe("ID of webhook to update"),
  "event_type": z.enum(["PING","FILE_UPDATE","FILE_VERSION_UPDATE","FILE_DELETE","LIBRARY_PUBLISH","FILE_COMMENT"]).describe("An enum representing the possible events that a webhook can subscribe to"),
  "endpoint": z.string().describe("The HTTP endpoint that will receive a POST request when the event triggers. Max length 2048 characters."),
  "passcode": z.string().describe("String that will be passed back to your webhook endpoint to verify that it is being called by Figma. Max length 100 characters."),
  "status": z.enum(["ACTIVE","PAUSED"]).describe("State of the webhook, including any error state it may be in").optional(),
  "description": z.string().describe("User provided description or name for the webhook. Max length 150 characters.").optional()
}
```

### deletewebhook

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "webhook_id": z.string().describe("ID of webhook to delete")
}
```

### getteamwebhooks

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "team_id": z.string().describe("ID of team to get webhooks for")
}
```

### getwebhookrequests

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "webhook_id": z.string().describe("The id of the webhook subscription you want to see events from")
}
```

### getactivitylogs

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

```ts
{
  "events": z.string().describe("Event type(s) to include in the response. Can have multiple values separated by comma. All events are returned by default.").optional(),
  "start_time": z.number().describe("Unix timestamp of the least recent event to include. This param defaults to one year ago if unspecified.").optional(),
  "end_time": z.number().describe("Unix timestamp of the most recent event to include. This param defaults to the current timestamp if unspecified.").optional(),
  "limit": z.number().describe("Maximum number of events to return. This param defaults to 1000 if unspecified.").optional(),
  "order": z.enum(["asc","desc"]).describe("Event order by timestamp. This param can be either \"asc\" (default) or \"desc\".").optional()
}
```

### getpayments

**Environment variables**

- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "plugin_payment_token": z.string().describe("Short-lived token returned from \"getPluginPaymentTokenAsync\" in the plugin payments API and used to authenticate to this endpoint. Read more about generating this token through \"Calling the Payments REST API from a plugin or widget\" below.").optional(),
  "user_id": z.string().describe("The ID of the user to query payment information about. You can get the user ID by having the user OAuth2 to the Figma REST API.").optional(),
  "community_file_id": z.string().describe("The ID of the Community file to query a user's payment information on. You can get the Community file ID from the file's Community page (look for the number after \"file/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional(),
  "plugin_id": z.string().describe("The ID of the plugin to query a user's payment information on. You can get the plugin ID from the plugin's manifest, or from the plugin's Community page (look for the number after \"plugin/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional(),
  "widget_id": z.string().describe("The ID of the widget to query a user's payment information on. You can get the widget ID from the widget's manifest, or from the widget's Community page (look for the number after \"widget/\" in the URL). Provide exactly one of \"community_file_id\", \"plugin_id\", or \"widget_id\".").optional()
}
```

### getlocalvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get variables from. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key.")
}
```

### getpublishedvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to get variables from. This must be a main file key, not a branch key, as it is not possible to publish from branches.")
}
```

### postvariables

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File to modify variables in. This can be a file key or branch key. Use \`GET /v1/files/:key\` with the \`branch_data\` query param to get the branch key."),
  "variableCollections": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable collection."), "id": z.string().describe("A temporary id for this variable collection.").optional(), "name": z.string().describe("The name of this variable collection."), "initialModeId": z.string().describe("The initial mode refers to the mode that is created by default. You can set a temporary id here, in order to reference this mode later in this request.").optional(), "hiddenFromPublishing": z.boolean().describe("Whether this variable collection is hidden when publishing the current file as a library.") }).describe("An object that contains details about creating a \`VariableCollection\`.")).describe("For creating, updating, and deleting variable collections.").optional(),
  "variableModes": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable mode."), "id": z.string().describe("A temporary id for this variable mode.").optional(), "name": z.string().describe("The name of this variable mode."), "variableCollectionId": z.string().describe("The variable collection that will contain the mode. You can use the temporary id of a variable collection.") }).describe("An object that contains details about creating a \`VariableMode\`.")).describe("For creating, updating, and deleting modes within variable collections.").optional(),
  "variables": z.array(z.object({ "action": z.literal("CREATE").describe("The action to perform for the variable."), "id": z.string().describe("A temporary id for this variable.").optional(), "name": z.string().describe("The name of this variable."), "variableCollectionId": z.string().describe("The variable collection that will contain the variable. You can use the temporary id of a variable collection."), "resolvedType": z.enum(["BOOLEAN","FLOAT","STRING","COLOR"]).describe("The resolved type of the variable."), "description": z.string().describe("The description of this variable.").optional(), "hiddenFromPublishing": z.boolean().describe("Whether this variable is hidden when publishing the current file as a library."), "scopes": z.array(z.enum(["ALL_SCOPES","TEXT_CONTENT","CORNER_RADIUS","WIDTH_HEIGHT","GAP","ALL_FILLS","FRAME_FILL","SHAPE_FILL","TEXT_FILL","STROKE_COLOR","STROKE_FLOAT","EFFECT_FLOAT","EFFECT_COLOR","OPACITY","FONT_FAMILY","FONT_STYLE","FONT_WEIGHT","FONT_SIZE","LINE_HEIGHT","LETTER_SPACING","PARAGRAPH_SPACING","PARAGRAPH_INDENT","FONT_VARIATIONS"]).describe("Scopes allow a variable to be shown or hidden in the variable picker for various fields. This declutters the Figma UI if you have a large number of variables. Variable scopes are currently supported on \`FLOAT\`, \`STRING\`, and \`COLOR\` variables.\n\n\`ALL_SCOPES\` is a special scope that means that the variable will be shown in the variable picker for all variable fields. If \`ALL_SCOPES\` is set, no additional scopes can be set.\n\n\`ALL_FILLS\` is a special scope that means that the variable will be shown in the variable picker for all fill fields. If \`ALL_FILLS\` is set, no additional fill scopes can be set.\n\nValid scopes for \`FLOAT\` variables:\n- \`ALL_SCOPES\`\n- \`TEXT_CONTENT\`\n- \`WIDTH_HEIGHT\`\n- \`GAP\`\n- \`STROKE_FLOAT\`\n- \`EFFECT_FLOAT\`\n- \`OPACITY\`\n- \`FONT_WEIGHT\`\n- \`FONT_SIZE\`\n- \`LINE_HEIGHT\`\n- \`LETTER_SPACING\`\n- \`PARAGRAPH_SPACING\`\n- \`PARAGRAPH_INDENT\`\n\nValid scopes for \`STRING\` variables:\n- \`ALL_SCOPES\`\n- \`TEXT_CONTENT\`\n- \`FONT_FAMILY\`\n- \`FONT_STYLE\`\n\nValid scopes for \`COLOR\` variables:\n- \`ALL_SCOPES\`\n- \`ALL_FILLS\`\n- \`FRAME_FILL\`\n- \`SHAPE_FILL\`\n- \`TEXT_FILL\`\n- \`STROKE_COLOR\`\n- \`EFFECT_COLOR\`")).describe("An array of scopes in the UI where this variable is shown. Setting this property will show/hide this variable in the variable picker UI for different fields.").optional(), "codeSyntax": z.object({ "WEB": z.string().optional(), "ANDROID": z.string().optional(), "iOS": z.string().optional() }).describe("An object containing platform-specific code syntax definitions for a variable. All platforms are optional.").optional() }).describe("An object that contains details about creating a \`Variable\`.")).describe("For creating, updating, and deleting variables.").optional(),
  "variableModeValues": z.array(z.object({ "variableId": z.string().describe("The target variable. You can use the temporary id of a variable."), "modeId": z.string().describe("Must correspond to a mode in the variable collection that contains the target variable."), "value": z.boolean().describe("The value for the variable. The value must match the variable's type. If setting to a variable alias, the alias must resolve to this type.") }).describe("An object that represents a value for a given mode of a variable. All properties are required.")).describe("For setting a specific value, given a variable and a mode.").optional()
}
```

### getdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("The file to get the dev resources from. This must be a main file key, not a branch key."),
  "node_ids": z.string().describe("Comma separated list of nodes that you care about in the document. If specified, only dev resources attached to these nodes will be returned. If not specified, all dev resources in the file will be returned.").optional()
}
```

### postdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "dev_resources": z.array(z.object({ "name": z.string().describe("The name of the dev resource."), "url": z.string().describe("The URL of the dev resource."), "file_key": z.string().describe("The file key where the dev resource belongs."), "node_id": z.string().describe("The target node to attach the dev resource to.") })).describe("An array of dev resources.")
}
```

### putdevresources

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "dev_resources": z.array(z.object({ "id": z.string().describe("Unique identifier of the dev resource"), "name": z.string().describe("The name of the dev resource.").optional(), "url": z.string().describe("The URL of the dev resource.").optional() })).describe("An array of dev resources.")
}
```

### deletedevresource

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("The file to delete the dev resource from. This must be a main file key, not a branch key."),
  "dev_resource_id": z.string().describe("The id of the dev resource to delete.")
}
```

### getlibraryanalyticscomponentactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["component","team"]).describe("A dimension to group returned analytics data by."),
  "start_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.").optional(),
  "end_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.").optional()
}
```

### getlibraryanalyticscomponentusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["component","file"]).describe("A dimension to group returned analytics data by.")
}
```

### getlibraryanalyticsstyleactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["style","team"]).describe("A dimension to group returned analytics data by."),
  "start_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.").optional(),
  "end_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.").optional()
}
```

### getlibraryanalyticsstyleusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["style","file"]).describe("A dimension to group returned analytics data by.")
}
```

### getlibraryanalyticsvariableactions

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["variable","team"]).describe("A dimension to group returned analytics data by."),
  "start_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the earliest week to include. Dates are rounded back to the nearest start of a week. Defaults to one year prior.").optional(),
  "end_date": z.string().describe("ISO 8601 date string (YYYY-MM-DD) of the latest week to include. Dates are rounded forward to the nearest end of a week. Defaults to the latest computed week.").optional()
}
```

### getlibraryanalyticsvariableusages

**Environment variables**

- `OAUTH2_TOKEN`
- `X_FIGMA_TOKEN`

**Input schema**

```ts
{
  "file_key": z.string().describe("File key of the library to fetch analytics data for."),
  "cursor": z.string().describe("Cursor indicating what page of data to fetch. Obtained from prior API call.").optional(),
  "group_by": z.enum(["variable","file"]).describe("A dimension to group returned analytics data by.")
}
```
