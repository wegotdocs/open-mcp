# @open-mcp/sesame-mcp-server

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "sesame-mcp-server": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/sesame-mcp-server@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/sesame-mcp-server@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
API_KEY='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add sesame-mcp-server \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add sesame-mcp-server \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add sesame-mcp-server \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "sesame-mcp-server": {
      "command": "npx",
      "args": ["-y", "@open-mcp/sesame-mcp-server"],
      "env": {"API_KEY":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `API_KEY` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### showtokeninfo

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### updatecompany

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `notificationEmail` (string)
- `language` (string)

### createemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `firstName` (string)
- `lastName` (string)
- `invitation` (boolean)
- `status` (string)
- `gender` (string)
- `email` (string)
- `contractId` (string)
- `code` (integer)
- `pin` (integer)
- `nid` (string)
- `identityNumberType` (string)
- `ssn` (string)
- `phone` (string)
- `dateOfBirth` (string)
- `customFields` (array)
- `nationality` (string)
- `maritalStatus` (string)
- `address` (string)
- `postalCode` (string)
- `emergencyPhone` (string)
- `childrenCount` (integer)
- `disability` (integer)
- `personalEmail` (string)
- `description` (string)
- `city` (string)
- `province` (string)
- `country` (string)
- `salaryRange` (string)
- `studyLevel` (string)
- `professionalCategoryCode` (string)
- `professionalCategoryDescription` (string)
- `bic` (string)
- `jobChargeId` (string)
- `workPhone` (string)
- `mainRecruiter` (string)
- `nfc` (string)

### listemployees

**Environment variables**

- `API_KEY`

**Input schema**

- `code` (integer)
- `dni` (string)
- `email` (string)
- `departmentIds` (array)
- `officeIds` (array)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)
- `status` (string)

### getemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `firstName` (string)
- `lastName` (string)
- `status` (string)
- `gender` (string)
- `email` (string)
- `contractId` (string)
- `code` (integer)
- `pin` (integer)
- `nid` (string)
- `identityNumberType` (string)
- `ssn` (string)
- `phone` (string)
- `dateOfBirth` (string)
- `customFields` (array)
- `nationality` (string)
- `maritalStatus` (string)
- `address` (string)
- `postalCode` (string)
- `emergencyPhone` (string)
- `childrenCount` (integer)
- `disability` (integer)
- `personalEmail` (string)
- `description` (string)
- `city` (string)
- `province` (string)
- `country` (string)
- `salaryRange` (string)
- `studyLevel` (string)
- `professionalCategoryCode` (string)
- `professionalCategoryDescription` (string)
- `bic` (string)
- `accountNumber` (string)
- `jobChargeId` (string)
- `workPhone` (string)
- `mainRecruiter` (string)
- `nfc` (string)

### deleteemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### createjobcharge

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### listjobcharges

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### retrievejobcharge

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)

### updatejobcharge

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)
- `name` (string)

### deletejobchargein

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)

### getmanagerbyemployeeid

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)

### updatemanagerbyemployeeid

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `organizationChartManagerId` (string)

### assignemployeemanager

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `managerId` (string)
- `permission` (string)
- `order` (integer)

### listemployeemanagers

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `managerId` (string)
- `permission` (string)
- `limit` (integer)
- `page` (integer)

### deleteemployeemanager

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listroles

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### listrolesbyemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `limit` (integer)
- `page` (integer)

### assignroles

**Environment variables**

- `API_KEY`

**Input schema**

- `roleId` (string)
- `employeeId` (string)
- `entityAffectedId` (string)

### unassignroles

**Environment variables**

- `API_KEY`

**Input schema**

- `assignationId` (string)

### createdepartment

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `name` (string)

### listdepartments

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updatedepartment

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)

### deletedepartment

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listemployeedepartmentassignations

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `departmentId` (string)
- `limit` (integer)
- `page` (integer)

### assignemployeetodepartment

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `departmentId` (string)

### unassignemployeefromdepartments

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `departmentId` (string)

### createoffice

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `name` (string)
- `address` (string)
- `coordinates` (object)
- `description` (string)
- `radio` (integer)

