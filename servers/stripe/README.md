# @open-mcp/stripe

## Installing

### With helper

Use the `add-to-client` helper to add the server to your MCP client:

```bash
npx @open-mcp/stripe add-to-client /path/to/client/config.json
```

For example:

```bash
# Claude desktop:
npx @open-mcp/stripe add-to-client ~/Library/Application\ Support/Claude/claude_desktop_config.json

# Cursor project (run from the project dir):
npx @open-mcp/stripe add-to-client .cursor/mcp.json

# Cursor global (applies to all projects):
npx @open-mcp/stripe add-to-client ~/.cursor/mcp.json
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "stripe": {
      "command": "npx",
      "args": ["-y", "@open-mcp/stripe"],
      "env": {"USERNAME_PASSWORD_BASE64":"...","API_KEY":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`
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

### getcheckoutsessionssessionlineitems

### getclimateorders

### postclimateorders

### getclimateordersorder

### postclimateordersorder

### postclimateordersordercancel

### getclimateproducts

### getclimateproductsproduct

### getclimatesuppliers

### getclimatesupplierssupplier

### getconfirmationtokensconfirmationtoken

### getcountryspecs

### getcountryspecscountry

### getcoupons

### postcoupons

### deletecouponscoupon

### getcouponscoupon

### postcouponscoupon

### getcreditnotes

### postcreditnotes

### getcreditnotespreview

### getcreditnotespreviewlines

### getcreditnotescreditnotelines

### getcreditnotesid

### postcreditnotesid

### postcreditnotesidvoid

### postcustomersessions

### getcustomers

### postcustomers

### getcustomerssearch

### deletecustomerscustomer

### getcustomerscustomer

### postcustomerscustomer

### getcustomerscustomerbalancetransactions

### postcustomerscustomerbalancetransactions

### getcustomerscustomerbalancetransactionstransaction

### postcustomerscustomerbalancetransactionstransaction

### getcustomerscustomerbankaccounts

### postcustomerscustomerbankaccounts

### deletecustomerscustomerbankaccountsid

### getcustomerscustomerbankaccountsid

### postcustomerscustomerbankaccountsid

### postcustomerscustomerbankaccountsidverify

### getcustomerscustomercards

### postcustomerscustomercards

### deletecustomerscustomercardsid

### getcustomerscustomercardsid

### postcustomerscustomercardsid

### getcustomerscustomercashbalance

### postcustomerscustomercashbalance

### getcustomerscustomercashbalancetransactions

### getcustomerscustomercashbalancetransactionstransaction

### deletecustomerscustomerdiscount

### getcustomerscustomerdiscount

### postcustomerscustomerfundinginstructions

### getcustomerscustomerpaymentmethods

### getcustomerscustomerpaymentmethodspaymentmethod

### getcustomerscustomersources

### postcustomerscustomersources

### deletecustomerscustomersourcesid

### getcustomerscustomersourcesid

### postcustomerscustomersourcesid

### postcustomerscustomersourcesidverify

### getcustomerscustomersubscriptions

### postcustomerscustomersubscriptions

### deletecustomerscustomersubscriptionssubscriptionexposedid

### getcustomerscustomersubscriptionssubscriptionexposedid

### postcustomerscustomersubscriptionssubscriptionexposedid

### deletecustomerscustomersubscriptionssubscriptionexposediddiscoun

### getcustomerscustomersubscriptionssubscriptionexposediddiscount

### getcustomerscustomertaxids

### postcustomerscustomertaxids

### deletecustomerscustomertaxidsid

### getcustomerscustomertaxidsid

### getdisputes

### getdisputesdispute

### postdisputesdispute

### postdisputesdisputeclose

### getentitlementsactiveentitlements

### getentitlementsactiveentitlementsid

### getentitlementsfeatures

### postentitlementsfeatures

### getentitlementsfeaturesid

### postentitlementsfeaturesid

### postephemeralkeys

### deleteephemeralkeyskey

### getevents

### geteventsid

### getexchangerates

### getexchangeratesrateid

### postexternalaccountsid

### getfilelinks

### postfilelinks

### getfilelinkslink

### postfilelinkslink

### getfiles

### postfiles

### getfilesfile

### getfinancialconnectionsaccounts

### getfinancialconnectionsaccountsaccount

### postfinancialconnectionsaccountsaccountdisconnect

### getfinancialconnectionsaccountsaccountowners

### postfinancialconnectionsaccountsaccountrefresh

