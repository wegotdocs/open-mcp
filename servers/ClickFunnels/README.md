# @open-mcp/ClickFunnels

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "ClickFunnels": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/ClickFunnels@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/ClickFunnels@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
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
npx @open-mcp/config add ClickFunnels \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --API_KEY=$API_KEY
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add ClickFunnels \
  .cursor/mcp.json \
  --API_KEY=$API_KEY
```

### Other

```bash
npx @open-mcp/config add ClickFunnels \
  /path/to/client/config.json \
  --API_KEY=$API_KEY
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "ClickFunnels": {
      "command": "npx",
      "args": ["-y", "@open-mcp/ClickFunnels"],
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

### listteams

**Environment variables**

- `API_KEY`

**Input schema**

- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### fetchteam

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateteam

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `team` (object)

### listusers

**Environment variables**

- `API_KEY`

**Input schema**

- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### fetchuser

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listworkspaces

**Environment variables**

- `API_KEY`

**Input schema**

- `team_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getworkspaces

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateworkspaces

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `workspace` (object)

### listcontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createcontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `contact` (object)

### getcontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `contact` (object)

### removecontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### gdpr_destroycontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### upsertcontacts

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `contact` (object)

### listcontactsappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `contact_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createcontactsappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `contact_id` (integer)
- `contacts_applied_tag` (object)

### getcontactsappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### removecontactsappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listcontactstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createcontactstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `contacts_tag` (object)

### getcontactstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecontactstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `contacts_tag` (object)

### removecontactstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listcourses

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getcourses

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listcoursesenrollments

**Environment variables**

- `API_KEY`

**Input schema**

- `course_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createcoursesenrollments

**Environment variables**

- `API_KEY`

**Input schema**

- `course_id` (integer)
- `courses_enrollment` (object)

### getcoursesenrollments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecoursesenrollments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `courses_enrollment` (object)

### listcoursessections

**Environment variables**

- `API_KEY`

**Input schema**

- `course_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getcoursessections

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecoursessections

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `courses_section` (object)

### listcourseslessons

**Environment variables**

- `API_KEY`

**Input schema**

- `section_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getcourseslessons

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatecourseslessons

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `courses_lesson` (object)

### listcourseslessoncompletions

**Environment variables**

- `API_KEY`

**Input schema**

- `course_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createcourseslessoncompletions

**Environment variables**

- `API_KEY`

**Input schema**

- `course_id` (integer)
- `courses_lesson_completion` (object)

### getcourseslessoncompletions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### removecourseslessoncompletions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listforms

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createforms

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `form` (object)

### getforms

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateforms

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `form` (object)

### removeforms

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listformsfieldsets

**Environment variables**

- `API_KEY`

**Input schema**

- `form_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createformsfieldsets

**Environment variables**

- `API_KEY`

**Input schema**

- `form_id` (integer)
- `forms_field_set` (object)

### getformsfieldsets

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateformsfieldsets

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `forms_field_set` (object)

### removeformsfieldsets

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `field_set_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `field_set_id` (integer)
- `forms_field` (object)

### getformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `forms_field` (object)

### removeformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### reorderformsfields

**Environment variables**

- `API_KEY`

**Input schema**

- `field_set_id` (integer)
- `ids_in_order` (array)

### listformsfieldsoptions

**Environment variables**

- `API_KEY`

**Input schema**

- `field_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createformsfieldsoptions

**Environment variables**

- `API_KEY`

**Input schema**

- `field_id` (integer)
- `forms_fields_option` (object)

### getformsfieldsoptions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateformsfieldsoptions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `forms_fields_option` (object)

### removeformsfieldsoptions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listformssubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `form_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createformssubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `form_id` (integer)
- `forms_submission` (object)

### getformssubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateformssubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `forms_submission` (object)

### removeformssubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listformssubmissionsanswers

**Environment variables**

- `API_KEY`

**Input schema**

- `submission_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createformssubmissionsanswers

**Environment variables**

- `API_KEY`

**Input schema**

- `submission_id` (integer)
- `forms_submissions_answer` (object)

### getformssubmissionsanswers

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateformssubmissionsanswers

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `forms_submissions_answer` (object)

### removeformssubmissionsanswers

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listformsubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### getformsubmissions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listfulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createfulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `fulfillment` (object)

### getfulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatefulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `fulfillment` (object)

### removefulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### cancelfulfillments

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listfulfillmentslocations

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createfulfillmentslocations

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `fulfillments_location` (object)

### getfulfillmentslocations

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatefulfillmentslocations

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `fulfillments_location` (object)

### removefulfillmentslocations

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listfunnels

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### getfunnels

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatefunnels

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `funnel` (object)

### listfunnelstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createfunnelstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `funnels_tag` (object)

### getfunnelstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatefunnelstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `funnels_tag` (object)

### removefunnelstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listimages

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createimages

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `image` (object)

### getimages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateimages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `image` (object)

### removeimages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listordersappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `order_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createordersappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `order_id` (integer)
- `orders_applied_tag` (object)

### getordersappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### removeordersappliedtags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listorders

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### getorders

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateorders

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `order` (object)

### listrestocks

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getrestock

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listordersinvoices

**Environment variables**

- `API_KEY`

**Input schema**

- `order_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### getordersinvoices

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listworkspaceordersinvoices

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### listorderstransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `order_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getorderstransactions

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listorderstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createorderstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `orders_tag` (object)

### getorderstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateorderstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `orders_tag` (object)

### removeorderstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listpages

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### getpages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatepages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `page` (object)

### listproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `product` (object)

### getproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `product` (object)

### archiveproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### unarchiveproducts

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listproductscollections

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createproductscollections

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `products_collection` (object)

### getproductscollections

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateproductscollections

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `products_collection` (object)

### listproductsprices

**Environment variables**

- `API_KEY`

**Input schema**

- `product_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createproductsprices

**Environment variables**

- `API_KEY`

**Input schema**

- `product_id` (integer)
- `products_price` (object)

### getproductsprices

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateproductsprices

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `products_price` (object)

### listproductsvariants

**Environment variables**

- `API_KEY`

**Input schema**

- `product_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createproductsvariants

**Environment variables**

- `API_KEY`

**Input schema**

- `product_id` (integer)
- `products_variant` (object)

### getproductsvariants

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateproductsvariants

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `products_variant` (object)

### listproductstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createproductstags

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `products_tag` (object)

### getproductstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateproductstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `products_tag` (object)

### removeproductstags

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listsalespipelines

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createsalespipelines

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `sales_pipeline` (object)

### getsalespipelines

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatesalespipelines

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `sales_pipeline` (object)

### listsalespipelinesstages

**Environment variables**

- `API_KEY`

**Input schema**

- `pipeline_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createsalespipelinesstages

**Environment variables**

- `API_KEY`

**Input schema**

- `pipeline_id` (integer)
- `sales_pipelines_stage` (object)

### getsalespipelinesstages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatesalespipelinesstages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `sales_pipelines_stage` (object)

### removesalespipelinesstages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listsalesopportunities

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createsalesopportunities

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `sales_opportunity` (object)

### getsalesopportunities

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatesalesopportunities

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `sales_opportunity` (object)

### removesalesopportunities

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listsalesopportunitiesnotes

**Environment variables**

- `API_KEY`

**Input schema**

- `opportunity_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)
- `filter` (object)

