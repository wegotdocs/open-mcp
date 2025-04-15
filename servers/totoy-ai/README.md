# @open-mcp/totoy-ai

## Installing

Use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add totoy-ai \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=...
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add totoy-ai \
  .cursor/mcp.json \
  --API_KEY=...
```

### Other

```bash
npx @open-mcp/config add totoy-ai \
  /path/to/client/config.json \
  --API_KEY=...
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "totoy-ai": {
      "command": "npx",
      "args": ["-y", "@open-mcp/totoy-ai"],
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
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/totoy-ai
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/totoy-ai`
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

### createexplanation

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "output_language": z.enum(["ar","bs","cs","de","es","en","fa","fr","hr","hu","it","pl","ro","sk","sl","sr","tl","tr","uk","zh"]).describe("The ISO 639-1 code for the language in which the \`Explanation\` should be generated.\nSupported Languages:\n- ar: Arabic\n- bs: Bosnian\n- cs: Czech\n- de: German\n- es: Spanish\n- en: English\n- fa: Farsi\n- fr: French\n- hr: Croatian\n- hu: Hungarian\n- it: Italian\n- pl: Polish\n- ro: Romanian\n- sk: Slovak\n- sl: Slovenian\n- sr: Serbian\n- tl: Tagalog\n- tr: Turkish\n- uk: Ukrainian\n- zh: Mandarin\n"),
  "language_level": z.enum(["simple","plain","detailed"]).describe("One of three language levels for the generated text:\n1. Simple Language: Answers are short and simple, using easy words and a clear structure.\n2. Plain Language: Answers are short and the assistant explains complicated terms.\n3. Detailed Language: Answers are not simplified and the assistant answers in detail.\n"),
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("The unique identifier of the uploaded \`Source\` to be used as context for the \`Explanation\`."),
  "messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The entity that produced the message. One of \`user\` or \`assistant\`."), "content": z.string().max(16000).describe("The content of the message. The maximum length is 16,000 characters."), "references": z.array(z.object({ "text": z.string().max(8).describe("String in the message content that needs to be replaced."), "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("What \`Source\` the generated answer depended on."), "page_number": z.number().int().gte(1).lte(1000).nullable().describe("The page number in the \`Source\` the generated answer depended on. Only applicable for documents.").optional(), "backlink": z.string().max(512).describe("The backlink of the \`Source\`, so it can be called from the client.").optional(), "custom_metadata": z.record(z.any()).describe("Custom optional metadata for a \`Source\` provided by a client. Up to 10 key-value pairs.").optional() }).strict().describe("Represents a reference to a \`Source\` that was used to generate the answer.\nThe reference is used to provide backlinks to the original source and to provide context for the generated answer.\n")).max(50).optional() }).strict().describe("Represents a message within an \`Explanation\` or a \`Knowledge Base Chat\`.\nFor \`Explanations\` - An \`assistant\` message is either an initial \`Explanation\` for the document when no messages were provided in the request or an answer to a user message in the provided conversation history.\n")).max(50).describe("The conversation history. For an initial \`Explanation\` just provide an empty array or no messages. For follow-up questions, provide the entire conversation history.").optional(),
  "markdown_response": z.boolean().describe("Whether the response should be returned as Markdown formatted text. If 'false', the response will be returned in plain text.").optional()
}
```

### createknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().max(256).describe("The name for the \`Knowledge Base\`").optional(),
  "instructions": z.string().max(4096).describe("The instructions for the \`Knowledge Base\`.").optional(),
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("The unique identifier for the \`Project\` that the \`Knowledge Base\` will be assigned to. If no \`project_id\` is provided, the \`Knowledge Base\` will be assigned to the default \`Project\`.").optional()
}
```

### listknowledgebases

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`.")
}
```

### modifyknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`."),
  "name": z.string().max(255).describe("The name for the \`Knowledge Base\`.").optional(),
  "instructions": z.string().max(4096).describe("The instructions for the \`Knowledge Base\`.").optional(),
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("The unique identifier for the \`Project\` that the \`Knowledge Base\` should be assigned to. If the \`project_id\` is changed, the \`project_ids\` of the \`Sources\` that are used as \`Knowledge Base Sources\` will also be changed. If a \`Source\` is used by multiple \`Knowledge Bases\`, then the \`project_id\` of the \`Knowledge Base\` cannot be changed.").optional()
}
```

### deleteknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`.")
}
```

### chatwithknowledgebase

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`."),
  "output_language": z.enum(["ar","bs","cs","de","es","en","fa","fr","hr","hu","it","pl","ro","sk","sl","sr","tl","tr","uk","zh"]).describe("The ISO 639-1 code for the language in which the \`Explanation\` should be generated.\nSupported Languages:\n- ar: Arabic\n- bs: Bosnian\n- cs: Czech\n- de: German\n- es: Spanish\n- en: English\n- fa: Farsi\n- fr: French\n- hr: Croatian\n- hu: Hungarian\n- it: Italian\n- pl: Polish\n- ro: Romanian\n- sk: Slovak\n- sl: Slovenian\n- sr: Serbian\n- tl: Tagalog\n- tr: Turkish\n- uk: Ukrainian\n- zh: Mandarin\n"),
  "language_level": z.enum(["simple","plain","detailed"]).describe("One of three language levels for the generated text:\n1. Simple Language: Answers are short and simple, using easy words and a clear structure.\n2. Plain Language: Answers are short and the assistant explains complicated terms.\n3. Detailed Language: Answers are not simplified and the assistant answers in detail.\n"),
  "messages": z.array(z.object({ "role": z.enum(["user","assistant"]).describe("The entity that produced the message. One of \`user\` or \`assistant\`."), "content": z.string().max(16000).describe("The content of the message. The maximum length is 16,000 characters."), "references": z.array(z.object({ "text": z.string().max(8).describe("String in the message content that needs to be replaced."), "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("What \`Source\` the generated answer depended on."), "page_number": z.number().int().gte(1).lte(1000).nullable().describe("The page number in the \`Source\` the generated answer depended on. Only applicable for documents.").optional(), "backlink": z.string().max(512).describe("The backlink of the \`Source\`, so it can be called from the client.").optional(), "custom_metadata": z.record(z.any()).describe("Custom optional metadata for a \`Source\` provided by a client. Up to 10 key-value pairs.").optional() }).strict().describe("Represents a reference to a \`Source\` that was used to generate the answer.\nThe reference is used to provide backlinks to the original source and to provide context for the generated answer.\n")).max(50).optional() }).strict().describe("Represents a message within an \`Explanation\` or a \`Knowledge Base Chat\`.\nFor \`Explanations\` - An \`assistant\` message is either an initial \`Explanation\` for the document when no messages were provided in the request or an answer to a user message in the provided conversation history.\n")).max(50).describe("The conversation history. Provide at least one user message to start the conversation."),
  "markdown_response": z.boolean().describe("Whether the response should be returned as Markdown formatted text. If 'false', the response will be returned in plain text.").optional()
}
```

### addknowledgebasesources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`.")
}
```

### listknowledgebasesources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`.")
}
```

### getknowledgebasesource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`."),
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy.")
}
```

### deleteknowledgebasesource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "knowledge_base_id": z.string().regex(new RegExp("^kb_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Knowledge Base\`."),
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy.")
}
```

### createsource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "text_content": z.string().max(1000000).describe("Plain-text string to be uploaded to \`Sources\`."),
  "title": z.string().max(512).nullable().describe("Title of the text \`Source\`.").optional(),
  "backlink": z.string().max(512).describe("A url to the text \`Source\` that can be used by clients to link back to the original text.").optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().describe("From what time the \`Source\` can be used by a \`Knowledge Base\` or an \`Explanation\`. If no \`valid_from\` is set, the \`Source\` is valid from the time it is added to \`Sources\`.").optional(),
  "valid_until": z.string().datetime({ offset: true }).nullable().describe("Until when the \`Source\` can be used by a \`Knowledge Base\` or an \`Explanation\`. If no \`valid_until\` is set, the \`Source\` is valid until it is removed from \`Sources\`.").optional(),
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).nullable().describe("The unique identifier of the project this \`Source\` should be assigned to. \`Sources\` can only be used by resources with the same \`project_id\`. If no \`project_id\` is set, the \`Source\` will be assigned to the default project.").optional(),
  "custom_metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustom optional metadata for a \`Source\` provided by a client. Up to 10 key-value pairs.").optional()
}
```

### listsources

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getsource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy.")
}
```

