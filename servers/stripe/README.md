# @open-mcp/stripe

## Installing

First set the environment variables as shell variables:

```bash
API_KEY='...'
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add stripe \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add stripe \
  .cursor/mcp.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add stripe \
  /path/to/client/config.json \
  --API_KEY=$API_KEY \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@open-mcp/stripe"],
      "env": {"API_KEY":"...","USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/stripe
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/stripe`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### getaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)

### postaccountlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### postaccountsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `expand` (array)

### postaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### postaccountsaccountbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### deleteaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)

### getaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)
- `expand` (array)

### postaccountsaccountbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)

### getaccountsaccountcapabilities

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `expand` (array)

### getaccountsaccountcapabilitiescapability

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `capability` (string)
- `expand` (array)

### postaccountsaccountcapabilitiescapability

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `capability` (string)

### getaccountsaccountexternalaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `object` (string)
- `starting_after` (string)

### postaccountsaccountexternalaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### deleteaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)

### getaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)
- `expand` (array)

### postaccountsaccountexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `id` (string)

### postaccountsaccountloginlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getaccountsaccountpeople

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `relationship` (object)
- `starting_after` (string)

### postaccountsaccountpeople

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### deleteaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)

### getaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)
- `expand` (array)

### postaccountsaccountpeopleperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)

### getaccountsaccountpersons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `relationship` (object)
- `starting_after` (string)

### postaccountsaccountpersons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### deleteaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)

### getaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)
- `expand` (array)

### postaccountsaccountpersonsperson

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `person` (string)

### postaccountsaccountreject

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getapplepaydomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `domain_name` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postapplepaydomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteapplepaydomainsdomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `domain` (string)

### getapplepaydomainsdomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `domain` (string)
- `expand` (array)

### getapplicationfees

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getapplicationfeesfeerefundsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fee` (string)
- `id` (string)
- `expand` (array)

### postapplicationfeesfeerefundsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `fee` (string)
- `id` (string)

### getapplicationfeesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postapplicationfeesidrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getapplicationfeesidrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postapplicationfeesidrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getappssecrets

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `scope` (object)
- `starting_after` (string)

### postappssecrets

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### postappssecretsdelete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getappssecretsfind

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `name` (string)
- `scope` (object)

### getbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)

### getbalancehistory

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `currency` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payout` (string)
- `source` (string)
- `starting_after` (string)
- `type` (string)

### getbalancehistoryid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `currency` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payout` (string)
- `source` (string)
- `starting_after` (string)
- `type` (string)

### getbalancetransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getbillingalerts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alert_type` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `meter` (string)
- `starting_after` (string)

### postbillingalerts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbillingalertsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postbillingalertsidactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingalertsidarchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingalertsiddeactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getbillingcreditbalancesummary

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `expand` (array)
- `filter` (object)

### getbillingcreditbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit_grant` (string)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getbillingcreditbalancetransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getbillingcreditgrants

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postbillingcreditgrants

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbillingcreditgrantsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postbillingcreditgrantsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingcreditgrantsidexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingcreditgrantsidvoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingmetereventadjustments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### postbillingmeterevents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbillingmeters

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### postbillingmeters

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbillingmetersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postbillingmetersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postbillingmetersiddeactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getbillingmetersideventsummaries

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `customer` (string)
- `end_time` (integer)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `start_time` (integer)
- `starting_after` (string)
- `value_grouping_window` (string)

### postbillingmetersidreactivate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getbillingportalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `ending_before` (string)
- `expand` (array)
- `is_default` (boolean)
- `limit` (integer)
- `starting_after` (string)

### postbillingportalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getbillingportalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)
- `expand` (array)

### postbillingportalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)

### postbillingportalsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcharges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_intent` (string)
- `starting_after` (string)
- `transfer_group` (string)

### postcharges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getchargessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### getchargescharge

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `expand` (array)

### postchargescharge

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### postchargeschargecapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### getchargeschargedispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `expand` (array)

### postchargeschargedispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### postchargeschargedisputeclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### postchargeschargerefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### getchargeschargerefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postchargeschargerefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)

### getchargeschargerefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `refund` (string)
- `expand` (array)

### postchargeschargerefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `refund` (string)

### getcheckoutsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `customer_details` (object)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_intent` (string)
- `payment_link` (string)
- `starting_after` (string)
- `status` (string)
- `subscription` (string)

### postcheckoutsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcheckoutsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)
- `expand` (array)

### postcheckoutsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)

### postcheckoutsessionssessionexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)

### getcheckoutsessionssessionlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getclimateorders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postclimateorders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getclimateordersorder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order` (string)
- `expand` (array)

### postclimateordersorder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order` (string)

### postclimateordersordercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `order` (string)

### getclimateproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getclimateproductsproduct

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (string)
- `expand` (array)

### getclimatesuppliers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getclimatesupplierssupplier

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `supplier` (string)
- `expand` (array)

### getconfirmationtokensconfirmationtoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `confirmation_token` (string)
- `expand` (array)

### getcountryspecs

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getcountryspecscountry

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `country` (string)
- `expand` (array)

### getcoupons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcoupons

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletecouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon` (string)

### getcouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon` (string)
- `expand` (array)

### postcouponscoupon

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `coupon` (string)

### getcreditnotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `invoice` (string)
- `limit` (integer)
- `starting_after` (string)

### postcreditnotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcreditnotespreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `amount` (integer)
- `credit_amount` (integer)
- `effective_at` (integer)
- `email_type` (string)
- `expand` (array)
- `invoice` (string)
- `lines` (array)
- `memo` (string)
- `metadata` (object)
- `out_of_band_amount` (integer)
- `reason` (string)
- `refund_amount` (integer)
- `refunds` (array)
- `shipping_cost` (object)

### getcreditnotespreviewlines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `amount` (integer)
- `credit_amount` (integer)
- `effective_at` (integer)
- `email_type` (string)
- `ending_before` (string)
- `expand` (array)
- `invoice` (string)
- `limit` (integer)
- `lines` (array)
- `memo` (string)
- `metadata` (object)
- `out_of_band_amount` (integer)
- `reason` (string)
- `refund_amount` (integer)
- `refunds` (array)
- `shipping_cost` (object)
- `starting_after` (string)

### getcreditnotescreditnotelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit_note` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getcreditnotesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postcreditnotesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postcreditnotesidvoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postcustomersessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcustomers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `email` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `test_clock` (string)

### postcustomers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getcustomerssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### deletecustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `expand` (array)

### postcustomerscustomer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomerbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcustomerscustomerbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomerbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `transaction` (string)
- `expand` (array)

### postcustomerscustomerbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `transaction` (string)

### getcustomerscustomerbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcustomerscustomerbankaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### deletecustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)
- `expand` (array)

### postcustomerscustomerbankaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### postcustomerscustomerbankaccountsidverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomercards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcustomerscustomercards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### deletecustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)
- `expand` (array)

### postcustomerscustomercardsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomercashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `expand` (array)

### postcustomerscustomercashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomercashbalancetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getcustomerscustomercashbalancetransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `transaction` (string)
- `expand` (array)

### deletecustomerscustomerdiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomerdiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `expand` (array)

### postcustomerscustomerfundinginstructions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### getcustomerscustomerpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `allow_redisplay` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `type` (string)

### getcustomerscustomerpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `payment_method` (string)
- `expand` (array)

### getcustomerscustomersources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `object` (string)
- `starting_after` (string)

### postcustomerscustomersources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### deletecustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)
- `expand` (array)

### postcustomerscustomersourcesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### postcustomerscustomersourcesidverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomersubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcustomerscustomersubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### deletecustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `subscription_exposed_id` (string)

### getcustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `subscription_exposed_id` (string)
- `expand` (array)

### postcustomerscustomersubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `subscription_exposed_id` (string)

### deletecustomerscustomersubscriptionssubscriptionexposediddiscoun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `subscription_exposed_id` (string)

### getcustomerscustomersubscriptionssubscriptionexposediddiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `subscription_exposed_id` (string)
- `expand` (array)

### getcustomerscustomertaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postcustomerscustomertaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### deletecustomerscustomertaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)

### getcustomerscustomertaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `id` (string)
- `expand` (array)

### getdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_intent` (string)
- `starting_after` (string)

### getdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)
- `expand` (array)

### postdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)

### postdisputesdisputeclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)