### listoffices

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updateoffice

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `address` (string)
- `coordinates` (object)
- `description` (string)
- `radio` (integer)

### deleteoffice

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listemployeeofficeassignations

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `officeId` (string)
- `limit` (integer)
- `page` (integer)

### assignemployeetooffice

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `officeId` (string)

### unassignemployeefromoffices

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `officeId` (string)

### createcustomfield

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `name` (string)
- `slug` (string)
- `type` (string)

### listcustomfields

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updatecustomfield

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `slug` (string)

### deletecustomfield

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### clockin

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `workEntryIn` (other)
- `workCheckTypeId` (string)
- `workBreakId` (string)

### clockout

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `workEntryOut` (other)

### createworkentry

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `workEntryType` (string)
- `workBreakId` (string)
- `workCheckTypeId` (string)
- `workEntryIn` (other)
- `workEntryOut` (other)

### listworkentries

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `from` (string)
- `to` (string)
- `updatedAt[gte]` (string)
- `updatedAt[lte]` (string)
- `onlyReturn` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updateworkentry

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `workEntryType` (string)
- `workEntryIn` (other)
- `workEntryOut` (other)

### deleteworkentry

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listchecktypes

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### listworkbreaks

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### listcheckvalidations

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds[in]` (array)
- `status` (string)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### workedhoursbyemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds[in]` (array)
- `withChecks` (boolean)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### workedhoursbyemployeeandweekday

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds[in]` (array)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### workednighthoursbyemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds[in]` (array)
- `withChecks` (boolean)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### workedholidaydaysbyemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds[in]` (array)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### createvacationconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `requestVacationFrom` (string)
- `renewalPeriod` (string)
- `dayType` (string)
- `pickMode` (string)
- `maxDaysOff` (number)
- `creationDateNextYear` (string)
- `maxDateToTakeVacations` (number)
- `needsValidation` (boolean)
- `employeeRequestDenyExcessDaysOff` (boolean)
- `hoursQuantityConfigured` (boolean)
- `halfDayVacationConfiguration` (string)
- `allowFreeHoursSelection` (boolean)
- `enjoyMonthPeriod` (number)
- `employeeRequestEnabled` (boolean)
- `notAllowedDateRanges` (array)
- `configurationType` (string)

### listvacationconfigurations

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### retrievevacationconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `vacationConfigurationId` (string)

### updatevacationconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `vacationConfigurationId` (string)
- `name` (string)
- `requestVacationFrom` (string)
- `renewalPeriod` (string)
- `dayType` (string)
- `maxDaysOff` (number)
- `creationDateNextYear` (string)
- `maxDateToTakeVacations` (number)
- `needsValidation` (boolean)
- `employeeRequestDenyExcessDaysOff` (boolean)
- `hoursQuantityConfigured` (boolean)
- `halfDayVacationConfiguration` (string)
- `allowFreeHoursSelection` (boolean)
- `enjoyMonthPeriod` (number)
- `employeeRequestEnabled` (boolean)
- `notAllowedDateRanges` (array)
- `configurationType` (string)
- `year` (number)

### deletevacationconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `vacationConfigurationId` (string)

### retrieveemployeesassignedtovacationconfiguration

**Environment variables**

- `API_KEY`

**Input schema**

- `vacationConfigurationId` (string)
- `year` (number)
- `limit` (integer)
- `page` (integer)

### assignvacationconfigurationtoemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `vacationConfigurationId` (string)
- `employeeId` (string)
- `year` (number)

### listvacationcalendars

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `year[in]` (array)
- `limit` (integer)
- `page` (integer)

### createvacationcalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `vacationConfigurationId` (string)
- `year` (integer)
- `daysOff` (array)

### updatevacationcalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `daysOff` (array)
- `maxDaysOff` (integer)

### retrievevacationcalendartotals

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `year` (number)
- `limit` (integer)
- `page` (integer)

