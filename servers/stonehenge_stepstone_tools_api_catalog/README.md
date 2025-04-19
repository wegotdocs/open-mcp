# @open-mcp/stonehenge_stepstone_tools_api_catalog

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add stonehenge_stepstone_tools_api_catalog \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add stonehenge_stepstone_tools_api_catalog \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add stonehenge_stepstone_tools_api_catalog \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "stonehenge_stepstone_tools_api_catalog": {
      "command": "npx",
      "args": ["-y", "@open-mcp/stonehenge_stepstone_tools_api_catalog"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/stonehenge_stepstone_tools_api_catalog
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/stonehenge_stepstone_tools_api_catalog`
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

### refreshentity

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "authorizationToken": z.string().optional(),
  "entityRef": z.string().describe("The reference to a single entity that should be refreshed")
}
```

### getentities

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fields": z.array(z.string()).describe("By default the full entities are returned, but you can pass in a \`fields\` query\nparameter which selects what parts of the entity data to retain. This makes the\nresponse smaller and faster to transfer, and may allow the catalog to perform\nmore efficient queries.\n\nThe query parameter value is a comma separated list of simplified JSON paths\nlike above. Each path corresponds to the key of either a value, or of a subtree\nroot that you want to keep in the output. The rest is pruned away. For example,\nspecifying \`?fields=metadata.name,metadata.annotations,spec\` retains only the\n\`name\` and \`annotations\` fields of the \`metadata\` of each entity (it'll be an\nobject with at most two keys), keeps the entire \`spec\` unchanged, and cuts out\nall other roots such as \`relations\`.\n\nSome more real world usable examples:\n\n- Return only enough data to form the full ref of each entity:\n\n  \`/entities/by-query?fields=kind,metadata.namespace,metadata.name\`\n").optional(),
  "limit": z.number().int().gte(0).describe("Number of records to return in the response.").optional(),
  "filter": z.array(z.string()).describe("You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n\`\`\`text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n\`\`\`\n\nEach condition is either on the form \`<key>\`, or on the form \`<key>=<value>\`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string \`true\`\n- Relations can be matched on a \`relations.<type>=<targetRef>\` form\n\nLet's look at a simplified example to illustrate the concept:\n\n\`\`\`json\n{\n  \"a\": {\n    \"b\": [\"c\", { \"d\": 1 }],\n    \"e\": 7\n  }\n}\n\`\`\`\n\nThis would match any one of the following conditions:\n\n- \`a\`\n- \`a.b\`\n- \`a.b.c\`\n- \`a.b.c=true\`\n- \`a.b.d\`\n- \`a.b.d=1\`\n- \`a.e\`\n- \`a.e=7\`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  \`/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true\`\n\n- Return all users and groups:\n\n  \`/entities/by-query?filter=kind=user&filter=kind=group\`\n\n- Return all service components:\n\n  \`/entities/by-query?filter=kind=component,spec.type=service\`\n\n- Return all entities with the \`java\` tag:\n\n  \`/entities/by-query?filter=metadata.tags.java\`\n\n- Return all users who are members of the \`ops\` group (note that the full\n  [reference](references.md) of the group is used):\n\n  \`/entities/by-query?filter=kind=user,relations.memberof=group:default/ops\`\n").optional(),
  "offset": z.number().int().gte(0).describe("Number of records to skip in the query page.").optional(),
  "after": z.string().min(1).describe("Pointer to the previous page of results.").optional(),
  "order": z.array(z.string()).optional()
}
```

### getentitybyuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uid": z.string()
}
```

### deleteentitybyuid

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "uid": z.string()
}
```

### getentitybyname

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "kind": z.string(),
  "namespace": z.string(),
  "name": z.string()
}
```

### getentityancestrybyname

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "kind": z.string(),
  "namespace": z.string(),
  "name": z.string()
}
```

