# @open-mcp/api_stripe_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "api_stripe_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_stripe_com"],
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

### getaccount

### postaccountlinks

### postaccountsessions

### getaccounts

### postaccounts

### deleteaccountsaccount

### getaccountsaccount

### postaccountsaccount

### postaccountsaccountbankaccounts

### deleteaccountsaccountbankaccountsid

### getaccountsaccountbankaccountsid

### postaccountsaccountbankaccountsid

### getaccountsaccountcapabilities

### getaccountsaccountcapabilitiescapability

### postaccountsaccountcapabilitiescapability

### getaccountsaccountexternalaccounts

### postaccountsaccountexternalaccounts

### deleteaccountsaccountexternalaccountsid

### getaccountsaccountexternalaccountsid

### postaccountsaccountexternalaccountsid

### postaccountsaccountloginlinks

### getaccountsaccountpeople

### postaccountsaccountpeople

### deleteaccountsaccountpeopleperson

### getaccountsaccountpeopleperson

### postaccountsaccountpeopleperson

### getaccountsaccountpersons

### postaccountsaccountpersons

### deleteaccountsaccountpersonsperson

### getaccountsaccountpersonsperson

### postaccountsaccountpersonsperson

### postaccountsaccountreject

### getapplepaydomains

### postapplepaydomains

### deleteapplepaydomainsdomain

### getapplepaydomainsdomain

### getapplicationfees

### getapplicationfeesfeerefundsid

### postapplicationfeesfeerefundsid

### getapplicationfeesid

### postapplicationfeesidrefund

### getapplicationfeesidrefunds

### postapplicationfeesidrefunds

### getappssecrets

### postappssecrets

### postappssecretsdelete

### getappssecretsfind

### getbalance

### getbalancehistory

### getbalancehistoryid

### getbalancetransactions

### getbalancetransactionsid

### getbillingalerts

### postbillingalerts

### getbillingalertsid

### postbillingalertsidactivate

### postbillingalertsidarchive

### postbillingalertsiddeactivate

### getbillingcreditbalancesummary

### getbillingcreditbalancetransactions

### getbillingcreditbalancetransactionsid

### getbillingcreditgrants

### postbillingcreditgrants

### getbillingcreditgrantsid

### postbillingcreditgrantsid

### postbillingcreditgrantsidexpire

### postbillingcreditgrantsidvoid

### postbillingmetereventadjustments

### postbillingmeterevents

### getbillingmeters

### postbillingmeters

### getbillingmetersid

### postbillingmetersid

### postbillingmetersiddeactivate

### getbillingmetersideventsummaries

### postbillingmetersidreactivate

### getbillingportalconfigurations

### postbillingportalconfigurations

### getbillingportalconfigurationsconfiguration

### postbillingportalconfigurationsconfiguration

### postbillingportalsessions

### getcharges

### postcharges

### getchargessearch

### getchargescharge

### postchargescharge

### postchargeschargecapture

### getchargeschargedispute

### postchargeschargedispute

### postchargeschargedisputeclose

### postchargeschargerefund

### getchargeschargerefunds

### postchargeschargerefunds

### getchargeschargerefundsrefund

### postchargeschargerefundsrefund

### getcheckoutsessions

### postcheckoutsessions

### getcheckoutsessionssession

### postcheckoutsessionssession

### postcheckoutsessionssessionexpire

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_stripe_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_stripe_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