### listvacationdayoff

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds` (array)
- `from` (string)
- `to` (string)
- `page` (integer)
- `limit` (integer)
- `orderBy` (string)

### createvacationdayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `calendarId` (string)
- `type` (string)
- `daysOff` (array)
- `comment` (string)
- `onlyWithSchedule` (boolean)

### listvacationdayoffrequests

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `absencesValidator` (string)
- `fromDayOff` (string)
- `toDayOff` (string)
- `status` (string)
- `page` (integer)
- `limit` (integer)
- `orderBy` (string)

### acceptvacationdayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `managerId` (string)

### rejectvacationdayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `resolutionComment` (string)
- `managerId` (string)

### deletevacationdayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listabsencetypes

**Environment variables**

- `API_KEY`

**Input schema**

- `status` (string)
- `limit` (integer)
- `page` (integer)

### listabsencecalendars

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `type` (string)
- `year[in]` (array)
- `limit` (integer)
- `page` (integer)

### createabsencecalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `absenceTypeId` (string)
- `year` (integer)
- `daysOff` (array)

### updateabsencecalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `daysOff` (array)

### listabsencedayoff

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeIds` (array)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### createabsencedayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `absenceTypeId` (string)
- `type` (string)
- `daysOff` (array)
- `comment` (string)

### listabsencedayoffrequests

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `absencesValidator` (string)
- `fromDayOff` (string)
- `toDayOff` (string)
- `status` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### acceptabsencedayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `managerId` (string)
- `resolutionComment` (string)

### rejectabsencedayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `resolutionComment` (string)
- `managerId` (string)

### deleteabsencedayoffrequest

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listholidayscalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)
- `name[contains]` (string)

### createholidayscalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `daysOff` (array)

### listholidaycalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)
- `limit` (integer)
- `page` (integer)

### updateholidayscalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)
- `name` (string)
- `daysOff` (array)

### deleteholidayscalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)

### listholidays

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `year` (integer)
- `limit` (integer)
- `page` (integer)

### getemployeesbyholidaycalendar

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)
- `limit` (integer)
- `page` (integer)

### assignholidaycalendartoemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)
- `employees` (array)
- `startDate` (string)

### unassignholidaycalendartoemploye

**Environment variables**

- `API_KEY`

**Input schema**

- `holidayCalendarId` (string)
- `employees` (array)

### listscheduletemplates

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### listemployeescheduletemplate

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `from` (string)
- `to` (string)
- `limit` (integer)
- `page` (integer)

### listemployeeentityscheduletemplates

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)

### createentityscheduletemplate

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `scheduleTemplateId` (string)
- `startDate` (string)
- `endDate` (string)

### deleteentityscheduletemplate

**Environment variables**

- `API_KEY`

**Input schema**

- `entityScheduleTemplateId` (string)

### listagreements

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### createagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `code` (string)
- `color` (string)
- `annualHours` (number)

### getagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `agreementId` (string)
- `limit` (integer)
- `page` (integer)

### updateagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `agreementId` (string)
- `name` (string)
- `code` (string)
- `color` (string)
- `annualHours` (number)

### deleteagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `agreementId` (string)

### createemployeeagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `agreementId` (string)
- `employeeId` (string)
- `startDate` (string)

### deleteemployeeagreement

**Environment variables**

- `API_KEY`

**Input schema**

- `agreementEmployeeId` (string)

### getcontractsemployee

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `limit` (integer)
- `page` (integer)

### createcontract

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `startAt` (string)
- `endAt` (string)
- `code` (string)
- `comment` (string)
- `jobChargeId` (string)
- `contractTypeId` (string)
- `agreementId` (string)
- `degreeId` (string)
- `workDayTypeId` (string)
- `socialSecurityNumber` (string)
- `trialPeriod` (object)
- `cbo` (string)
- `remoteWork` (boolean)
- `seniorityDate` (string)
- `jobLevel` (string)
- `jobPositionDescription` (string)
- `weeklyHours` (number)
- `maxLegalWeeklyHours` (number)
- `maxLegalAnnualHours` (number)
- `percentageWorkDay` (number)
- `fte` (number)
- `workDays` (array)

### contractpayrolls

**Environment variables**

- `API_KEY`

**Input schema**

- `period` (string)
- `from` (string)
- `to` (string)
- `currency` (string)
- `officeIds[in]` (array)
- `departmentIds[in]` (array)
- `employeeStatus[in]` (array)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updatecontract

**Environment variables**

- `API_KEY`

**Input schema**

