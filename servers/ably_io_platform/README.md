# @open-mcp/ably_io_platform

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ably_io_platform": {
      "command": "npx",
      "args": ["-y", "@open-mcp/ably_io_platform"],
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

### getmetadataofallchannels

### parameters_channels

### getmetadataofchannel

### parameters_channels_channel_id_

### getmessagesbychannel

### parameters_channels_channel_id_messages

### publishmessagestochannel

### getpresenceofchannel

### parameters_channels_channel_id_presence

### getpresencehistoryofchannel

### parameters_channels_channel_id_presence_history

### parameters_keys_keyname_requesttoken

### requestaccesstoken

### deletepushdevicedetails

### getpushsubscriptionsonchannels

### parameters_push_channelsubscriptions

### subscribepushdevicetochannel

### getchannelswithpushsubscribers

### parameters_push_channels

### unregisterallpushdevices

### getregisteredpushdevices

### parameters_push_deviceregistrations

### registerpushdevice

### unregisterpushdevice

### getpushdevicedetails

### parameters_push_deviceregistrations_device_id_

### patchpushdevicedetails

### putpushdevicedetails

### updatepushdevicedetails

### parameters_push_deviceregistrations_device_id_resetupdatetoken

### parameters_push_publish

### publishpushnotificationtodevices

### getstats

### parameters_stats

### gettime

### parameters_time

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/ably_io_platform
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/ably_io_platform`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