### postfinancialconnectionsaccountsaccountsubscribe

### postfinancialconnectionsaccountsaccountunsubscribe

### postfinancialconnectionssessions

### getfinancialconnectionssessionssession

### getfinancialconnectionstransactions

### getfinancialconnectionstransactionstransaction

### getforwardingrequests

### postforwardingrequests

### getforwardingrequestsid

### getidentityverificationreports

### getidentityverificationreportsreport

### getidentityverificationsessions

### postidentityverificationsessions

### getidentityverificationsessionssession

### postidentityverificationsessionssession

### postidentityverificationsessionssessioncancel

### postidentityverificationsessionssessionredact

### getinvoicepayments

### getinvoicepaymentsinvoicepayment

### getinvoicerenderingtemplates

### getinvoicerenderingtemplatestemplate

### postinvoicerenderingtemplatestemplatearchive

### postinvoicerenderingtemplatestemplateunarchive

### getinvoiceitems

### postinvoiceitems

### deleteinvoiceitemsinvoiceitem

### getinvoiceitemsinvoiceitem

### postinvoiceitemsinvoiceitem

### getinvoices

### postinvoices

### postinvoicescreatepreview

### getinvoicessearch

### deleteinvoicesinvoice

### getinvoicesinvoice

### postinvoicesinvoice

### postinvoicesinvoiceaddlines

### postinvoicesinvoicefinalize

### getinvoicesinvoicelines

### postinvoicesinvoicelineslineitemid

### postinvoicesinvoicemarkuncollectible

### postinvoicesinvoicepay

### postinvoicesinvoiceremovelines

### postinvoicesinvoicesend

### postinvoicesinvoiceupdatelines

### postinvoicesinvoicevoid

### getissuingauthorizations

### getissuingauthorizationsauthorization

### postissuingauthorizationsauthorization

### postissuingauthorizationsauthorizationapprove

### postissuingauthorizationsauthorizationdecline

### getissuingcardholders

### postissuingcardholders

### getissuingcardholderscardholder

### postissuingcardholderscardholder

### getissuingcards

### postissuingcards

### getissuingcardscard

### postissuingcardscard

### getissuingdisputes

### postissuingdisputes

### getissuingdisputesdispute

### postissuingdisputesdispute

### postissuingdisputesdisputesubmit

### getissuingpersonalizationdesigns

### postissuingpersonalizationdesigns

### getissuingpersonalizationdesignspersonalizationdesign

### postissuingpersonalizationdesignspersonalizationdesign

### getissuingphysicalbundles

### getissuingphysicalbundlesphysicalbundle

### getissuingsettlementssettlement

### postissuingsettlementssettlement

### getissuingtokens

### getissuingtokenstoken

### postissuingtokenstoken

### getissuingtransactions

### getissuingtransactionstransaction

### postissuingtransactionstransaction

### postlinkaccountsessions

### getlinkaccountsessionssession

### getlinkedaccounts

### getlinkedaccountsaccount

### postlinkedaccountsaccountdisconnect

### getlinkedaccountsaccountowners

### postlinkedaccountsaccountrefresh

### getmandatesmandate

### getpaymentintents

### postpaymentintents

### getpaymentintentssearch

### getpaymentintentsintent

### postpaymentintentsintent

### postpaymentintentsintentapplycustomerbalance

### postpaymentintentsintentcancel

### postpaymentintentsintentcapture

### postpaymentintentsintentconfirm

### postpaymentintentsintentincrementauthorization

### postpaymentintentsintentverifymicrodeposits

### getpaymentlinks

### postpaymentlinks

### getpaymentlinkspaymentlink

### postpaymentlinkspaymentlink

### getpaymentlinkspaymentlinklineitems

### getpaymentmethodconfigurations

### postpaymentmethodconfigurations

### getpaymentmethodconfigurationsconfiguration

### postpaymentmethodconfigurationsconfiguration

### getpaymentmethoddomains

### postpaymentmethoddomains

### getpaymentmethoddomainspaymentmethoddomain

### postpaymentmethoddomainspaymentmethoddomain

### postpaymentmethoddomainspaymentmethoddomainvalidate

### getpaymentmethods

### postpaymentmethods

### getpaymentmethodspaymentmethod

### postpaymentmethodspaymentmethod

### postpaymentmethodspaymentmethodattach

### postpaymentmethodspaymentmethoddetach

### getpayouts

### postpayouts

### getpayoutspayout

