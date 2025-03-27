# @open-mcp/api_twitter_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_twitter_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_twitter_com"],
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

### listbatchcompliancejobs

### createbatchcompliancejob

### getbatchcompliancejob

### dmconversationidcreate

### getdmconversationswithparticipantiddmevents

### dmconversationwithusereventidcreate

### dmconversationbyideventidcreate

### getdmconversationsiddmevents

### getdmevents

### listidcreate

### listiddelete

### listidget

### listidupdate

### listgetfollowers

### listgetmembers

### listaddmember

### listremovemember

### listsidtweets

### getopenapispec

### findspacesbyids

### findspacesbycreatorids

### searchspaces

### findspacebyid

### spacebuyers

### spacetweets

### findtweetsbyid

### createtweet

### gettweetscompliancestream

### tweetcountsfullarchivesearch

### tweetcountsrecentsearch

### gettweetsfirehosestream

### gettweetslabelstream

### samplestream

### gettweetssample10stream

### tweetsfullarchivesearch

### tweetsrecentsearch

### searchstream

### getrules

### addordeleterules

### deletetweetbyid

### findtweetbyid

### tweetsidlikingusers

### findtweetsthatquoteatweet

### tweetsidretweetingusers

### hidereplybyid

### findusersbyid

### findusersbyusername

### finduserbyusername

### getuserscompliancestream

### findmyuser

### finduserbyid

### usersidblocking

### usersidblock

### getusersidbookmarks

### postusersidbookmarks

### usersidbookmarksdelete

### userfollowedlists

### listuserfollow

### listuserunfollow

### usersidfollowers

### usersidfollowing

### usersidfollow

### usersidlikedtweets

### usersidlike

### usersidunlike

### getuserlistmemberships

### usersidmentions

### usersidmuting

### usersidmute

### listuserownedlists

### listuserpinnedlists

### listuserpin

### listuserunpin

### usersidretweets

### usersidunretweets

### usersidtimeline

### usersidtweets

### usersidunblock

### usersidunfollow

### usersidunmute

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_twitter_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_twitter_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