### getentitlementsactiveentitlements

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getentitlementsactiveentitlementsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getentitlementsfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `archived` (boolean)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `lookup_key` (string)
- `starting_after` (string)

### postentitlementsfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getentitlementsfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postentitlementsfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### postephemeralkeys

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteephemeralkeyskey

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `key` (string)

### getevents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `delivery_success` (boolean)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `type` (string)
- `types` (array)

### geteventsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getexchangerates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getexchangeratesrateid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `rate_id` (string)
- `expand` (array)

### postexternalaccountsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getfilelinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `expired` (boolean)
- `file` (string)
- `limit` (integer)
- `starting_after` (string)

### postfilelinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getfilelinkslink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `link` (string)
- `expand` (array)

### postfilelinkslink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `link` (string)

### getfiles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `purpose` (string)
- `starting_after` (string)

### postfiles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getfilesfile

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `file` (string)
- `expand` (array)

### getfinancialconnectionsaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account_holder` (object)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `session` (string)
- `starting_after` (string)

### getfinancialconnectionsaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `expand` (array)

### postfinancialconnectionsaccountsaccountdisconnect

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getfinancialconnectionsaccountsaccountowners

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `ownership` (string)
- `starting_after` (string)

### postfinancialconnectionsaccountsaccountrefresh

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### postfinancialconnectionsaccountsaccountsubscribe

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### postfinancialconnectionsaccountsaccountunsubscribe

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### postfinancialconnectionssessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getfinancialconnectionssessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)
- `expand` (array)

### getfinancialconnectionstransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `transacted_at` (other)
- `transaction_refresh` (object)

### getfinancialconnectionstransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)
- `expand` (array)

### getforwardingrequests

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (object)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postforwardingrequests

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getforwardingrequestsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getidentityverificationreports

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `client_reference_id` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `type` (string)
- `verification_session` (string)

### getidentityverificationreportsreport

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `report` (string)
- `expand` (array)

### getidentityverificationsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `client_reference_id` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `related_customer` (string)
- `starting_after` (string)
- `status` (string)

### postidentityverificationsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getidentityverificationsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)
- `expand` (array)

### postidentityverificationsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)

### postidentityverificationsessionssessioncancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)

### postidentityverificationsessionssessionredact

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)

### getinvoicepayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `invoice` (string)
- `limit` (integer)
- `payment` (object)
- `starting_after` (string)
- `status` (string)

### getinvoicepaymentsinvoicepayment

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice_payment` (string)
- `expand` (array)

### getinvoicerenderingtemplates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### getinvoicerenderingtemplatestemplate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `template` (string)
- `expand` (array)
- `version` (integer)

### postinvoicerenderingtemplatestemplatearchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `template` (string)

### postinvoicerenderingtemplatestemplateunarchive

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `template` (string)

### getinvoiceitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `invoice` (string)
- `limit` (integer)
- `pending` (boolean)
- `starting_after` (string)

### postinvoiceitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoiceitem` (string)

### getinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoiceitem` (string)
- `expand` (array)

### postinvoiceitemsinvoiceitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoiceitem` (string)

### getinvoices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `collection_method` (string)
- `created` (other)
- `customer` (string)
- `due_date` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)
- `subscription` (string)

### postinvoices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### postinvoicescreatepreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getinvoicessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### deleteinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### getinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)
- `expand` (array)

### postinvoicesinvoice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoiceaddlines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoicefinalize

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### getinvoicesinvoicelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postinvoicesinvoicelineslineitemid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)
- `line_item_id` (string)

### postinvoicesinvoicemarkuncollectible

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoicepay

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoiceremovelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoicesend

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoiceupdatelines

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### postinvoicesinvoicevoid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `invoice` (string)

### getissuingauthorizations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)
- `cardholder` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### getissuingauthorizationsauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)
- `expand` (array)

### postissuingauthorizationsauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### postissuingauthorizationsauthorizationapprove

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### postissuingauthorizationsauthorizationdecline

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### getissuingcardholders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `email` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `phone_number` (string)
- `starting_after` (string)
- `status` (string)
- `type` (string)

### postissuingcardholders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getissuingcardholderscardholder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cardholder` (string)
- `expand` (array)