### postpayoutspayout

### postpayoutspayoutcancel

### postpayoutspayoutreverse

### getplans

### postplans

### deleteplansplan

### getplansplan

### postplansplan

### getprices

### postprices

### getpricessearch

### getpricesprice

### postpricesprice

### getproducts

### postproducts

### getproductssearch

### deleteproductsid

### getproductsid

### postproductsid

### getproductsproductfeatures

### postproductsproductfeatures

### deleteproductsproductfeaturesid

### getproductsproductfeaturesid

### getpromotioncodes

### postpromotioncodes

### getpromotioncodespromotioncode

### postpromotioncodespromotioncode

### getquotes

### postquotes

### getquotesquote

### postquotesquote

### postquotesquoteaccept

### postquotesquotecancel

### getquotesquotecomputedupfrontlineitems

### postquotesquotefinalize

### getquotesquotelineitems

### getquotesquotepdf

### getradarearlyfraudwarnings

### getradarearlyfraudwarningsearlyfraudwarning

### getradarvaluelistitems

### postradarvaluelistitems

### deleteradarvaluelistitemsitem

### getradarvaluelistitemsitem

### getradarvaluelists

### postradarvaluelists

### deleteradarvaluelistsvaluelist

### getradarvaluelistsvaluelist

### postradarvaluelistsvaluelist

### getrefunds

### postrefunds

### getrefundsrefund

### postrefundsrefund

### postrefundsrefundcancel

### getreportingreportruns

### postreportingreportruns

### getreportingreportrunsreportrun

### getreportingreporttypes

### getreportingreporttypesreporttype

### getreviews

### getreviewsreview

### postreviewsreviewapprove

### getsetupattempts

### getsetupintents

### postsetupintents

### getsetupintentsintent

### postsetupintentsintent

### postsetupintentsintentcancel

### postsetupintentsintentconfirm

### postsetupintentsintentverifymicrodeposits

### getshippingrates

### postshippingrates

### getshippingratesshippingratetoken

### postshippingratesshippingratetoken

### postsigmasavedqueriesid

### getsigmascheduledqueryruns

### getsigmascheduledqueryrunsscheduledqueryrun

### postsources

### getsourcessource

### postsourcessource

### getsourcessourcemandatenotificationsmandatenotification

### getsourcessourcesourcetransactions

### getsourcessourcesourcetransactionssourcetransaction

### postsourcessourceverify

### getsubscriptionitems

### postsubscriptionitems

### deletesubscriptionitemsitem

### getsubscriptionitemsitem

### postsubscriptionitemsitem

### getsubscriptionschedules

### postsubscriptionschedules

### getsubscriptionschedulesschedule

### postsubscriptionschedulesschedule

### postsubscriptionschedulesschedulecancel

### postsubscriptionschedulesschedulerelease

### getsubscriptions

### postsubscriptions

### getsubscriptionssearch

### deletesubscriptionssubscriptionexposedid

### getsubscriptionssubscriptionexposedid

### postsubscriptionssubscriptionexposedid

### deletesubscriptionssubscriptionexposediddiscount

### postsubscriptionssubscriptionresume

### posttaxcalculations

### gettaxcalculationscalculation

### gettaxcalculationscalculationlineitems

### gettaxregistrations

### posttaxregistrations

### gettaxregistrationsid

### posttaxregistrationsid

### gettaxsettings

### posttaxsettings

### posttaxtransactionscreatefromcalculation

### posttaxtransactionscreatereversal

### gettaxtransactionstransaction

### gettaxtransactionstransactionlineitems

### gettaxcodes

### gettaxcodesid

### gettaxids

### posttaxids

### deletetaxidsid

### gettaxidsid

### gettaxrates

### posttaxrates

### gettaxratestaxrate

### posttaxratestaxrate

### getterminalconfigurations

### postterminalconfigurations

### deleteterminalconfigurationsconfiguration

### getterminalconfigurationsconfiguration

### postterminalconfigurationsconfiguration

### postterminalconnectiontokens

### getterminallocations

### postterminallocations

### deleteterminallocationslocation

### getterminallocationslocation

### postterminallocationslocation

### getterminalreaders

### postterminalreaders

### deleteterminalreadersreader

### getterminalreadersreader

### postterminalreadersreader

### postterminalreadersreadercancelaction

### postterminalreadersreaderprocesspaymentintent

### postterminalreadersreaderprocesssetupintent

### postterminalreadersreaderrefundpayment

