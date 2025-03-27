# @open-mcp/nexmo_com_conversation

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "nexmo_com_conversation": {
      "command": "npx",
      "args": ["-y", "@open-mcp/nexmo_com_conversation"],
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

### listconversations

### createconversation

### deleteconversation

### retrieveconversation

### parameters_conversations_conversation_id_

### replaceconversation

### getevents

### parameters_conversations_conversation_id_events

### createevent

### deleteevent

### getevent

### parameters_conversations_conversation_id_events_event_id_

### getmembers

### parameters_conversations_conversation_id_members

### createmember

### deletemember

### getmember

### parameters_conversations_conversation_id_members_member_id_

### updatemember

### parameters_conversations_conversation_id_record

### recordconversation

### servers_conversations_conversation_id_record

### listlegs

### deleteleg

### parameters_legs_leg_id_

### getusers

### createuser

### deleteuser

### getuser

### parameters_users_user_id_

### updateuser

### getuserconversations

### parameters_users_user_id_conversations

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/nexmo_com_conversation
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/nexmo_com_conversation`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