### postissuingcardholderscardholder

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cardholder` (string)

### getissuingcards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `cardholder` (string)
- `created` (other)
- `ending_before` (string)
- `exp_month` (integer)
- `exp_year` (integer)
- `expand` (array)
- `last4` (string)
- `limit` (integer)
- `personalization_design` (string)
- `starting_after` (string)
- `status` (string)
- `type` (string)

### postissuingcards

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getissuingcardscard

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)
- `expand` (array)

### postissuingcardscard

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### getissuingdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)
- `transaction` (string)

### postissuingdisputes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getissuingdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)
- `expand` (array)

### postissuingdisputesdispute

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)

### postissuingdisputesdisputesubmit

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `dispute` (string)

### getissuingpersonalizationdesigns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `lookup_keys` (array)
- `preferences` (object)
- `starting_after` (string)
- `status` (string)

### postissuingpersonalizationdesigns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getissuingpersonalizationdesignspersonalizationdesign

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `personalization_design` (string)
- `expand` (array)

### postissuingpersonalizationdesignspersonalizationdesign

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `personalization_design` (string)

### getissuingphysicalbundles

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)
- `type` (string)

### getissuingphysicalbundlesphysicalbundle

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `physical_bundle` (string)
- `expand` (array)

### getissuingsettlementssettlement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `settlement` (string)
- `expand` (array)

### postissuingsettlementssettlement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `settlement` (string)

### getissuingtokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### getissuingtokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)
- `expand` (array)

### postissuingtokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)

### getissuingtransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)
- `cardholder` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `type` (string)

### getissuingtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)
- `expand` (array)

### postissuingtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)

### postlinkaccountsessions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getlinkaccountsessionssession

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `session` (string)
- `expand` (array)

### getlinkedaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account_holder` (object)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `session` (string)
- `starting_after` (string)

### getlinkedaccountsaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `expand` (array)

### postlinkedaccountsaccountdisconnect

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getlinkedaccountsaccountowners

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `ownership` (string)
- `starting_after` (string)

### postlinkedaccountsaccountrefresh

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `account` (string)

### getmandatesmandate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `mandate` (string)
- `expand` (array)

### getpaymentintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postpaymentintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpaymentintentssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### getpaymentintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)
- `client_secret` (string)
- `expand` (array)

### postpaymentintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentapplycustomerbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentcapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentconfirm

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentincrementauthorization

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postpaymentintentsintentverifymicrodeposits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### getpaymentlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postpaymentlinks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpaymentlinkspaymentlink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_link` (string)
- `expand` (array)

### postpaymentlinkspaymentlink

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_link` (string)

### getpaymentlinkspaymentlinklineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_link` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getpaymentmethodconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `application` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postpaymentmethodconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpaymentmethodconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)
- `expand` (array)

### postpaymentmethodconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)

### getpaymentmethoddomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `domain_name` (string)
- `enabled` (boolean)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postpaymentmethoddomains

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpaymentmethoddomainspaymentmethoddomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method_domain` (string)
- `expand` (array)

### postpaymentmethoddomainspaymentmethoddomain

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method_domain` (string)

### postpaymentmethoddomainspaymentmethoddomainvalidate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method_domain` (string)

### getpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `type` (string)

### postpaymentmethods

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method` (string)
- `expand` (array)

### postpaymentmethodspaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method` (string)

### postpaymentmethodspaymentmethodattach

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method` (string)

### postpaymentmethodspaymentmethoddetach

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payment_method` (string)

### getpayouts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `arrival_date` (other)
- `created` (other)
- `destination` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### postpayouts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpayoutspayout

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payout` (string)
- `expand` (array)

### postpayoutspayout

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payout` (string)

### postpayoutspayoutcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payout` (string)

### postpayoutspayoutreverse

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `payout` (string)

### getplans

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `product` (string)
- `starting_after` (string)

### postplans

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `plan` (string)

### getplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `plan` (string)
- `expand` (array)

### postplansplan

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `plan` (string)

### getprices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `created` (other)
- `currency` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `lookup_keys` (array)
- `product` (string)
- `recurring` (object)
- `starting_after` (string)
- `type` (string)

### postprices

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpricessearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### getpricesprice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `price` (string)
- `expand` (array)

### postpricesprice

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `price` (string)

### getproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `ids` (array)
- `limit` (integer)
- `shippable` (boolean)
- `starting_after` (string)
- `url` (string)

### postproducts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getproductssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### deleteproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### postproductsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getproductsproductfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postproductsproductfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `product` (string)

### deleteproductsproductfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `product` (string)

### getproductsproductfeaturesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `product` (string)
- `expand` (array)

### getpromotioncodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `code` (string)
- `coupon` (string)
- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postpromotioncodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getpromotioncodespromotioncode

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `promotion_code` (string)
- `expand` (array)

### postpromotioncodespromotioncode

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `promotion_code` (string)

### getquotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)
- `test_clock` (string)

### postquotes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getquotesquote

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)
- `expand` (array)

### postquotesquote

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)

### postquotesquoteaccept

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)

### postquotesquotecancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)

### getquotesquotecomputedupfrontlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postquotesquotefinalize

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)

### getquotesquotelineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getquotesquotepdf

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `quote` (string)
- `expand` (array)

### getradarearlyfraudwarnings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_intent` (string)
- `starting_after` (string)

### getradarearlyfraudwarningsearlyfraudwarning

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `early_fraud_warning` (string)
- `expand` (array)

### getradarvaluelistitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `value` (string)
- `value_list` (string)

### postradarvaluelistitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteradarvaluelistitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item` (string)

### getradarvaluelistitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item` (string)
- `expand` (array)

### getradarvaluelists

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `alias` (string)
- `contains` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postradarvaluelists

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `value_list` (string)

### getradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `value_list` (string)
- `expand` (array)

### postradarvaluelistsvaluelist

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `value_list` (string)

### getrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `charge` (string)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_intent` (string)
- `starting_after` (string)

### postrefunds

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getrefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `refund` (string)
- `expand` (array)

### postrefundsrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `refund` (string)

### postrefundsrefundcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `refund` (string)

### getreportingreportruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postreportingreportruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getreportingreportrunsreportrun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `report_run` (string)
- `expand` (array)

### getreportingreporttypes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)

### getreportingreporttypesreporttype

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `report_type` (string)
- `expand` (array)

### getreviews

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getreviewsreview

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `review` (string)
- `expand` (array)

### postreviewsreviewapprove

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `review` (string)

### getsetupattempts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `setup_intent` (string)
- `starting_after` (string)

### getsetupintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `attach_to_self` (boolean)
- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `payment_method` (string)
- `starting_after` (string)

### postsetupintents

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getsetupintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)
- `client_secret` (string)
- `expand` (array)

### postsetupintentsintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postsetupintentsintentcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postsetupintentsintentconfirm

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### postsetupintentsintentverifymicrodeposits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `intent` (string)

### getshippingrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `created` (other)
- `currency` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postshippingrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getshippingratesshippingratetoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `shipping_rate_token` (string)
- `expand` (array)

### postshippingratesshippingratetoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `shipping_rate_token` (string)

### postsigmasavedqueriesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### getsigmascheduledqueryruns

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getsigmascheduledqueryrunsscheduledqueryrun

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `scheduled_query_run` (string)
- `expand` (array)

### postsources

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getsourcessource

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `source` (string)
- `client_secret` (string)
- `expand` (array)

### postsourcessource

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `source` (string)

### getsourcessourcemandatenotificationsmandatenotification

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `mandate_notification` (string)
- `source` (string)
- `expand` (array)

### getsourcessourcesourcetransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `source` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### getsourcessourcesourcetransactionssourcetransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `source` (string)
- `source_transaction` (string)
- `expand` (array)

### postsourcessourceverify

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `source` (string)

### getsubscriptionitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `subscription` (string)

### postsubscriptionitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletesubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item` (string)

### getsubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item` (string)
- `expand` (array)

### postsubscriptionitemsitem

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `item` (string)

### getsubscriptionschedules

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `canceled_at` (other)
- `completed_at` (other)
- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `released_at` (other)
- `scheduled` (boolean)
- `starting_after` (string)

### postsubscriptionschedules

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getsubscriptionschedulesschedule

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schedule` (string)
- `expand` (array)

### postsubscriptionschedulesschedule

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schedule` (string)

### postsubscriptionschedulesschedulecancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schedule` (string)

### postsubscriptionschedulesschedulerelease

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `schedule` (string)

### getsubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `automatic_tax` (object)
- `collection_method` (string)
- `created` (other)
- `current_period_end` (other)
- `current_period_start` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `price` (string)
- `starting_after` (string)
- `status` (string)
- `test_clock` (string)

### postsubscriptions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getsubscriptionssearch

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)
- `limit` (integer)
- `page` (string)
- `query` (string)

### deletesubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription_exposed_id` (string)

### getsubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription_exposed_id` (string)
- `expand` (array)

### postsubscriptionssubscriptionexposedid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription_exposed_id` (string)

### deletesubscriptionssubscriptionexposediddiscount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription_exposed_id` (string)

### postsubscriptionssubscriptionresume

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `subscription` (string)

### posttaxcalculations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettaxcalculationscalculation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `calculation` (string)
- `expand` (array)

### gettaxcalculationscalculationlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `calculation` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### gettaxregistrations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### posttaxregistrations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettaxregistrationsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### posttaxregistrationsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### gettaxsettings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `expand` (array)

### posttaxsettings

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttaxtransactionscreatefromcalculation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttaxtransactionscreatereversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettaxtransactionstransaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)
- `expand` (array)

### gettaxtransactionstransactionlineitems

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### gettaxcodes

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### gettaxcodesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### gettaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `owner` (object)
- `starting_after` (string)

### posttaxids

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletetaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### gettaxidsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### gettaxrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `active` (boolean)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `inclusive` (boolean)
- `limit` (integer)
- `starting_after` (string)

### posttaxrates

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettaxratestaxrate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tax_rate` (string)
- `expand` (array)

### posttaxratestaxrate

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `tax_rate` (string)

### getterminalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `is_account_default` (boolean)
- `limit` (integer)
- `starting_after` (string)

### postterminalconfigurations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)

### getterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)
- `expand` (array)

### postterminalconfigurationsconfiguration

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `configuration` (string)

### postterminalconnectiontokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### getterminallocations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postterminallocations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)

### getterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)
- `expand` (array)

### postterminallocationslocation

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `location` (string)

### getterminalreaders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `device_type` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `location` (string)
- `serial_number` (string)
- `starting_after` (string)
- `status` (string)

### postterminalreaders

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deleteterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### getterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)
- `expand` (array)

### postterminalreadersreader

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### postterminalreadersreadercancelaction

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### postterminalreadersreaderprocesspaymentintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### postterminalreadersreaderprocesssetupintent

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### postterminalreadersreaderrefundpayment

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### postterminalreadersreadersetreaderdisplay

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### posttesthelpersconfirmationtokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelperscustomerscustomerfundcashbalance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `customer` (string)

### posttesthelpersissuingauthorizations

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelpersissuingauthorizationsauthorizationcapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingauthorizationsauthorizationexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingauthorizationsauthorizationfinalizeamount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingauthorizationsauthorizationfraudchallenges

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingauthorizationsauthorizationincrement

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingauthorizationsauthorizationreverse

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `authorization` (string)

### posttesthelpersissuingcardscardshippingdeliver

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### posttesthelpersissuingcardscardshippingfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### posttesthelpersissuingcardscardshippingreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### posttesthelpersissuingcardscardshippingship

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### posttesthelpersissuingcardscardshippingsubmit

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `card` (string)

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `personalization_design` (string)

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `personalization_design` (string)

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `personalization_design` (string)

### posttesthelpersissuingsettlements

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelpersissuingsettlementssettlementcomplete

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `settlement` (string)

### posttesthelpersissuingtransactionscreateforcecapture

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelpersissuingtransactionscreateunlinkedrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelpersissuingtransactionstransactionrefund

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transaction` (string)

### posttesthelpersrefundsrefundexpire

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `refund` (string)

### posttesthelpersterminalreadersreaderpresentpaymentmethod

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `reader` (string)

### gettesthelperstestclocks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### posttesthelperstestclocks

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletetesthelperstestclockstestclock

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `test_clock` (string)

### gettesthelperstestclockstestclock

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `test_clock` (string)
- `expand` (array)

### posttesthelperstestclockstestclockadvance

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `test_clock` (string)

### posttesthelperstreasuryinboundtransfersidfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryinboundtransfersidreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryinboundtransfersidsucceed

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryoutboundpaymentsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryoutboundpaymentsidfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryoutboundpaymentsidpost

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryoutboundpaymentsidreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### posttesthelperstreasuryoutboundtransfersoutboundtransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)

### posttesthelperstreasuryoutboundtransfersoutboundtransferfail

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)

### posttesthelperstreasuryoutboundtransfersoutboundtransferpost

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)

### posttesthelperstreasuryoutboundtransfersoutboundtransferreturn

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)

### posttesthelperstreasuryreceivedcredits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttesthelperstreasuryreceiveddebits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### posttokens

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettokenstoken

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `token` (string)
- `expand` (array)

### gettopups

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `amount` (other)
- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### posttopups

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettopupstopup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `topup` (string)
- `expand` (array)

### posttopupstopup

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `topup` (string)

### posttopupstopupcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `topup` (string)

### gettransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `destination` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)
- `transfer_group` (string)

### posttransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettransfersidreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### posttransfersidreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### gettransferstransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transfer` (string)
- `expand` (array)

### posttransferstransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `transfer` (string)

### gettransferstransferreversalsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `transfer` (string)
- `expand` (array)

### posttransferstransferreversalsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `transfer` (string)

### gettreasurycreditreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `received_credit` (string)
- `starting_after` (string)
- `status` (string)

### posttreasurycreditreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasurycreditreversalscreditreversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `credit_reversal` (string)
- `expand` (array)

### gettreasurydebitreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `received_debit` (string)
- `resolution` (string)
- `starting_after` (string)
- `status` (string)

### posttreasurydebitreversals

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasurydebitreversalsdebitreversal

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `debit_reversal` (string)
- `expand` (array)

### gettreasuryfinancialaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### posttreasuryfinancialaccounts

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasuryfinancialaccountsfinancialaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `financial_account` (string)
- `expand` (array)

### posttreasuryfinancialaccountsfinancialaccount

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `financial_account` (string)

### posttreasuryfinancialaccountsfinancialaccountclose

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `financial_account` (string)

### gettreasuryfinancialaccountsfinancialaccountfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `financial_account` (string)
- `expand` (array)

### posttreasuryfinancialaccountsfinancialaccountfeatures

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `financial_account` (string)

### gettreasuryinboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### posttreasuryinboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasuryinboundtransfersid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### posttreasuryinboundtransfersinboundtransfercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `inbound_transfer` (string)

### gettreasuryoutboundpayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `customer` (string)
- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### posttreasuryoutboundpayments

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasuryoutboundpaymentsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### posttreasuryoutboundpaymentsidcancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)

### gettreasuryoutboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### posttreasuryoutboundtransfers

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### gettreasuryoutboundtransfersoutboundtransfer

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)
- `expand` (array)

### posttreasuryoutboundtransfersoutboundtransfercancel

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `outbound_transfer` (string)

### gettreasuryreceivedcredits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `linked_flows` (object)
- `starting_after` (string)
- `status` (string)

### gettreasuryreceivedcreditsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### gettreasuryreceiveddebits

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `starting_after` (string)
- `status` (string)

### gettreasuryreceiveddebitsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### gettreasurytransactionentries

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `effective_at` (other)
- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `order_by` (string)
- `starting_after` (string)
- `transaction` (string)

### gettreasurytransactionentriesid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### gettreasurytransactions

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `created` (other)
- `ending_before` (string)
- `expand` (array)
- `financial_account` (string)
- `limit` (integer)
- `order_by` (string)
- `starting_after` (string)
- `status` (string)
- `status_transitions` (object)

### gettreasurytransactionsid

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `id` (string)
- `expand` (array)

### getwebhookendpoints

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `ending_before` (string)
- `expand` (array)
- `limit` (integer)
- `starting_after` (string)

### postwebhookendpoints

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

No input parameters

### deletewebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook_endpoint` (string)

### getwebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook_endpoint` (string)
- `expand` (array)

### postwebhookendpointswebhookendpoint

**Environment variables**

- `API_KEY`
- `USERNAME_PASSWORD_BASE64`

**Input schema**

- `webhook_endpoint` (string)