### postterminalreadersreadersetreaderdisplay

### posttesthelpersconfirmationtokens

### posttesthelperscustomerscustomerfundcashbalance

### posttesthelpersissuingauthorizations

### posttesthelpersissuingauthorizationsauthorizationcapture

### posttesthelpersissuingauthorizationsauthorizationexpire

### posttesthelpersissuingauthorizationsauthorizationfinalizeamount

### posttesthelpersissuingauthorizationsauthorizationfraudchallenges

### posttesthelpersissuingauthorizationsauthorizationincrement

### posttesthelpersissuingauthorizationsauthorizationreverse

### posttesthelpersissuingcardscardshippingdeliver

### posttesthelpersissuingcardscardshippingfail

### posttesthelpersissuingcardscardshippingreturn

### posttesthelpersissuingcardscardshippingship

### posttesthelpersissuingcardscardshippingsubmit

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

### posttesthelpersissuingpersonalizationdesignspersonalizationdesig

### posttesthelpersissuingsettlements

### posttesthelpersissuingsettlementssettlementcomplete

### posttesthelpersissuingtransactionscreateforcecapture

### posttesthelpersissuingtransactionscreateunlinkedrefund

### posttesthelpersissuingtransactionstransactionrefund

### posttesthelpersrefundsrefundexpire

### posttesthelpersterminalreadersreaderpresentpaymentmethod

### gettesthelperstestclocks

### posttesthelperstestclocks

### deletetesthelperstestclockstestclock

### gettesthelperstestclockstestclock

### posttesthelperstestclockstestclockadvance

### posttesthelperstreasuryinboundtransfersidfail

### posttesthelperstreasuryinboundtransfersidreturn

### posttesthelperstreasuryinboundtransfersidsucceed

### posttesthelperstreasuryoutboundpaymentsid

### posttesthelperstreasuryoutboundpaymentsidfail

### posttesthelperstreasuryoutboundpaymentsidpost

### posttesthelperstreasuryoutboundpaymentsidreturn

### posttesthelperstreasuryoutboundtransfersoutboundtransfer

### posttesthelperstreasuryoutboundtransfersoutboundtransferfail

### posttesthelperstreasuryoutboundtransfersoutboundtransferpost

### posttesthelperstreasuryoutboundtransfersoutboundtransferreturn

### posttesthelperstreasuryreceivedcredits

### posttesthelperstreasuryreceiveddebits

### posttokens

### gettokenstoken

### gettopups

### posttopups

### gettopupstopup

### posttopupstopup

### posttopupstopupcancel

### gettransfers

### posttransfers

### gettransfersidreversals

### posttransfersidreversals

### gettransferstransfer

### posttransferstransfer

### gettransferstransferreversalsid

### posttransferstransferreversalsid

### gettreasurycreditreversals

### posttreasurycreditreversals

### gettreasurycreditreversalscreditreversal

### gettreasurydebitreversals

### posttreasurydebitreversals

### gettreasurydebitreversalsdebitreversal

### gettreasuryfinancialaccounts

### posttreasuryfinancialaccounts

### gettreasuryfinancialaccountsfinancialaccount

### posttreasuryfinancialaccountsfinancialaccount

### posttreasuryfinancialaccountsfinancialaccountclose

### gettreasuryfinancialaccountsfinancialaccountfeatures

### posttreasuryfinancialaccountsfinancialaccountfeatures

### gettreasuryinboundtransfers

### posttreasuryinboundtransfers

### gettreasuryinboundtransfersid

### posttreasuryinboundtransfersinboundtransfercancel

### gettreasuryoutboundpayments

### posttreasuryoutboundpayments

### gettreasuryoutboundpaymentsid

### posttreasuryoutboundpaymentsidcancel

### gettreasuryoutboundtransfers

### posttreasuryoutboundtransfers

### gettreasuryoutboundtransfersoutboundtransfer

### posttreasuryoutboundtransfersoutboundtransfercancel

### gettreasuryreceivedcredits

### gettreasuryreceivedcreditsid

### gettreasuryreceiveddebits

### gettreasuryreceiveddebitsid

### gettreasurytransactionentries

### gettreasurytransactionentriesid

### gettreasurytransactions

### gettreasurytransactionsid

### getwebhookendpoints

### postwebhookendpoints

### deletewebhookendpointswebhookendpoint

### getwebhookendpointswebhookendpoint

### postwebhookendpointswebhookendpoint

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
