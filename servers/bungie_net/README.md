# @open-mcp/bungie_net

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "bungie_net": {
      "command": "npx",
      "args": ["-y", "@open-mcp/bungie_net"],
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

### app_getapplicationapiusage

### app_getbungieapplications

### communitycontent_getcommunitycontent

### content_getcontentbyid

### content_getcontentbytagandtype

### content_getcontenttype

### content_rssnewsarticles

### content_searchcontentwithtext

### content_searchcontentbytagandtype

### content_searchhelparticles

### destiny2_equipitem

### destiny2_equipitems

### destiny2_insertsocketplug

### destiny2_insertsocketplugfree

### destiny2_pullfrompostmaster

### destiny2_setitemlockstate

### destiny2_setquesttrackedstate

### destiny2_transferitem

### destiny2_clearloadout

### destiny2_equiploadout

### destiny2_snapshotloadout

### destiny2_updateloadoutidentifiers

### destiny2_searchdestinyentities

### destiny2_awaprovideauthorizationresult

### destiny2_awagetactiontoken

### destiny2_awainitializerequest

### destiny2_getclanbannersource

### destiny2_getclanweeklyrewardstate

### destiny2_getdestinymanifest

### destiny2_getdestinyentitydefinition

### destiny2_getpublicmilestones

### destiny2_getpublicmilestonecontent

### destiny2_searchdestinyplayerbybungiename

### destiny2_getclanaggregatestats

### destiny2_gethistoricalstatsdefinition

### destiny2_getclanleaderboards

### destiny2_getleaderboardsforcharacter

### destiny2_getpostgamecarnagereport

### destiny2_reportoffensivepostgamecarnagereportplayer

### destiny2_getpublicvendors

### destiny2_gethistoricalstats

### destiny2_getactivityhistory

### destiny2_getdestinyaggregateactivitystats

### destiny2_getuniqueweaponhistory

### destiny2_gethistoricalstatsforaccount

### destiny2_getleaderboards

### destiny2_getprofile

### destiny2_getcharacter

### destiny2_getcollectiblenodedetails

### destiny2_getvendors

### destiny2_getvendor

### destiny2_getitem

### destiny2_getlinkedprofiles

### fireteam_getactiveprivateclanfireteamcount

### fireteam_getavailableclanfireteams

### fireteam_getmyclanfireteams

### fireteam_getclanfireteam

### fireteam_searchpublicavailableclanfireteams

### forum_getcoretopicspaged

### forum_getforumtagsuggestions

### forum_getpostandparent

### forum_getpostandparentawaitingapproval

### forum_getpoststhreadedpaged

### forum_getpoststhreadedpagedfromchild

### forum_gettopicforcontent

### forum_gettopicspaged

### forum_getpoll

### forum_getrecruitmentthreadsummaries

### _getavailablelocales

### _getglobalalerts

### groupv2_getavailableavatars

### groupv2_getavailablethemes

### groupv2_getuserclaninvitesetting

### groupv2_getgroupbyname

### groupv2_getgroupbynamev2

### groupv2_getrecommendedgroups

### groupv2_recovergroupforfounder

### groupv2_groupsearch

### groupv2_getpotentialgroupsformember

### groupv2_getgroupsformember

### groupv2_getgroup

### groupv2_abdicatefoundership

### groupv2_getadminsandfounderofgroup

### groupv2_getbannedmembersofgroup

### groupv2_editgroup

### groupv2_editclanbanner

### groupv2_editfounderoptions

### groupv2_getmembersofgroup

### groupv2_approvepending

### groupv2_approveallpending

### groupv2_approvependingforlist

### groupv2_denyallpending

### groupv2_denypendingforlist

### groupv2_individualgroupinvite

### groupv2_individualgroupinvitecancel

### groupv2_getinvitedindividuals

### groupv2_getpendingmemberships

### groupv2_banmember

### groupv2_kickmember

### groupv2_editgroupmembership

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/bungie_net
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/bungie_net`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
