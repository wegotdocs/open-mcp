# @open-mcp/api_stackone_com

## Installing

First set the environment variables as shell variables:

```bash
USERNAME_PASSWORD_BASE64='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add api_stackone_com \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add api_stackone_com \
  .cursor/mcp.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Other

```bash
npx @open-mcp/config add api_stackone_com \
  /path/to/client/config.json \
  --USERNAME_PASSWORD_BASE64=$USERNAME_PASSWORD_BASE64
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "api_stackone_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/api_stackone_com"],
      "env": {"USERNAME_PASSWORD_BASE64":"..."}
    }
  }
}
```

## Customizing the base URL

Set the environment variable `OPEN_MCP_BASE_URL` to override each tool's base URL. This is useful if your OpenAPI spec defines a relative server URL.

## Other environment variables

- `USERNAME_PASSWORD_BASE64`

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/api_stackone_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/api_stackone_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

```ts
{
  toolName: z.string(),
  jsonPointers: z.array(z.string().startsWith("/").describe("The pointer to the JSON schema object which needs expanding")).describe("A list of JSON pointers"),
}
```

### hris_list_companies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_company

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_custom_field_definitions

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_custom_field_definition

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employees

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Employees filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "include": z.string().nullable().describe("The comma separated list of fields that will be included in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_employee

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "first_name": z.string().nullable().describe("The employee first name").optional(),
  "last_name": z.string().nullable().describe("The employee last name").optional(),
  "name": z.string().nullable().describe("The employee name").optional(),
  "display_name": z.string().nullable().describe("The employee display name").optional(),
  "avatar_url": z.string().nullable().describe("The employee avatar Url").optional(),
  "personal_email": z.string().nullable().describe("The employee personal email").optional(),
  "personal_phone_number": z.string().nullable().describe("The employee personal phone number").optional(),
  "work_email": z.string().nullable().describe("The employee work email").optional(),
  "work_phone_number": z.string().nullable().describe("The employee work phone number").optional(),
  "job_id": z.string().nullable().describe("The employee job id").optional(),
  "job_title": z.string().nullable().describe("The employee job title").optional(),
  "department_id": z.string().nullable().describe("The employee department id").optional(),
  "team_id": z.string().nullable().describe("The employee team id").optional(),
  "department": z.string().nullable().describe("The employee department").optional(),
  "manager_id": z.string().nullable().describe("The employee manager ID").optional(),
  "gender": z.string().optional(),
  "preferred_language": z.string().optional(),
  "ethnicity": z.string().optional(),
  "date_of_birth": z.string().datetime({ offset: true }).nullable().describe("The employee date_of_birth").optional(),
  "birthday": z.string().datetime({ offset: true }).nullable().describe("The employee birthday").optional(),
  "marital_status": z.string().optional(),
  "avatar": z.string().optional(),
  "hire_date": z.string().datetime({ offset: true }).nullable().describe("The employee hire date").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The employee start date").optional(),
  "employment_type": z.string().optional(),
  "employment_contract_type": z.string().optional(),
  "employment_status": z.string().optional(),
  "termination_date": z.string().datetime({ offset: true }).nullable().describe("The employee termination date").optional(),
  "company_id": z.string().nullable().describe("The employee company id").optional(),
  "citizenships": z.array(z.object({ "value": z.union([z.literal("AF"), z.literal("AL"), z.literal("DZ"), z.literal("AS"), z.literal("AD"), z.literal("AO"), z.literal("AI"), z.literal("AQ"), z.literal("AG"), z.literal("AR"), z.literal("AM"), z.literal("AW"), z.literal("AU"), z.literal("AT"), z.literal("AZ"), z.literal("BS"), z.literal("BH"), z.literal("BD"), z.literal("BB"), z.literal("BY"), z.literal("BE"), z.literal("BZ"), z.literal("BJ"), z.literal("BM"), z.literal("BT"), z.literal("BO"), z.literal("BQ"), z.literal("BA"), z.literal("BW"), z.literal("BV"), z.literal("BR"), z.literal("IO"), z.literal("BN"), z.literal("BG"), z.literal("BF"), z.literal("BI"), z.literal("KH"), z.literal("CM"), z.literal("CA"), z.literal("CV"), z.literal("KY"), z.literal("CF"), z.literal("TD"), z.literal("CL"), z.literal("CN"), z.literal("CX"), z.literal("CC"), z.literal("CO"), z.literal("KM"), z.literal("CG"), z.literal("CD"), z.literal("CK"), z.literal("CR"), z.literal("HR"), z.literal("CU"), z.literal("CW"), z.literal("CY"), z.literal("CZ"), z.literal("CI"), z.literal("DK"), z.literal("DJ"), z.literal("DM"), z.literal("DO"), z.literal("EC"), z.literal("EG"), z.literal("SV"), z.literal("GQ"), z.literal("ER"), z.literal("EE"), z.literal("ET"), z.literal("FK"), z.literal("FO"), z.literal("FJ"), z.literal("FI"), z.literal("FR"), z.literal("GF"), z.literal("PF"), z.literal("TF"), z.literal("GA"), z.literal("GM"), z.literal("GE"), z.literal("DE"), z.literal("GH"), z.literal("GI"), z.literal("GR"), z.literal("GL"), z.literal("GD"), z.literal("GP"), z.literal("GU"), z.literal("GT"), z.literal("GG"), z.literal("GN"), z.literal("GW"), z.literal("GY"), z.literal("HT"), z.literal("HM"), z.literal("VA"), z.literal("HN"), z.literal("HK"), z.literal("HU"), z.literal("IS"), z.literal("IN"), z.literal("ID"), z.literal("IR"), z.literal("IQ"), z.literal("IE"), z.literal("IM"), z.literal("IL"), z.literal("IT"), z.literal("JM"), z.literal("JP"), z.literal("JE"), z.literal("JO"), z.literal("KZ"), z.literal("KE"), z.literal("KI"), z.literal("KP"), z.literal("KR"), z.literal("KW"), z.literal("KG"), z.literal("LA"), z.literal("LV"), z.literal("LB"), z.literal("LS"), z.literal("LR"), z.literal("LY"), z.literal("LI"), z.literal("LT"), z.literal("LU"), z.literal("MO"), z.literal("MK"), z.literal("MG"), z.literal("MW"), z.literal("MY"), z.literal("MV"), z.literal("ML"), z.literal("MT"), z.literal("MH"), z.literal("MQ"), z.literal("MR"), z.literal("MU"), z.literal("YT"), z.literal("MX"), z.literal("FM"), z.literal("MD"), z.literal("MC"), z.literal("MN"), z.literal("ME"), z.literal("MS"), z.literal("MA"), z.literal("MZ"), z.literal("MM"), z.literal("NA"), z.literal("NR"), z.literal("NP"), z.literal("NL"), z.literal("NC"), z.literal("NZ"), z.literal("NI"), z.literal("NE"), z.literal("NG"), z.literal("NU"), z.literal("NF"), z.literal("MP"), z.literal("NO"), z.literal("OM"), z.literal("PK"), z.literal("PW"), z.literal("PS"), z.literal("PA"), z.literal("PG"), z.literal("PY"), z.literal("PE"), z.literal("PH"), z.literal("PN"), z.literal("PL"), z.literal("PT"), z.literal("PR"), z.literal("QA"), z.literal("RO"), z.literal("RU"), z.literal("RW"), z.literal("RE"), z.literal("BL"), z.literal("SH"), z.literal("KN"), z.literal("LC"), z.literal("MF"), z.literal("PM"), z.literal("VC"), z.literal("WS"), z.literal("SM"), z.literal("ST"), z.literal("SA"), z.literal("SN"), z.literal("RS"), z.literal("SC"), z.literal("SL"), z.literal("SG"), z.literal("SX"), z.literal("SK"), z.literal("SI"), z.literal("SB"), z.literal("SO"), z.literal("ZA"), z.literal("GS"), z.literal("SS"), z.literal("ES"), z.literal("LK"), z.literal("SD"), z.literal("SR"), z.literal("SJ"), z.literal("SZ"), z.literal("SE"), z.literal("CH"), z.literal("SY"), z.literal("TW"), z.literal("TJ"), z.literal("TZ"), z.literal("TH"), z.literal("TL"), z.literal("TG"), z.literal("TK"), z.literal("TO"), z.literal("TT"), z.literal("TN"), z.literal("TR"), z.literal("TM"), z.literal("TC"), z.literal("TV"), z.literal("UG"), z.literal("UA"), z.literal("AE"), z.literal("GB"), z.literal("US"), z.literal("UM"), z.literal("UY"), z.literal("UZ"), z.literal("VU"), z.literal("VE"), z.literal("VN"), z.literal("VG"), z.literal("VI"), z.literal("WF"), z.literal("EH"), z.literal("YE"), z.literal("ZM"), z.literal("ZW"), z.literal("unmapped_value"), z.literal(null)]).nullable().describe("The ISO3166-1 Alpha2 Code of the Country").optional(), "source_value": z.string().nullable().optional() })).nullable().describe("The citizenships of the Employee").optional(),
  "employment": z.string().optional(),
  "custom_fields": z.array(z.object({ "id": z.string().nullable().describe("Unique identifier").optional(), "remote_id": z.string().nullable().describe("Provider's unique identifier").optional(), "name": z.string().nullable().describe("The name of the custom field.").optional(), "value": z.string().nullable().describe("The value associated with the custom field.").optional(), "value_id": z.string().nullable().describe("The unique identifier for the value of the custom field.").optional(), "remote_value_id": z.string().nullable().describe("Provider's unique identifier for the value of the custom field.").optional() })).nullable().describe("The employee custom fields").optional(),
  "benefits": z.array(z.object({ "id": z.string().nullable().describe("Unique identifier").optional(), "name": z.string().nullable().describe("The name of the benefit").optional(), "benefit_type": z.string().optional(), "provider": z.string().nullable().describe("The provider of the benefit").optional(), "description": z.string().nullable().describe("The description of the benefit").optional(), "created_at": z.string().datetime({ offset: true }).nullable().describe("The date and time the benefit was created").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time the benefit was last updated").optional() })).nullable().describe("Current benefits of the employee").optional(),
  "employee_number": z.string().nullable().describe("The assigned employee number").optional(),
  "national_identity_numbers": z.array(z.object({ "value": z.string().nullable().optional(), "type": z.string().optional(), "country": z.string().optional() })).nullable().describe("The national identity numbers").optional(),
  "home_location": z.string().optional(),
  "work_location": z.string().optional(),
  "cost_centers": z.array(z.object({ "id": z.string().nullable().describe("Unique identifier").optional(), "name": z.string().nullable().optional(), "distribution_percentage": z.number().nullable().optional() })).nullable().describe("The employee cost centers").optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "include": z.string().nullable().describe("The comma separated list of fields that will be included in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_update_employee

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "first_name": z.string().nullable().describe("The employee first name").optional(),
  "last_name": z.string().nullable().describe("The employee last name").optional(),
  "name": z.string().nullable().describe("The employee name").optional(),
  "display_name": z.string().nullable().describe("The employee display name").optional(),
  "avatar_url": z.string().nullable().describe("The employee avatar Url").optional(),
  "personal_email": z.string().nullable().describe("The employee personal email").optional(),
  "personal_phone_number": z.string().nullable().describe("The employee personal phone number").optional(),
  "work_email": z.string().nullable().describe("The employee work email").optional(),
  "work_phone_number": z.string().nullable().describe("The employee work phone number").optional(),
  "job_id": z.string().nullable().describe("The employee job id").optional(),
  "job_title": z.string().nullable().describe("The employee job title").optional(),
  "department_id": z.string().nullable().describe("The employee department id").optional(),
  "team_id": z.string().nullable().describe("The employee team id").optional(),
  "department": z.string().nullable().describe("The employee department").optional(),
  "manager_id": z.string().nullable().describe("The employee manager ID").optional(),
  "gender": z.string().optional(),
  "preferred_language": z.string().optional(),
  "ethnicity": z.string().optional(),
  "date_of_birth": z.string().datetime({ offset: true }).nullable().describe("The employee date_of_birth").optional(),
  "birthday": z.string().datetime({ offset: true }).nullable().describe("The employee birthday").optional(),
  "marital_status": z.string().optional(),
  "avatar": z.string().optional(),
  "hire_date": z.string().datetime({ offset: true }).nullable().describe("The employee hire date").optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The employee start date").optional(),
  "employment_type": z.string().optional(),
  "employment_contract_type": z.string().optional(),
  "employment_status": z.string().optional(),
  "termination_date": z.string().datetime({ offset: true }).nullable().describe("The employee termination date").optional(),
  "company_id": z.string().nullable().describe("The employee company id").optional(),
  "citizenships": z.array(z.object({ "value": z.union([z.literal("AF"), z.literal("AL"), z.literal("DZ"), z.literal("AS"), z.literal("AD"), z.literal("AO"), z.literal("AI"), z.literal("AQ"), z.literal("AG"), z.literal("AR"), z.literal("AM"), z.literal("AW"), z.literal("AU"), z.literal("AT"), z.literal("AZ"), z.literal("BS"), z.literal("BH"), z.literal("BD"), z.literal("BB"), z.literal("BY"), z.literal("BE"), z.literal("BZ"), z.literal("BJ"), z.literal("BM"), z.literal("BT"), z.literal("BO"), z.literal("BQ"), z.literal("BA"), z.literal("BW"), z.literal("BV"), z.literal("BR"), z.literal("IO"), z.literal("BN"), z.literal("BG"), z.literal("BF"), z.literal("BI"), z.literal("KH"), z.literal("CM"), z.literal("CA"), z.literal("CV"), z.literal("KY"), z.literal("CF"), z.literal("TD"), z.literal("CL"), z.literal("CN"), z.literal("CX"), z.literal("CC"), z.literal("CO"), z.literal("KM"), z.literal("CG"), z.literal("CD"), z.literal("CK"), z.literal("CR"), z.literal("HR"), z.literal("CU"), z.literal("CW"), z.literal("CY"), z.literal("CZ"), z.literal("CI"), z.literal("DK"), z.literal("DJ"), z.literal("DM"), z.literal("DO"), z.literal("EC"), z.literal("EG"), z.literal("SV"), z.literal("GQ"), z.literal("ER"), z.literal("EE"), z.literal("ET"), z.literal("FK"), z.literal("FO"), z.literal("FJ"), z.literal("FI"), z.literal("FR"), z.literal("GF"), z.literal("PF"), z.literal("TF"), z.literal("GA"), z.literal("GM"), z.literal("GE"), z.literal("DE"), z.literal("GH"), z.literal("GI"), z.literal("GR"), z.literal("GL"), z.literal("GD"), z.literal("GP"), z.literal("GU"), z.literal("GT"), z.literal("GG"), z.literal("GN"), z.literal("GW"), z.literal("GY"), z.literal("HT"), z.literal("HM"), z.literal("VA"), z.literal("HN"), z.literal("HK"), z.literal("HU"), z.literal("IS"), z.literal("IN"), z.literal("ID"), z.literal("IR"), z.literal("IQ"), z.literal("IE"), z.literal("IM"), z.literal("IL"), z.literal("IT"), z.literal("JM"), z.literal("JP"), z.literal("JE"), z.literal("JO"), z.literal("KZ"), z.literal("KE"), z.literal("KI"), z.literal("KP"), z.literal("KR"), z.literal("KW"), z.literal("KG"), z.literal("LA"), z.literal("LV"), z.literal("LB"), z.literal("LS"), z.literal("LR"), z.literal("LY"), z.literal("LI"), z.literal("LT"), z.literal("LU"), z.literal("MO"), z.literal("MK"), z.literal("MG"), z.literal("MW"), z.literal("MY"), z.literal("MV"), z.literal("ML"), z.literal("MT"), z.literal("MH"), z.literal("MQ"), z.literal("MR"), z.literal("MU"), z.literal("YT"), z.literal("MX"), z.literal("FM"), z.literal("MD"), z.literal("MC"), z.literal("MN"), z.literal("ME"), z.literal("MS"), z.literal("MA"), z.literal("MZ"), z.literal("MM"), z.literal("NA"), z.literal("NR"), z.literal("NP"), z.literal("NL"), z.literal("NC"), z.literal("NZ"), z.literal("NI"), z.literal("NE"), z.literal("NG"), z.literal("NU"), z.literal("NF"), z.literal("MP"), z.literal("NO"), z.literal("OM"), z.literal("PK"), z.literal("PW"), z.literal("PS"), z.literal("PA"), z.literal("PG"), z.literal("PY"), z.literal("PE"), z.literal("PH"), z.literal("PN"), z.literal("PL"), z.literal("PT"), z.literal("PR"), z.literal("QA"), z.literal("RO"), z.literal("RU"), z.literal("RW"), z.literal("RE"), z.literal("BL"), z.literal("SH"), z.literal("KN"), z.literal("LC"), z.literal("MF"), z.literal("PM"), z.literal("VC"), z.literal("WS"), z.literal("SM"), z.literal("ST"), z.literal("SA"), z.literal("SN"), z.literal("RS"), z.literal("SC"), z.literal("SL"), z.literal("SG"), z.literal("SX"), z.literal("SK"), z.literal("SI"), z.literal("SB"), z.literal("SO"), z.literal("ZA"), z.literal("GS"), z.literal("SS"), z.literal("ES"), z.literal("LK"), z.literal("SD"), z.literal("SR"), z.literal("SJ"), z.literal("SZ"), z.literal("SE"), z.literal("CH"), z.literal("SY"), z.literal("TW"), z.literal("TJ"), z.literal("TZ"), z.literal("TH"), z.literal("TL"), z.literal("TG"), z.literal("TK"), z.literal("TO"), z.literal("TT"), z.literal("TN"), z.literal("TR"), z.literal("TM"), z.literal("TC"), z.literal("TV"), z.literal("UG"), z.literal("UA"), z.literal("AE"), z.literal("GB"), z.literal("US"), z.literal("UM"), z.literal("UY"), z.literal("UZ"), z.literal("VU"), z.literal("VE"), z.literal("VN"), z.literal("VG"), z.literal("VI"), z.literal("WF"), z.literal("EH"), z.literal("YE"), z.literal("ZM"), z.literal("ZW"), z.literal("unmapped_value"), z.literal(null)]).nullable().describe("The ISO3166-1 Alpha2 Code of the Country").optional(), "source_value": z.string().nullable().optional() })).nullable().describe("The citizenships of the Employee").optional(),
  "employment": z.string().optional(),
  "custom_fields": z.array(z.object({ "id": z.string().nullable().describe("Unique identifier").optional(), "remote_id": z.string().nullable().describe("Provider's unique identifier").optional(), "name": z.string().nullable().describe("The name of the custom field.").optional(), "value": z.string().nullable().describe("The value associated with the custom field.").optional(), "value_id": z.string().nullable().describe("The unique identifier for the value of the custom field.").optional(), "remote_value_id": z.string().nullable().describe("Provider's unique identifier for the value of the custom field.").optional() })).nullable().describe("The employee custom fields").optional(),
  "benefits": z.array(z.object({ "id": z.string().nullable().describe("Unique identifier").optional(), "name": z.string().nullable().describe("The name of the benefit").optional(), "benefit_type": z.string().optional(), "provider": z.string().nullable().describe("The provider of the benefit").optional(), "description": z.string().nullable().describe("The description of the benefit").optional(), "created_at": z.string().datetime({ offset: true }).nullable().describe("The date and time the benefit was created").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time the benefit was last updated").optional() })).nullable().describe("Current benefits of the employee").optional(),
  "employee_number": z.string().nullable().describe("The assigned employee number").optional(),
  "national_identity_numbers": z.array(z.object({ "value": z.string().nullable().optional(), "type": z.string().optional(), "country": z.string().optional() })).nullable().describe("The national identity numbers").optional(),
  "home_location": z.string().optional(),
  "work_location": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_invite_employee

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_time_off_requests

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time Off filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_employee_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "employee_id": z.string().nullable().describe("The employee ID").optional(),
  "approver_id": z.string().nullable().describe("The approver ID").optional(),
  "status": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start date of the time off request").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end date of the time off request").optional(),
  "start_half_day": z.boolean().nullable().describe("True if the start of the time off request begins half way through the day").optional(),
  "end_half_day": z.boolean().nullable().describe("True if the end of the time off request ends half way through the day").optional(),
  "time_off_policy_id": z.string().nullable().describe("The time off policy id associated with this time off request").optional(),
  "reason": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employees_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_update_employee_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "employee_id": z.string().nullable().describe("The employee ID").optional(),
  "approver_id": z.string().nullable().describe("The approver ID").optional(),
  "status": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start date of the time off request").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end date of the time off request").optional(),
  "start_half_day": z.boolean().nullable().describe("True if the start of the time off request begins half way through the day").optional(),
  "end_half_day": z.boolean().nullable().describe("True if the end of the time off request ends half way through the day").optional(),
  "time_off_policy_id": z.string().nullable().describe("The time off policy id associated with this time off request").optional(),
  "reason": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_cancel_employee_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_batch_upload_employee_document

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "items": z.array(z.object({ "name": z.string().nullable().describe("The filename of the file to upload").optional(), "file_format": z.string().optional(), "content": z.string().nullable().describe("The base64 encoded content of the file to upload").optional(), "category_id": z.string().nullable().describe("The categoryId of the documents").optional(), "path": z.string().nullable().describe("The path for the file to be uploaded to").optional(), "category": z.string().optional(), "confidential": z.string().optional() })).describe("The batch of items to create"),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_upload_employee_document

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "name": z.string().nullable().describe("The filename of the file to upload").optional(),
  "file_format": z.string().optional(),
  "content": z.string().nullable().describe("The base64 encoded content of the file to upload").optional(),
  "category_id": z.string().nullable().describe("The categoryId of the documents").optional(),
  "path": z.string().nullable().describe("The path for the file to be uploaded to").optional(),
  "category": z.string().optional(),
  "confidential": z.string().optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_download_employee_document

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "format": z.string().nullable().describe("The format to download the file in").optional(),
  "export_format": z.string().nullable().describe("The export format of the file").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_documents

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_document

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_categories

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_document_category

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_work_eligibility

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_employee_work_eligibility_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "document": z.string().optional(),
  "issued_by": z.string().optional(),
  "number": z.string().nullable().optional(),
  "sub_type": z.string().nullable().optional(),
  "type": z.string().optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().optional(),
  "valid_to": z.string().datetime({ offset: true }).nullable().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employees_work_eligibility

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_update_employee_work_eligibility_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "document": z.string().optional(),
  "issued_by": z.string().optional(),
  "number": z.string().nullable().optional(),
  "sub_type": z.string().nullable().optional(),
  "type": z.string().optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().optional(),
  "valid_to": z.string().datetime({ offset: true }).nullable().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_time_off_balances

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time Off Balance filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_time_off_balance

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employments

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_employments

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_employee_employment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.string().nullable().describe("Unique identifier").optional(),
  "unified_custom_fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustom Unified Fields configured in your StackOne project").optional(),
  "job_title": z.string().nullable().describe("The job title of the employee").optional(),
  "pay_rate": z.string().nullable().describe("The pay rate for the employee").optional(),
  "pay_period": z.string().optional(),
  "pay_frequency": z.string().optional(),
  "pay_currency": z.string().nullable().describe("The currency used for pay").optional(),
  "employment_type": z.string().optional(),
  "employment_contract_type": z.string().optional(),
  "work_time": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_employment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_update_employee_employment

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "b_id": z.string().nullable().describe("Unique identifier").optional(),
  "unified_custom_fields": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nCustom Unified Fields configured in your StackOne project").optional(),
  "job_title": z.string().nullable().describe("The job title of the employee").optional(),
  "pay_rate": z.string().nullable().describe("The pay rate for the employee").optional(),
  "pay_period": z.string().optional(),
  "pay_frequency": z.string().optional(),
  "pay_currency": z.string().nullable().describe("The currency used for pay").optional(),
  "employment_type": z.string().optional(),
  "employment_contract_type": z.string().optional(),
  "work_time": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_locations

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_location

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_time_off_requests

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time Off filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "employee_id": z.string().nullable().describe("The employee ID").optional(),
  "approver_id": z.string().nullable().describe("The approver ID").optional(),
  "status": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start date of the time off request").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end date of the time off request").optional(),
  "start_half_day": z.boolean().nullable().describe("True if the start of the time off request begins half way through the day").optional(),
  "end_half_day": z.boolean().nullable().describe("True if the end of the time off request ends half way through the day").optional(),
  "time_off_policy_id": z.string().nullable().describe("The time off policy id associated with this time off request").optional(),
  "reason": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "expand": z.string().nullable().describe("The comma separated list of fields that will be expanded in the response").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_update_time_off_request

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "employee_id": z.string().nullable().describe("The employee ID").optional(),
  "approver_id": z.string().nullable().describe("The approver ID").optional(),
  "status": z.string().optional(),
  "start_date": z.string().datetime({ offset: true }).nullable().describe("The start date of the time off request").optional(),
  "end_date": z.string().datetime({ offset: true }).nullable().describe("The end date of the time off request").optional(),
  "start_half_day": z.boolean().nullable().describe("True if the start of the time off request begins half way through the day").optional(),
  "end_half_day": z.boolean().nullable().describe("True if the end of the time off request ends half way through the day").optional(),
  "time_off_policy_id": z.string().nullable().describe("The time off policy id associated with this time off request").optional(),
  "reason": z.string().optional(),
  "passthrough": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nValue to pass through to the provider").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_time_off_types

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_time_off_type

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_time_entries

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time Entries filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_time_entries

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_benefits

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_benefit

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_groups

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_department_groups

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_cost_center_groups

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_team_groups

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_group

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_department_group

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_cost_center_group

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_team_group

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_jobs

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_job

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_skills

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nFilter parameters that allow greater customisation of the list response").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_create_employee_skill

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "b_id": z.string().nullable().describe("The ID associated with this skill").optional(),
  "name": z.string().nullable().describe("The name associated with this skill").optional(),
  "maximum_proficiency": z.string().optional(),
  "minimum_proficiency": z.string().optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_employee_skill

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "subResourceId": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_time_off_policies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time-Off Policies filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_get_time_off_policy

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```

### hris_list_employee_time_off_policies

**Environment variables**

- `USERNAME_PASSWORD_BASE64`

**Input schema**

```ts
{
  "id": z.string(),
  "raw": z.boolean().nullable().describe("Indicates that the raw request result should be returned in addition to the mapped result (default value is false)").optional(),
  "proxy": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nQuery parameters that can be used to pass through parameters to the underlying provider request by surrounding them with 'proxy' key").optional(),
  "fields": z.string().nullable().describe("The comma separated list of fields that will be returned in the response (if empty, all fields are returned)").optional(),
  "filter": z.record(z.any()).describe("[EXPANDABLE PARAMETER]:\nHRIS Time-Off Policies filters").optional(),
  "page": z.string().nullable().describe("The page number of the results to fetch").optional(),
  "page_size": z.string().nullable().describe("The number of results per page (default value is 25)").optional(),
  "next": z.string().nullable().describe("The unified cursor").optional(),
  "updated_after": z.string().nullable().describe("Use a string with a date to only select results updated after that given date").optional(),
  "x-account-id": z.string().describe("The account identifier")
}
```