- `contractId` (string)
- `startAt` (string)
- `endAt` (string)
- `code` (string)
- `comment` (string)
- `jobChargeId` (string)
- `contractTypeId` (string)
- `agreementId` (string)
- `degreeId` (string)
- `workDayTypeId` (string)
- `socialSecurityNumber` (string)
- `trialPeriod` (object)
- `cbo` (object)
- `remoteWork` (boolean)
- `seniorityDate` (string)
- `jobLevel` (string)
- `jobPositionDescription` (string)
- `weeklyHours` (number)
- `maxLegalWeeklyHours` (number)
- `maxLegalAnnualHours` (number)
- `percentageWorkDay` (number)
- `fte` (number)
- `workDays` (array)

### deletecontract

**Environment variables**

- `API_KEY`

**Input schema**

- `contractId` (string)

### currentcontract

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)

### createjobchargeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### listjobchargesincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### retrievejobchargeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)

### updatejobchargeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)
- `name` (string)

### deletejobchargeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `jobChargeId` (string)

### createcontracttype

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### listcontracttypes

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)

### getcontracttypes

**Environment variables**

- `API_KEY`

**Input schema**

- `contractTypeId` (string)

### updatecontracttype

**Environment variables**

- `API_KEY`

**Input schema**

- `contractTypeId` (string)
- `name` (string)

### deletecontracttype

**Environment variables**

- `API_KEY`

**Input schema**

- `contractTypeId` (string)

### listcontributiongroups

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)

### listsalaries

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `salaryId` (string)
- `payPeriod` (string)
- `grossSalary` (integer)
- `payments` (integer)
- `contributionGroup` (string)
- `startDate` (string)
- `endDate` (string)
- `limit` (integer)
- `page` (integer)

### createsalary

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `payPeriod` (string)
- `currency` (string)
- `grossSalary` (number)
- `payments` (integer)
- `contributionGroupId` (string)
- `startDate` (string)
- `endDate` (string)
- `comments` (string)
- `prorated` (boolean)

### updatesalary

**Environment variables**

- `API_KEY`

**Input schema**

- `salaryId` (string)
- `endDate` (string)
- `comments` (string)

### deletesalary

**Environment variables**

- `API_KEY`

**Input schema**

- `salaryId` (string)

### createdegreeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### listdegreesincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)

### getdegreeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `degreeId` (string)

### updatedegreeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `degreeId` (string)
- `name` (string)

### deletedegreeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `degreeId` (string)

### listworkdaytypesincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `limit` (integer)
- `page` (integer)

### createworkdaytypeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)

### updateworkdaytypeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `workdayTypeId` (string)
- `name` (string)

### deleteworkdaytypeincontract

**Environment variables**

- `API_KEY`

**Input schema**

- `workdayTypeId` (string)

### timeentryin

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `projectId` (string)
- `tagIds` (array)
- `comment` (string)
- `coordinates` (other)

### timeentryout

**Environment variables**

- `API_KEY`

**Input schema**

- `coordinates` (other)

### createtimeentry

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `projectId` (string)
- `tagIds` (array)
- `comment` (string)
- `timeEntryIn` (other)
- `timeEntryOut` (other)

### listtimeentries

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `from` (string)
- `to` (string)
- `employeeStatus` (string)
- `limit` (integer)
- `page` (integer)

### updatetimeentry

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `projectId` (string)
- `tagIds` (array)
- `comment` (string)
- `timeEntryIn` (other)
- `timeEntryOut` (other)

### deletetimeentry

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### createcustomer

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `customerName` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `phone` (string)
- `description` (string)

### listcustomers

**Environment variables**

- `API_KEY`

**Input schema**

- `limit` (integer)
- `page` (integer)
- `orderBy` (string)

### updatecustomer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `customerName` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `phone` (string)
- `description` (string)

### deletecustomer

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### createproject

**Environment variables**

- `API_KEY`

**Input schema**

- `companyId` (string)
- `name` (string)
- `parentProjectId` (string)
- `customerId` (string)
- `price` (number)
- `startDate` (string)
- `endDate` (string)
- `managerId` (string)
- `description` (string)
- `status` (string)

### listprojects

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `page` (integer)
- `limit` (integer)
- `orderBy` (string)