### getentitiesbyrefs

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "filter": z.array(z.string()).describe("You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n\`\`\`text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n\`\`\`\n\nEach condition is either on the form \`<key>\`, or on the form \`<key>=<value>\`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string \`true\`\n- Relations can be matched on a \`relations.<type>=<targetRef>\` form\n\nLet's look at a simplified example to illustrate the concept:\n\n\`\`\`json\n{\n  \"a\": {\n    \"b\": [\"c\", { \"d\": 1 }],\n    \"e\": 7\n  }\n}\n\`\`\`\n\nThis would match any one of the following conditions:\n\n- \`a\`\n- \`a.b\`\n- \`a.b.c\`\n- \`a.b.c=true\`\n- \`a.b.d\`\n- \`a.b.d=1\`\n- \`a.e\`\n- \`a.e=7\`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  \`/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true\`\n\n- Return all users and groups:\n\n  \`/entities/by-query?filter=kind=user&filter=kind=group\`\n\n- Return all service components:\n\n  \`/entities/by-query?filter=kind=component,spec.type=service\`\n\n- Return all entities with the \`java\` tag:\n\n  \`/entities/by-query?filter=metadata.tags.java\`\n\n- Return all users who are members of the \`ops\` group (note that the full\n  [reference](references.md) of the group is used):\n\n  \`/entities/by-query?filter=kind=user,relations.memberof=group:default/ops\`\n").optional(),
  "entityRefs": z.array(z.string()),
  "fields": z.array(z.string()).optional()
}
```

### getentitiesbyquery

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "fields": z.array(z.string()).describe("By default the full entities are returned, but you can pass in a \`fields\` query\nparameter which selects what parts of the entity data to retain. This makes the\nresponse smaller and faster to transfer, and may allow the catalog to perform\nmore efficient queries.\n\nThe query parameter value is a comma separated list of simplified JSON paths\nlike above. Each path corresponds to the key of either a value, or of a subtree\nroot that you want to keep in the output. The rest is pruned away. For example,\nspecifying \`?fields=metadata.name,metadata.annotations,spec\` retains only the\n\`name\` and \`annotations\` fields of the \`metadata\` of each entity (it'll be an\nobject with at most two keys), keeps the entire \`spec\` unchanged, and cuts out\nall other roots such as \`relations\`.\n\nSome more real world usable examples:\n\n- Return only enough data to form the full ref of each entity:\n\n  \`/entities/by-query?fields=kind,metadata.namespace,metadata.name\`\n").optional(),
  "limit": z.number().int().gte(0).describe("Number of records to return in the response.").optional(),
  "offset": z.number().int().gte(0).describe("Number of records to skip in the query page.").optional(),
  "orderField": z.array(z.string().describe("A two-item tuple of [field, order].")).describe("By default the entities are returned ordered by their internal uid. You can\ncustomize the \`orderField\` query parameters to affect that ordering.\n\nFor example, to return entities by their name:\n\n\`/entities/by-query?orderField=metadata.name,asc\`\n\nEach parameter can be followed by \`asc\` for ascending lexicographical order or\n\`desc\` for descending (reverse) lexicographical order.\n").optional(),
  "cursor": z.string().min(1).describe("You may pass the \`cursor\` query parameters to perform cursor based pagination\nthrough the set of entities. The value of \`cursor\` will be returned in the response, under the \`pageInfo\` property:\n\n\`\`\`json\n  \"pageInfo\": {\n    \"nextCursor\": \"a-cursor\",\n    \"prevCursor\": \"another-cursor\"\n  }\n\`\`\`\n\nIf \`nextCursor\` exists, it can be used to retrieve the next batch of entities. Following the same approach,\nif \`prevCursor\` exists, it can be used to retrieve the previous batch of entities.\n\n- [\`filter\`](#filtering), for selecting only a subset of all entities\n- [\`fields\`](#field-selection), for selecting only parts of the full data\n  structure of each entity\n- \`limit\` for limiting the number of entities returned (20 is the default)\n- [\`orderField\`](#ordering), for deciding the order of the entities\n- \`fullTextFilter\`\n  **NOTE**: [\`filter\`, \`orderField\`, \`fullTextFilter\`] and \`cursor\` are mutually exclusive. This means that,\n  it isn't possible to change any of [\`filter\`, \`orderField\`, \`fullTextFilter\`] when passing \`cursor\` as query parameters,\n  as changing any of these properties will affect pagination. If any of \`filter\`, \`orderField\`, \`fullTextFilter\` is specified together with \`cursor\`, only the latter is taken into consideration.\n").optional(),
  "filter": z.array(z.string()).describe("You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n\`\`\`text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n\`\`\`\n\nEach condition is either on the form \`<key>\`, or on the form \`<key>=<value>\`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string \`true\`\n- Relations can be matched on a \`relations.<type>=<targetRef>\` form\n\nLet's look at a simplified example to illustrate the concept:\n\n\`\`\`json\n{\n  \"a\": {\n    \"b\": [\"c\", { \"d\": 1 }],\n    \"e\": 7\n  }\n}\n\`\`\`\n\nThis would match any one of the following conditions:\n\n- \`a\`\n- \`a.b\`\n- \`a.b.c\`\n- \`a.b.c=true\`\n- \`a.b.d\`\n- \`a.b.d=1\`\n- \`a.e\`\n- \`a.e=7\`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  \`/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true\`\n\n- Return all users and groups:\n\n  \`/entities/by-query?filter=kind=user&filter=kind=group\`\n\n- Return all service components:\n\n  \`/entities/by-query?filter=kind=component,spec.type=service\`\n\n- Return all entities with the \`java\` tag:\n\n  \`/entities/by-query?filter=metadata.tags.java\`\n\n- Return all users who are members of the \`ops\` group (note that the full\n  [reference](references.md) of the group is used):\n\n  \`/entities/by-query?filter=kind=user,relations.memberof=group:default/ops\`\n").optional(),
  "fullTextFilterTerm": z.string().describe("Text search term.").optional(),
  "fullTextFilterFields": z.array(z.string()).describe("A comma separated list of fields to sort returned results by.").optional()
}
```

