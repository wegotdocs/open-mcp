# @open-mcp/healthcare_gov

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "healthcare_gov": {
      "command": "npx",
      "args": ["-y", "@open-mcp/healthcare_gov"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Environment variables

- `API_KEY`

## Tools

### get_api_articles_mediatypeextension_

### get_api_blog_mediatypeextension_

### get_api_glossary_mediatypeextension_

### get_api_questions_mediatypeextension_

### get_api_states_mediatypeextension_

### get_api_topics_mediatypeextension_

### get_blog_pagename_mediatypeextension_

### get_es_blog_pagename_mediatypeextension_

### get_es_glossary_pagename_mediatypeextension_

### get_es_question_pagename_mediatypeextension_

### get_es_pagename_mediatypeextension_

### get_es_statename_mediatypeextension_

### get_glossary_pagename_mediatypeextension_

### get_question_pagename_mediatypeextension_

### get_pagename_mediatypeextension_

### get_statename_mediatypeextension_

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/healthcare_gov
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/healthcare_gov`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