### createsalesopportunitiesnotes

**Environment variables**

- `API_KEY`

**Input schema**

- `opportunity_id` (integer)
- `sales_opportunities_note` (object)

### getsalesopportunitiesnotes

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatesalesopportunitiesnotes

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `sales_opportunities_note` (object)

### removesalesopportunitiesnotes

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippinglocationgroups

**Environment variables**

- `API_KEY`

**Input schema**

- `profile_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getshippinglocationgroups

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippingpackages

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createshippingpackages

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `shipping_package` (object)

### getshippingpackages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateshippingpackages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `shipping_package` (object)

### removeshippingpackages

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippingprofiles

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createshippingprofiles

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `shipping_profile` (object)

### getshippingprofiles

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateshippingprofiles

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `shipping_profile` (object)

### removeshippingprofiles

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippingrates

**Environment variables**

- `API_KEY`

**Input schema**

- `zone_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createshippingrates

**Environment variables**

- `API_KEY`

**Input schema**

- `zone_id` (integer)
- `shipping_rate` (object)

### getshippingrates

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateshippingrates

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `shipping_rate` (object)

### removeshippingrates

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippingzones

**Environment variables**

- `API_KEY`

**Input schema**

- `location_group_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createshippingzones

**Environment variables**

- `API_KEY`

**Input schema**

- `location_group_id` (integer)
- `shipping_zone` (object)

### getshippingzones

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateshippingzones

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `shipping_zone` (object)

### removeshippingzones

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listshippingratesnames

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createshippingratesnames

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `shipping_rates_name` (object)

### getshippingratesnames

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updateshippingratesnames

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `shipping_rates_name` (object)

### removeshippingratesnames

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### liststores

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createstores

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `store` (object)

### getstores

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatestores

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `store` (object)

### removestores

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### liststyles

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### listthemes

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getthemes

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatethemes

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `theme` (object)

### listwebhooksoutgoingendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### createwebhooksoutgoingendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `webhooks_outgoing_endpoint` (object)

### getwebhooksoutgoingendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### updatewebhooksoutgoingendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
- `webhooks_outgoing_endpoint` (object)

### removewebhooksoutgoingendpoints

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)

### listwebhooksoutgoingevents

**Environment variables**

- `API_KEY`

**Input schema**

- `workspace_id` (integer)
- `after` (string)
- `sort_order` (string)
- `sort_property` (string)

### getwebhooksoutgoingevents

**Environment variables**

- `API_KEY`

**Input schema**

- `id` (string)
