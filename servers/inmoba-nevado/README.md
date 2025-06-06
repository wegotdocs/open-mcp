# @open-mcp/inmoba-nevado

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "inmoba-nevado": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/inmoba-nevado@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/inmoba-nevado@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
OAUTH2_TOKEN='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add inmoba-nevado \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add inmoba-nevado \
  .cursor/mcp.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Other

```bash
npx @open-mcp/config add inmoba-nevado \
  /path/to/client/config.json \
  --OAUTH2_TOKEN=$OAUTH2_TOKEN
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "inmoba-nevado": {
      "command": "npx",
      "args": ["-y", "@open-mcp/inmoba-nevado"],
      "env": {"OAUTH2_TOKEN":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `OAUTH2_TOKEN` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### processed

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `webLeadId` (integer)
- `contact` (integer)

### findbyid_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### update

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `reference` (string)
- `constructYear` (integer)
- `constructYearMonth` (string)
- `renovationYear` (string)
- `renovationYearMonth` (string)
- `bathrooms` (integer)
- `bedrooms` (integer)
- `suiteBathrooms` (integer)
- `toilets` (integer)
- `floors` (integer)
- `level` (integer)
- `mtsBuild` (number)
- `mtsInterior` (number)
- `mtsPlot` (number)
- `mtsTerrace` (number)
- `pax` (integer)
- `garden` (string)
- `pool` (string)
- `garage` (string)
- `parkingSpaces` (integer)
- `orientation` (string)
- `community` (number)
- `garbage` (number)
- `ibi` (number)
- `direct` (boolean)
- `exclusive` (boolean)
- `featured` (boolean)
- `hot` (boolean)
- `luxury` (boolean)
- `newProperty` (boolean)
- `special` (boolean)
- `customFeatures` (array)
- `type` (integer)
- `city` (integer)
- `area` (integer)
- `subarea` (integer)
- `development` (integer)
- `dateListed` (string)
- `dateReview` (string)
- `features` (array)
- `tags` (array)
- `rentShortterm` (boolean)
- `rentLongterm` (boolean)
- `rented` (boolean)
- `sale` (boolean)
- `sold` (boolean)
- `underOffer` (boolean)
- `rentalPriceShortterm` (integer)
- `rentalPriceShorttermVisible` (boolean)
- `rentalPriceShorttermPeriod` (string)
- `rentalPriceLongterm` (integer)
- `rentalPriceLongtermVisible` (boolean)
- `salePrice` (integer)
- `salePriceVisible` (boolean)
- `salePricePrevious` (integer)
- `address` (string)
- `expenses` (string)
- `gpsPoint` (object)
- `gpsVisible` (boolean)
- `internalNotes` (string)
- `saleboard` (boolean)
- `keys` (boolean)
- `keyStatus` (string)
- `keyscode` (string)
- `listedBy` (array)
- `seller` (integer)
- `publicAgent` (integer)
- `postcode` (string)
- `taxes` (string)
- `valuation` (integer)
- `valuationDate` (string)
- `visitingConditions` (string)
- `zone` (string)
- `communitiesAdmin` (string)
- `agreement` (boolean)
- `copyTrashBills` (boolean)
- `copyRegistrationProperty` (boolean)
- `copyRegistrationCompany` (boolean)
- `copyIbiBills` (boolean)
- `copyNotaSimple` (boolean)
- `copyPlans` (boolean)
- `copyAttorney` (boolean)
- `copyFirstOccupationLicense` (boolean)
- `owner` (string)
- `refCatastro` (string)
- `register` (string)
- `legalRepresentative` (string)
- `copyTenSecurity` (boolean)
- `rateableValue` (integer)
- `energyIsInProcess` (boolean)
- `energyKwLevel` (string)
- `energyCo2Level` (string)
- `energyKw` (number)
- `energyCo2` (number)
- `energyInfo` (string)
- `touristicCode` (string)
- `commission` (string)
- `commissionPercent` (number)
- `commissionNetworkPercent` (number)
- `statusPublish` (string)
- `statusShared` (string)

### update_10

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### findlink

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `linkId` (integer)

### update_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `linkId` (integer)
- `name` (string)
- `lang` (string)
- `type` (string)
- `publish` (boolean)
- `visibleNetwork` (boolean)
- `excludePortals` (boolean)
- `url` (string)
- `description` (string)

### partialupdate

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `linkId` (integer)

### findimage

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `imageId` (integer)

### update_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `imageId` (integer)
- `publish` (boolean)
- `main` (boolean)
- `position` (integer)

### partialupdate_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `imageId` (integer)

### findfile

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `fileId` (integer)

### update_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `fileId` (integer)
- `name` (string)
- `lang` (string)
- `type` (string)
- `publish` (boolean)
- `visibleNetwork` (boolean)
- `excludePortals` (boolean)
- `description` (string)

### partialupdate_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `fileId` (integer)

### finddescription

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `language` (string)

### update_4

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `language` (string)
- `shortDesc` (string)
- `mainDesc` (string)
- `extraDesc` (string)
- `priceDesc` (string)

### create_5

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `language` (string)
- `shortDesc` (string)
- `mainDesc` (string)
- `extraDesc` (string)
- `priceDesc` (string)

### partialupdate_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `language` (string)

### findbyid_12

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### update_5

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `assignedTo` (array)
- `assignedToTeam` (boolean)
- `title` (string)
- `name` (string)
- `surname` (string)
- `company` (string)
- `address` (string)
- `notes` (string)
- `identcard` (string)
- `email` (string)
- `mobile` (string)
- `telephone` (string)
- `fax` (string)
- `web` (string)
- `language` (string)
- `country` (string)
- `archived` (boolean)
- `typeBuyer` (boolean)
- `typeCollaborator` (boolean)
- `typeDeveloper` (boolean)
- `typeLawyer` (boolean)
- `typeOwner` (boolean)
- `typeServiceco` (boolean)
- `typeTenantLong` (boolean)
- `typeTenantShort` (boolean)
- `sentBy` (integer)
- `sentTo` (integer)
- `lawyer` (integer)
- `source` (string)
- `sourceDetails` (string)
- `leadStatus` (string)
- `saleStage` (string)
- `tags` (array)
- `allowAutoEmailDealAlert` (boolean)
- `allowAutoEmailMarketing` (boolean)

### update_11

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### findfile_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `fileId` (integer)

### update_6

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `fileId` (integer)
- `name` (string)
- `description` (string)

### update_12

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `fileId` (integer)

### findadditional

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `additionalAddressId` (integer)

### update_7

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `additionalAddressId` (integer)
- `kind` (string)
- `address` (string)
- `description` (string)

### update_13

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `additionalAddressId` (integer)

### findbyid_13

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)

### update_8

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)
- `type` (string)
- `subject` (string)
- `details` (string)
- `responsible` (string)
- `contactMain` (integer)
- `users` (array)
- `contacts` (array)
- `bookings` (array)
- `developments` (array)
- `properties` (array)

### update_14

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)

### findevent

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)

### update_9

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `startDate` (string)
- `endDate` (string)
- `timezone` (string)
- `allDay` (boolean)
- `reminder` (string)
- `description` (string)

### add

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)
- `startDateTime` (string)
- `endDateTime` (string)
- `startDate` (string)
- `endDate` (string)
- `timezone` (string)
- `allDay` (boolean)
- `reminder` (string)
- `description` (string)

### update_15

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)

### page

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `status` (string)
- `fromDate` (string)
- `toDate` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### create

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `source` (string)
- `name` (string)
- `email` (string)
- `phone` (string)
- `remoteIp` (string)
- `comments` (string)
- `properties` (array)
- `contact` (integer)

### page_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `countryIso` (string)
- `statusPublish` (array)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### create_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `reference` (string)
- `constructYear` (integer)
- `constructYearMonth` (string)
- `renovationYear` (string)
- `renovationYearMonth` (string)
- `bathrooms` (integer)
- `bedrooms` (integer)
- `suiteBathrooms` (integer)
- `toilets` (integer)
- `floors` (integer)
- `level` (integer)
- `mtsBuild` (number)
- `mtsInterior` (number)
- `mtsPlot` (number)
- `mtsTerrace` (number)
- `pax` (integer)
- `garden` (string)
- `pool` (string)
- `garage` (string)
- `parkingSpaces` (integer)
- `orientation` (string)
- `community` (number)
- `garbage` (number)
- `ibi` (number)
- `direct` (boolean)
- `exclusive` (boolean)
- `featured` (boolean)
- `hot` (boolean)
- `luxury` (boolean)
- `newProperty` (boolean)
- `special` (boolean)
- `customFeatures` (array)
- `type` (integer)
- `city` (integer)
- `area` (integer)
- `subarea` (integer)
- `development` (integer)
- `dateListed` (string)
- `dateReview` (string)
- `features` (array)
- `tags` (array)
- `rentShortterm` (boolean)
- `rentLongterm` (boolean)
- `rented` (boolean)
- `sale` (boolean)
- `sold` (boolean)
- `underOffer` (boolean)
- `rentalPriceShortterm` (integer)
- `rentalPriceShorttermVisible` (boolean)
- `rentalPriceShorttermPeriod` (string)
- `rentalPriceLongterm` (integer)
- `rentalPriceLongtermVisible` (boolean)
- `salePrice` (integer)
- `salePriceVisible` (boolean)
- `salePricePrevious` (integer)
- `address` (string)
- `expenses` (string)
- `gpsPoint` (object)
- `gpsVisible` (boolean)
- `internalNotes` (string)
- `saleboard` (boolean)
- `keys` (boolean)
- `keyStatus` (string)
- `keyscode` (string)
- `listedBy` (array)
- `seller` (integer)
- `publicAgent` (integer)
- `postcode` (string)
- `taxes` (string)
- `valuation` (integer)
- `valuationDate` (string)
- `visitingConditions` (string)
- `zone` (string)
- `communitiesAdmin` (string)
- `agreement` (boolean)
- `copyTrashBills` (boolean)
- `copyRegistrationProperty` (boolean)
- `copyRegistrationCompany` (boolean)
- `copyIbiBills` (boolean)
- `copyNotaSimple` (boolean)
- `copyPlans` (boolean)
- `copyAttorney` (boolean)
- `copyFirstOccupationLicense` (boolean)
- `owner` (string)
- `refCatastro` (string)
- `register` (string)
- `legalRepresentative` (string)
- `copyTenSecurity` (boolean)
- `rateableValue` (integer)
- `energyIsInProcess` (boolean)
- `energyKwLevel` (string)
- `energyCo2Level` (string)
- `energyKw` (number)
- `energyCo2` (number)
- `energyInfo` (string)
- `touristicCode` (string)
- `commission` (string)
- `commissionPercent` (number)
- `commissionNetworkPercent` (number)

### findlinks

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### create_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `name` (string)
- `lang` (string)
- `type` (string)
- `publish` (boolean)
- `visibleNetwork` (boolean)
- `excludePortals` (boolean)
- `url` (string)
- `description` (string)

### findimages

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### create_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### findfiles

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### create_4

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### page_5

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `email` (string)
- `phone` (string)
- `emailAndPhoneAsOr` (boolean)
- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `archived` (boolean)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### create_6

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `assignedTo` (array)
- `assignedToTeam` (boolean)
- `title` (string)
- `name` (string)
- `surname` (string)
- `company` (string)
- `address` (string)
- `notes` (string)
- `identcard` (string)
- `email` (string)
- `mobile` (string)
- `telephone` (string)
- `fax` (string)
- `web` (string)
- `language` (string)
- `country` (string)
- `archived` (boolean)
- `typeBuyer` (boolean)
- `typeCollaborator` (boolean)
- `typeDeveloper` (boolean)
- `typeLawyer` (boolean)
- `typeOwner` (boolean)
- `typeServiceco` (boolean)
- `typeTenantLong` (boolean)
- `typeTenantShort` (boolean)
- `sentBy` (integer)
- `sentTo` (integer)
- `lawyer` (integer)
- `source` (string)
- `sourceDetails` (string)
- `leadStatus` (string)
- `saleStage` (string)
- `tags` (array)
- `allowAutoEmailDealAlert` (boolean)
- `allowAutoEmailMarketing` (boolean)

### findfiles_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### upload

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### findadditionals

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### create_7

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `kind` (string)
- `address` (string)
- `description` (string)

### page_7

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (array)
- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### create_8

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `type` (string)
- `subject` (string)
- `details` (string)
- `responsible` (string)
- `contactMain` (integer)
- `users` (array)
- `contacts` (array)
- `bookings` (array)
- `developments` (array)
- `properties` (array)

### findcomments

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)

### create_9

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `activityId` (integer)
- `comment` (string)

### findbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `webLeadId` (integer)

### list

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `enabled` (boolean)

### findbyid_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `userId` (integer)

### me

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findbyusername

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `username` (string)

### page_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `status` (string)
- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findsalebyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `saleId` (integer)

### findusersbysaleid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `saleId` (integer)

### findsalefilesbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `saleId` (integer)

### finddatesbysaleid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `saleId` (integer)

### findcollaboratorsbysaleid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `saleId` (integer)

### findall

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findsalebycode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `code` (integer)

### findhtmls

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### findhtml

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `htmlId` (integer)

### finddescriptions

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)

### list_1

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findbyid_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `typeId` (integer)

### list_2

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### list_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### list_4

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findbycode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `code` (string)

### list_5

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findbyid_4

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `categoryId` (integer)

### findbyreference

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `reference` (string)

### findbyid_5

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `subareaId` (integer)

### list_6

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `areaId` (integer)

### findbyid_6

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `provinceId` (integer)

### list_7

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `countryIso` (string)

### list_8

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### findbyid_7

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `countryId` (integer)

### findbyiso

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `countryIso` (string)

### findbyid_8

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `cityId` (integer)

### list_9

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `provinceId` (integer)

### findbyid_9

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `areaId` (integer)

### list_10

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `cityId` (integer)

### page_3

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fromStart` (string)
- `toStart` (string)
- `fromEnd` (string)
- `toEnd` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findbyid_10

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `eventId` (integer)

### findeventsbyuser

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `username` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findeventsbycontactid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### page_4

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `status` (array)
- `transactionType` (string)
- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findbyid_11

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `enquiryId` (integer)

### findbycontactid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)

### list_11

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### list_12

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### list_13

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters

### page_6

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `fromDateCreated` (string)
- `toDateCreated` (string)
- `fromDateModified` (string)
- `toDateModified` (string)
- `fromDateStart` (string)
- `toDateStart` (string)
- `fromDateEnd` (string)
- `toDateEnd` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findbookingbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `bookingId` (integer)

### findbookingcheckouteventbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `bookingId` (integer)

### findbookingcheckineventbyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `bookingId` (integer)

### findbookingsbypropertyid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `propertyId` (integer)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findbookingsbycontactid

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `contactId` (integer)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### findbookingbycode

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

- `code` (integer)

### findtypes

**Environment variables**

- `OAUTH2_TOKEN`

**Input schema**

No input parameters