### modifysource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy."),
  "text_content": z.string().max(1000000).describe("Plain-text string to replace the original \`text_content\` of the \`Source\`.").optional(),
  "title": z.string().max(512).describe("Title of the text \`Source\`.").optional(),
  "backlink": z.string().max(512).describe("A url to the text \`Source\` that can be used by clients to link back to the original text.").optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().describe("From what time the \`Source\` can be used by a \`Knowledge Base\` or an \`Explanation\`. If no \`valid_from\` is set, the \`Source\` is valid from the time it is added to \`Sources\`.").optional(),
  "valid_until": z.string().datetime({ offset: true }).nullable().describe("Until when the \`Source\` can be used by a \`Knowledge Base\` or an \`Explanation\`. If no \`valid_until\` is set, the \`Source\` is valid until it is removed from \`Sources\`.").optional(),
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).nullable().describe("The unique identifier of the project this \`Source\` should be assigned to. \`Sources\` can only be used by resources with the same \`project_id\`. If no \`project_id\` is set, the \`Source\` will be assigned to the default project. A \`Source\` can only be assigned to a different \`Project\`, if no \`Knowledge Bases\` are using the \`Source\`.").optional(),
  "custom_metadata": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustom optional metadata for a \`Source\` provided by a client. Up to 10 key-value pairs.").optional()
}
```

### deletesource

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy.")
}
```

### getsourcecontent

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a \`Source\` that was uploaded to Totoy.")
}
```

### createproject

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "name": z.string().max(256).describe("The name of the \`Project\`.")
}
```

### listprojects

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### getproject

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Project\` created in Totoy.")
}
```

### modifyproject

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Project\` created in Totoy."),
  "name": z.string().max(256).describe("The name of the \`Project\`.").optional()
}
```

### deleteproject

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).describe("Unique identifier for a \`Project\` created in Totoy.")
}
```

### getorganization

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{}
```

### createextraction

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.enum(["rre-de-2025-02-14","rre-de-2025-03-31","rre-de-2025-04-07","rre-de"]).describe("The name of the model that will be used for the extraction. A model name without a date is an alias to the latest version of that model, i.e. \`rre-de\` always points to the latest version of \`rre-de\`."),
  "document": z.string().describe("Base64-encoded contents of a document (PDF, JPG or PNG)"),
  "expand_abbreviations": z.boolean().describe("If set to true, the extraction will expand abbreviations in the extracted fields.").optional()
}
```

### createclassification

**Environment variables**

- `API_KEY`

**Input schema**

```ts
{
  "model": z.enum(["rdc-de-2025-02-14","rdc-de"]).describe("The name of the model that will be used for the Classification. A model name without a date is an alias to the latest version of that model, i.e. \`rdc-de\` always points to the latest version of \`rdc-de\`."),
  "document": z.string().describe("Base64-encoded contents of a document (PDF, JPG or PNG)")
}
```
