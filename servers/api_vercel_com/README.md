# @open-mcp/api_vercel_com

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/api_vercel_com add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/api_vercel_com add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/api_vercel_com add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/api_vercel_com add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_vercel_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_vercel_com"],
      "env": {
        "API_KEY": "..."
      }
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`

## Tools

### readaccessgroup

### updateaccessgroup

### deleteaccessgroup

### listaccessgroupmembers

### listaccessgroups

### createaccessgroup

### listaccessgroupprojects

### createaccessgroupproject

### readaccessgroupproject

### updateaccessgroupproject

### deleteaccessgroupproject

### recordevents

### status

### uploadartifact

### downloadartifact

### artifactexists

### artifactquery

### createcheck

### getallchecks

### getcheck

### updatecheck

### rerequestcheck

### delete_data_cache_purge_all

### patch_data_cache_billing_settings

### updateprojectdatacache

### getdeploymentevents

### update_integration_deployment_action

### getdeployment

### createdeployment

### canceldeployment

### buydomain

### checkdomainprice

### checkdomainstatus

### getrecords

### createrecord

### updaterecord

### removerecord

### getdomaintransfer

### getdomainconfig

### getdomain

### getdomains

### createortransferdomain

### patchdomain

### deletedomain

### getconfigurablelogdrain

### deleteconfigurablelogdrain

### getalllogdrains

### createconfigurablelogdrain

### getedgeconfigs

### createedgeconfig

### getedgeconfig

### updateedgeconfig

### deleteedgeconfig

### getedgeconfigitems

### patchedgeconfigitems

### getedgeconfigschema

### patchedgeconfigschema

### deleteedgeconfigschema

### getedgeconfigitem

### getedgeconfigtokens

### deleteedgeconfigtokens

### getedgeconfigtoken

### createedgeconfigtoken

### getedgeconfigbackup

### getedgeconfigbackups

### listuserevents

### get_account_info

### get_member

### create_event

### submit_billing_data

### submit_invoice

### get_invoice

### update_invoice

### submit_prepayment_balances

### update_resource_secrets

### update_resource_secrets_by_id

### import_resource

### getconfigurations

### getconfiguration

### deleteconfiguration

### exchange_sso_token

### getintegrationlogdrains

### createlogdrain

### deleteintegrationlogdrain

### gitnamespaces

### searchrepo

### get_v1_experimentation_items

### post_v1_installations_integrationconfigurationid_resources_resou

### patch_v1_installations_integrationconfigurationid_resources_reso

### delete_v1_installations_integrationconfigurationid_resources_res

### head_v1_installations_integrationconfigurationid_resources_resou

### put_v1_installations_integrationconfigurationid_resources_resour

### getprojectmembers

### addprojectmember

### removeprojectmember

### getprojects

### createproject

### getproject

### updateproject

### deleteproject

### createcustomenvironment

### get_v9_projects_idorname_custom_environments

### getcustomenvironment

### updatecustomenvironment

### removecustomenvironment

### getprojectdomains

### getprojectdomain

### updateprojectdomain

### removeprojectdomain

### addprojectdomain

### verifyprojectdomain

### filterprojectenvs

### createprojectenv

### getprojectenv

### removeprojectenv

### editprojectenv

### createprojecttransferrequest

### acceptprojecttransferrequest

### updateprojectprotectionbypass

### requestpromote

### listpromotealiases

### pauseproject

### unpauseproject

### updateattackchallengemode

### putfirewallconfig

### updatefirewallconfig

### getfirewallconfig

### getactiveattackstatus

### getbypassip

### addbypassip

### removebypassip

### getteammembers

### inviteusertoteam

### requestaccesstoteam

### getteamaccessrequest

### jointeam

### updateteammember

### removeteammember

### getteam

### patchteam

### getteams

### createteam

### deleteteam

### deleteteaminvitecode

### uploadfile

### listauthtokens

### createauthtoken

### getauthtoken

### deleteauthtoken

### getauthuser

### requestdelete

### createwebhook

### getwebhooks

### getwebhook

### deletewebhook

### listdeploymentaliases

### assignalias

### listaliases

### getalias

### deletealias

### get_certs

### getcertbyid

### removecert

### issuecert

### uploadcert

### listdeploymentfiles

### getdeploymentfilecontents

### getdeployments

### deletedeployment

### getsecrets

### createsecret

### renamesecret

### getsecret

### deletesecret

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_vercel_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_vercel_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