### updateproject

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `name` (string)
- `parentProjectId` (string)
- `customerId` (string)
- `price` (number)
- `startDate` (string)
- `endDate` (string)
- `managerId` (string)
- `description` (string)
- `status` (string)

### deleteproject

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listcompanydirectories

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `parentDirectoryType` (string)
- `limit` (integer)
- `page` (integer)

### listdirectorydocuments

**Environment variables**

- `API_KEY`

**Input schema**

- `directoryId` (string)
- `limit` (number)
- `page` (number)

### uploaddocument

**Environment variables**

- `API_KEY`

**Input schema**

- `directoryId` (string)

### downloaddocument

**Environment variables**

- `API_KEY`

**Input schema**

- `documentId` (string)

### deletedocument

**Environment variables**

- `API_KEY`

**Input schema**

- `documentId` (string)

### listvacancies

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getvacancy

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### getcandidatesbyvacancyandstatus

**Environment variables**

- `API_KEY`

**Input schema**

- `vacancyId` (string)
- `statusId` (string)

### createcandidate

**Environment variables**

- `API_KEY`

**Input schema**

- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `phone` (string)
- `linkedinURL` (string)
- `desiredSalary` (string)
- `startWorkDate` (string)
- `web` (string)
- `location` (string)
- `vacancyId` (string)
- `statusId` (string)

### getcandidate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecandidate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `firstName` (string)
- `lastName` (string)
- `email` (string)
- `phone` (string)
- `linkedinURL` (string)
- `desiredSalary` (string)
- `startWorkDate` (string)
- `web` (string)
- `location` (string)
- `vacancyId` (string)
- `statusId` (string)

### uploaddocumenttocandidate

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listcandidatestatus

**Environment variables**

- `API_KEY`

**Input schema**

- `vacancyId` (string)

### listhoursbagrulehistory

**Environment variables**

- `API_KEY`

**Input schema**

- `from` (string)
- `to` (string)
- `hoursBagRuleIds` (array)
- `employeeIds` (array)
- `limit` (integer)
- `page` (integer)

### listtrainingtypes

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### createtraining

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `description` (string)
- `typeId` (string)
- `currency` (string)
- `amountType` (other)
- `amount` (number)
- `durationInHours` (number)
- `startDate` (string)
- `endDate` (string)
- `bonusable` (boolean)
- `trainingEntity` (string)
- `bonusPercent` (number)
- `email` (string)
- `teacher` (string)
- `businessName` (string)
- `cif` (string)
- `phone` (string)

### listtrainings

**Environment variables**

- `API_KEY`

**Input schema**

- `name` (string)
- `startDate` (string)
- `endDate` (string)
- `orderType` (string)
- `orderKey` (string)
- `limit` (integer)
- `page` (integer)

### gettraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)

### updatetraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)
- `name` (string)
- `description` (string)
- `typeId` (string)
- `currency` (string)
- `amountType` (other)
- `amount` (number)
- `durationInHours` (number)
- `startDate` (string)
- `endDate` (string)
- `bonusable` (boolean)
- `trainingEntity` (string)
- `bonusPercent` (number)
- `email` (string)
- `teacher` (string)
- `businessName` (string)
- `cif` (string)
- `phone` (string)

### deletetraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)

### assignemployeestotraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)
- `employeeIds` (object)

### listemployeesintraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)

### unassignemployeestotraining

**Environment variables**

- `API_KEY`

**Input schema**

- `trainingId` (string)
- `employeeIds` (object)

### updateemployeesstatusattraining

**Environment variables**

- `API_KEY`

**Input schema**

- `assignId` (string)
- `status` (other)

### listcompanyexpenses

**Environment variables**

- `API_KEY`

**Input schema**

- `employeeId` (string)
- `from` (string)
- `to` (string)
- `paymentMethodIds` (string)
- `status` (string)
- `limit` (integer)
- `page` (integer)

### listexpensecategories

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### listexpensepaymentmethods

**Environment variables**

- `API_KEY`

**Input schema**

No input parameters

### getemployees

**Environment variables**

- `API_KEY`

**Input schema**

- `from` (string)
- `to` (string)