### getentityfacets

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "facet": z.array(z.string()),
  "filter": z.array(z.string()).describe("You can pass in one or more filter sets that get matched against each entity.\nEach filter set is a number of conditions that all have to match for the\ncondition to be true (conditions effectively have an AND between them). At least\none filter set has to be true for the entity to be part of the result set\n(filter sets effectively have an OR between them).\n\nExample:\n\n\`\`\`text\n/entities/by-query?filter=kind=user,metadata.namespace=default&filter=kind=group,spec.type\n\n  Return entities that match\n\n    Filter set 1:\n      Condition 1: kind = user\n                  AND\n      Condition 2: metadata.namespace = default\n\n    OR\n\n    Filter set 2:\n      Condition 1: kind = group\n                  AND\n      Condition 2: spec.type exists\n\`\`\`\n\nEach condition is either on the form \`<key>\`, or on the form \`<key>=<value>\`.\nThe first form asserts on the existence of a certain key (with any value), and\nthe second asserts that the key exists and has a certain value. All checks are\nalways case _insensitive_.\n\nIn all cases, the key is a simplified JSON path in a given piece of entity data.\nEach part of the path is a key of an object, and the traversal also descends\nthrough arrays. There are two special forms:\n\n- Array items that are simple value types (such as strings) match on a key-value\n  pair where the key is the item as a string, and the value is the string \`true\`\n- Relations can be matched on a \`relations.<type>=<targetRef>\` form\n\nLet's look at a simplified example to illustrate the concept:\n\n\`\`\`json\n{\n  \"a\": {\n    \"b\": [\"c\", { \"d\": 1 }],\n    \"e\": 7\n  }\n}\n\`\`\`\n\nThis would match any one of the following conditions:\n\n- \`a\`\n- \`a.b\`\n- \`a.b.c\`\n- \`a.b.c=true\`\n- \`a.b.d\`\n- \`a.b.d=1\`\n- \`a.e\`\n- \`a.e=7\`\n\nSome more real world usable examples:\n\n- Return all orphaned entities:\n\n  \`/entities/by-query?filter=metadata.annotations.backstage.io/orphan=true\`\n\n- Return all users and groups:\n\n  \`/entities/by-query?filter=kind=user&filter=kind=group\`\n\n- Return all service components:\n\n  \`/entities/by-query?filter=kind=component,spec.type=service\`\n\n- Return all entities with the \`java\` tag:\n\n  \`/entities/by-query?filter=metadata.tags.java\`\n\n- Return all users who are members of the \`ops\` group (note that the full\n  [reference](references.md) of the group is used):\n\n  \`/entities/by-query?filter=kind=user,relations.memberof=group:default/ops\`\n").optional()
}
```

### createlocation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "dryRun": z.string().optional(),
  "target": z.string(),
  "type": z.string()
}
```

### getlocations

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getlocation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### deletelocation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "id": z.string()
}
```

### getlocationbyentity

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "kind": z.string(),
  "namespace": z.string(),
  "name": z.string()
}
```

### analyzelocation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "catalogFileName": z.string().optional(),
  "location": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```

### validateentity

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "location": z.string(),
  "entity": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:")
}
```
