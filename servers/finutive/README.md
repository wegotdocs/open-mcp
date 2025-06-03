# @open-mcp/finutive

## Using the remote server

To use the hosted Streamable HTTP server, add the following to your client config:

```json
{
  "mcpServers": {
    "finutive": {
      "transport": "streamableHttp",
      "url": "https://mcp.open-mcp.org/api/server/finutive@latest/mcp"
    }
  }
}
```

#### Forwarding variables

You can forward "environment" variables to the remote server by including them in the request headers or URL query string (headers take precedence). Just prefix the variable name with `FORWARD_VAR_` like so:

```ini
https://mcp.open-mcp.org/api/server/finutive@latest/mcp?FORWARD_VAR_OPEN_MCP_BASE_URL=https%3A%2F%2Fapi.example.com
```

<Callout title="Security" type="warn">
  Sending authentication tokens as forwarded variables is not recommended
</Callout>

## Installing locally

If you want to run the server locally on your own machine instead of using the remote server, first set the environment variables as shell variables:

```bash
WZU='...'
```

Then use the OpenMCP config CLI to add the server to your MCP client:

### Claude desktop

```bash
npx @open-mcp/config add finutive \
  ~/Library/Application\ Support/Claude/claude_desktop_config.json \
  --WZU=$WZU
```

### Cursor

Run this from the root of your project directory or, to add to all cursor projects, run it from your home directory `~`.

```bash
npx @open-mcp/config add finutive \
  .cursor/mcp.json \
  --WZU=$WZU
```

### Other

```bash
npx @open-mcp/config add finutive \
  /path/to/client/config.json \
  --WZU=$WZU
```

### Manually

If you don't want to use the helper above, add the following to your MCP client config manually:

```json
{
  "mcpServers": {
    "finutive": {
      "command": "npx",
      "args": ["-y", "@open-mcp/finutive"],
      "env": {"WZU":"..."}
    }
  }
}
```

## Environment variables

- `OPEN_MCP_BASE_URL` - overwrites the base URL of every tool's underlying API request
- `WZU` - gets sent to the API provider

## Tools

### expandSchema

Expand the input schema for a tool before calling the tool

**Input schema**

- `toolName` (string)
- `jsonPointers` (array)

### executegetdeallabels

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### executeputdeallabel

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `name` (string)
- `type` (string)

### executepostdeallabel

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `name` (string)
- `type` (string)

### executeputbusinessdeallabel

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `deal_label_ids` (array)
- `gclid` (string)
- `one_off` (integer)
- `monthly_value` (integer)

### getbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### updatebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `business_name` (string)
- `phone` (string)
- `user_name` (string)
- `tipology` (string)
- `email` (string)
- `english` (boolean)
- `gclid` (string)
- `one_off` (integer)
- `deal_labels` (array)
- `monthly_value` (integer)
- `opportunity` (boolean)
- `notes` (string)
- `notes_docs` (array)
- `mailhost` (string)
- `password` (string)

### deletebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### putcompanydata

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `cif` (string)
- `zip` (string)
- `address` (string)
- `email` (string)
- `web` (string)
- `city` (string)
- `state` (string)
- `name` (string)
- `tel` (string)
- `signature_hash` (string)
- `signature` (string)
- `email_extra` (array)
- `send_to_email_extra` (boolean)
- `default_account_tax_payment` (string)
- `manager_use_accounts` (string)
- `roi` (boolean)
- `business_current_activity` (string)
- `no_taxable_activity` (boolean)
- `business_type` (string)
- `cnae` (string)
- `address_affectation` (integer)
- `start_company_date` (string)
- `company_constitution_date` (string)
- `documents` (string)
- `payment_taxes_not_postponed` (string)
- `payment_taxes_postponed` (string)
- `accounting_period` (string)
- `send_automatic_taxes` (boolean)
- `company_regimen_taxes` (string)
- `startup_certificate` (integer)
- `currency_id` (string)
- `due_date` (string)
- `issueDate` (string)
- `selected_account` (string)
- `exact_percentage_petrol_deductible` (integer)
- `deductible_petrol` (string)
- `deductible_daily_subsistance` (string)
- `sage_start_period` (string)
- `accounting_software` (integer)
- `sage_type_provider` (string)
- `show_sample_modal` (boolean)
- `invoice_or_sample` (boolean)
- `maximum_quantity_to_auto_process` (number)
- `language` (string)
- `create_new_series_in_auto_process` (boolean)
- `logo` (object)

### getnotifications

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### putnotifications

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getlaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)

### updatelaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)
- `actual_step` (string)
- `next_step` (string)
- `value` (string)
- `toggles` (string)
- `manager_tips` (string)
- `no_send_notification` (boolean)
- `date` (string)
- `linked_file` (string)

### resetlaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)

### uploadlaboraldocuments

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)
- `documents` (array)
- `button` (string)

### movelaboraldocument

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)
- `path` (string)
- `resource` (string)

### cancellaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)

### getlaboralcontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_id` (string)

### updatecontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_id` (string)
- `user_id` (string)
- `modification_process` (string)
- `automate_payroll` (integer)
- `date_contract` (string)
- `birthdate` (string)
- `title_date` (string)
- `seeker_date` (string)
- `start_date` (string)
- `end_date` (string)
- `replaces_to_limit_date` (string)
- `hour` (string)
- `number_social_security` (string)
- `dni` (string)
- `firstname` (string)
- `surname1` (string)
- `surname2` (string)
- `previously_worked_company` (integer)
- `origin_city` (string)
- `origin_province` (string)
- `civil_status` (string)
- `nationality` (string)
- `number_children` (integer)
- `address` (string)
- `zip` (string)
- `population` (string)
- `province` (string)
- `country` (string)
- `phone` (string)
- `mobile_phone` (string)
- `email` (string)
- `iban` (string)
- `title` (string)
- `job_functions` (string)
- `category` (string)
- `business_name` (string)
- `hours` (integer)
- `hours_definition` (string)
- `hours_by_days` (string)
- `days` (string)
- `replaces_to_person` (string)
- `replaces_affiliation_number` (string)
- `replaces_cause` (string)
- `observations` (string)
- `job_seeker` (integer)
- `youth_guarantee_fund` (integer)
- `salary` (number)
- `contract_type` (string)
- `contract_reason` (string)
- `work_in_weekend` (integer)
- `notify_minimum_salary` (integer)
- `account` (string)
- `time_offset` (integer)
- `trial_period` (integer)
- `trial_period_condition` (integer)
- `number_payments` (integer)
- `number_payments_condition` (integer)
- `headquarter` (string)
- `irpf_worker` (integer)
- `irpf_perceived` (integer)
- `irpf_retained` (integer)
- `project_details` (string)
- `extra_remuneration_concepts` (string)
- `dni_or_nif` (string)
- `detailed_timetable` (string)
- `dni_files` (array)
- `academic_files` (array)
- `bank_files` (array)
- `model145` (array)
- `signed_contract` (string)
- `last_payrolls` (array)
- `scholarship_files` (array)
- `attached_scholarship_files` (array)
- `create_flow` (integer)

### indefinitecontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_id` (string)
- `observations` (string)
- `effective_date` (string)

### extensioncontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_id` (string)
- `observations` (string)
- `end_date` (string)
- `id` (string)

### getlaboralterminationcontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `termination_contract_id` (string)

### updateterminationcontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `termination_contract_id` (string)
- `user_id` (string)
- `firstname` (string)
- `surname1` (string)
- `surname2` (string)
- `dni` (string)
- `deletion_type` (string)
- `dismissal_type` (string)
- `dismissal_cause` (string)
- `advice_type` (string)
- `forewarning` (integer)
- `pending_holidays` (integer)
- `handicapped` (integer)
- `holidays_enjoyed_current_year` (integer)
- `effective_date` (string)
- `timezone_offset` (integer)
- `observations` (string)

### updatelaboralcontractmodification

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_modification_id` (string)
- `b_business_id` (string)
- `contract_id` (string)
- `temporality` (string)
- `value` (string)
- `status` (string)
- `contract_modification_timestamp` (integer)
- `job_functions` (string)
- `category` (string)
- `start_date` (string)
- `end_date` (string)
- `hours` (integer)
- `hours_definition` (string)
- `hours_by_days` (string)
- `days` (string)
- `replaces_to_person` (string)
- `replaces_to_limit_date` (string)
- `replaces_affiliation_number` (string)
- `replaces_cause` (string)
- `observations` (string)
- `salary_year` (integer)
- `type` (string)
- `account_id` (string)
- `headquarter_id` (string)
- `contract_reason` (string)
- `work_in_weekend` (boolean)
- `notify_minimum_salary` (boolean)
- `trial_period` (string)
- `trial_period_condition` (integer)
- `number_payments` (integer)
- `number_payments_condition` (integer)
- `irpf_worker` (integer)
- `irpf_perceived` (integer)
- `irpf_retained` (integer)
- `project_details` (string)
- `email` (string)
- `date_submit` (string)

### deletecontractmodification

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_modification_id` (string)

### getuserdashboardlayout

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### updatedashboardlayout

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getsectionbyid

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)

### updatesection

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `name` (string)
- `category` (string)
- `roles` (array)
- `priority` (integer)
- `tool_id` (string)
- `service_id` (string)
- `default_width` (integer)
- `default_height` (integer)
- `is_default_for_roles` (array)
- `min_version` (integer)
- `sage_active_dependency` (boolean)

### deletesection

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)

### updatecontractstatus

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `request` (object)

### changemailbox

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `mailbox` (string)

### savebusinesscreationtype

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `business_type` (string)

### sendfqemail

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### movebusinesscreationfiles

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `docs` (array)

### putbusinesscreationfield

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `field` (string)
- `value` (string)

### conciliatetransaction

**Environment variables**

- `WZU`

**Input schema**

- `transaction_id` (string)
- `element_id` (string)
- `element_type` (string)
- `autoconciliated` (integer)

### deleteconciliation

**Environment variables**

- `WZU`

**Input schema**

- `transaction_id` (string)
- `element_id` (string)
- `element_type` (string)

### assigncategorytotransaction

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `transaction_id` (string)
- `category_id` (string)

### counttransactionforanalytics

**Environment variables**

- `WZU`

**Input schema**

- `transaction_id` (string)
- `is_checked` (boolean)

### rejecttransactionsuggestion

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `suggestion_id` (string)

### updatebankaccountname

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `name` (string)
- `id` (string)
- `cuenta_impuestos_por_defecto` (integer)
- `default_invoice_account` (integer)

### enableaccount

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `account_id` (string)

### getproductbyid

**Environment variables**

- `WZU`

**Input schema**

- `productId` (string)

### updateproduct

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `id` (string)
- `name` (string)
- `price` (number)
- `description_text` (string)
- `taxes` (number)
- `is_product_or_service` (string)

### deleteproductbyid

**Environment variables**

- `WZU`

**Input schema**

- `productId` (string)

### updatemailtemplates

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `business_id` (string)
- `name` (string)
- `subject` (string)
- `content` (string)
- `base_color` (string)
- `text_color` (string)
- `show_payment_type` (boolean)
- `show_signature` (boolean)
- `editable` (boolean)
- `deleted` (boolean)

### deletemailtemplates

**Environment variables**

- `WZU`

**Input schema**

- `templateId` (string)
- `businessId` (string)

### getlistinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `start` (integer)
- `length` (integer)
- `order_column` (integer)
- `order_dir` (string)
- `status` (string)
- `status_payment` (string)
- `recurrency` (integer)
- `query` (string)
- `type` (string)
- `start_date` (string)
- `end_date` (string)
- `start_registration_date` (string)
- `end_registration_date` (string)
- `uploaded_start_date` (string)
- `uploaded_end_date` (string)
- `tax_regime` (string)
- `serie` (string)
- `serie_out` (string)
- `stakeholder` (string)
- `product` (string)
- `activity_line` (string)
- `accounting_account` (string)
- `irpf` (integer)
- `amount_min` (number)
- `amount_max` (number)
- `get_remittance_data` (boolean)
- `sage` (integer)
- `special_free_treatment` (boolean)
- `back` (boolean)
- `select_all` (boolean)
- `get_finutive_client_status` (boolean)
- `ids` (string)

### putinvoicedata

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `due_date` (string)
- `status` (string)
- `invoice_id` (string)
- `invoice_number` (string)
- `company_name` (string)
- `company_cif` (string)
- `company_address` (string)
- `company_city` (string)
- `company_zip` (string)
- `client_id` (string)
- `client_name` (string)
- `client_cif` (string)
- `client_address` (string)
- `products` (array)
- `issuanceDate` (string)
- `description` (string)
- `payment_method` (string)
- `bank_account` (string)
- `language` (string)
- `currency` (string)
- `apply_irpf` (boolean)
- `irpf` (string)
- `equivalence_surcharge` (number)
- `recurrency` (boolean)
- `taxes_title` (string)
- `withholdings_title` (string)
- `account_name` (string)
- `account_iban` (string)
- `transaction_id` (string)
- `type` (string)
- `client_zip` (string)
- `client_city` (string)
- `prefix_id` (string)
- `start_of_period` (string)
- `accounting_account` (string)
- `tax_regime` (string)
- `type_activity` (string)
- `price_definition` (string)
- `line_activities` (string)
- `comment_sii` (string)
- `irpf_select` (string)
- `send_by_email` (boolean)
- `email_template_id` (string)
- `template_id` (string)
- `document` (object)
- `generate_document` (boolean)
- `exchange_rate` (number)
- `invoice_tags_ids` (string)
- `operations_by_product` (boolean)
- `special_free_treatment` (boolean)
- `special_free_treatment_data` (object)

### getinvoicetemplate

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `templateId` (string)

### updateinvoicetemplate

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `templateId` (string)
- `name` (string)

### deleteinvoicetemplate

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `templateId` (string)

### updatetag

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `tagId` (string)
- `name` (string)
- `id` (string)
- `color` (string)

### deletetag

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `tagId` (string)

### showsamplemodal

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `show_modal` (boolean)
- `show_official_invoice` (boolean)

### putrecurrentinvoicedata

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `due_date` (string)
- `status` (string)
- `invoice_id` (string)
- `invoice_number` (string)
- `company_name` (string)
- `company_cif` (string)
- `company_address` (string)
- `company_city` (string)
- `company_zip` (string)
- `client_id` (string)
- `client_name` (string)
- `client_cif` (string)
- `client_address` (string)
- `products` (array)
- `issuanceDate` (string)
- `description` (string)
- `payment_method` (string)
- `bank_account` (string)
- `language` (string)
- `currency` (string)
- `apply_irpf` (boolean)
- `irpf` (string)
- `equivalence_surcharge` (number)
- `recurrency` (boolean)
- `taxes_title` (string)
- `withholdings_title` (string)
- `account_name` (string)
- `account_iban` (string)
- `transaction_id` (string)
- `type` (string)
- `client_zip` (string)
- `client_city` (string)
- `prefix_id` (string)
- `start_of_period` (string)
- `accounting_account` (string)
- `tax_regime` (string)
- `type_activity` (string)
- `price_definition` (string)
- `line_activities` (string)
- `comment_sii` (string)
- `irpf_select` (string)
- `send_by_email` (boolean)
- `email_template_id` (string)
- `template_id` (string)
- `document` (object)
- `generate_document` (boolean)
- `exchange_rate` (number)
- `invoice_tags_ids` (string)
- `operations_by_product` (boolean)
- `special_free_treatment` (boolean)
- `special_free_treatment_data` (object)
- `periodicity` (string)
- `first_invoice` (string)
- `pay_day` (string)
- `set_next_at_first_day` (boolean)
- `without_last_pay_date` (boolean)
- `last_pay_date` (string)

### putmultipleinvoicedata

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `due_date` (string)
- `status` (string)
- `invoice_id` (string)
- `invoice_number` (string)
- `company_name` (string)
- `company_cif` (string)
- `company_address` (string)
- `company_city` (string)
- `company_zip` (string)
- `client_id` (string)
- `client_name` (string)
- `client_cif` (string)
- `client_address` (string)
- `products` (array)
- `issuanceDate` (string)
- `description` (string)
- `payment_method` (string)
- `bank_account` (string)
- `language` (string)
- `currency` (string)
- `apply_irpf` (boolean)
- `irpf` (string)
- `equivalence_surcharge` (number)
- `recurrency` (boolean)
- `taxes_title` (string)
- `withholdings_title` (string)
- `account_name` (string)
- `account_iban` (string)
- `transaction_id` (string)
- `type` (string)
- `client_zip` (string)
- `client_city` (string)
- `prefix_id` (string)
- `start_of_period` (string)
- `accounting_account` (string)
- `tax_regime` (string)
- `type_activity` (string)
- `price_definition` (string)
- `line_activities` (string)
- `comment_sii` (string)
- `irpf_select` (string)
- `send_by_email` (boolean)
- `email_template_id` (string)
- `template_id` (string)
- `document` (object)
- `generate_document` (boolean)
- `exchange_rate` (number)
- `invoice_tags_ids` (string)
- `operations_by_product` (boolean)
- `special_free_treatment` (boolean)
- `special_free_treatment_data` (object)

### updatecensusstatements

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `period` (string)
- `model` (string)
- `csv` (string)
- `value` (number)

### updatecensusstatementsmassive

**Environment variables**

- `WZU`

**Input schema**

- `period` (string)
- `model` (string)
- `businessIds` (array)

### editcontactrole

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `business_contact_id` (string)
- `role` (string)

### putupdatenotificationbusiness

**Environment variables**

- `WZU`

**Input schema**

- `notification_id` (string)
- `name` (string)
- `title` (string)
- `description` (string)
- `button_text` (string)
- `link` (string)
- `expires` (boolean)
- `active_until` (string)
- `visible_since` (string)
- `all_businesses` (boolean)
- `businesses` (array)

### deleteupdatenotificationbyid

**Environment variables**

- `WZU`

**Input schema**

- `notification_id` (string)

### edittimetrackerrecord

**Environment variables**

- `WZU`

**Input schema**

- `id_edit` (string)
- `start_date` (string)
- `end_date` (string)
- `manager_id` (string)
- `business_id` (string)
- `service_id` (string)
- `type_of_register` (string)
- `manager_helped_id` (string)
- `is_edited` (boolean)
- `reason_edited` (string)
- `delete` (boolean)
- `sub_item_id` (string)

### executegetadminservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### updateservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `name` (string)
- `description` (string)
- `english_name` (string)
- `english_description` (string)
- `icon` (string)
- `status` (string)
- `onboarding` (boolean)
- `recurrent` (boolean)
- `products` (array)
- `file_types` (array)
- `url_landing` (string)
- `collaborator_email` (string)
- `email_content` (string)
- `email_attachments` (array)
- `counter` (integer)
- `outsourced` (boolean)
- `serie_id` (string)
- `external_category` (string)
- `ambitions` (array)
- `partner_privacy_policy` (string)
- `responsibles` (array)

### deleteservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### updateservicetag

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `tag_id` (string)
- `name` (string)
- `color` (string)

### deleteservicetag

**Environment variables**

- `WZU`

**Input schema**

- `tag_id` (string)

### updatemanagerservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `manager_id` (string)
- `max_clients` (integer)
- `is_responsible` (boolean)
- `responsible_id` (string)

### assignservicetomanager

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `manager_id` (string)
- `max_clients` (integer)
- `is_responsible` (boolean)
- `responsible_id` (string)

### deletemanagerservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `manager_id` (string)

### putservicetaginbusiness

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `tag_id` (string)
- `file_id` (string)

### deleteservicetaginbusiness

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `tag_id` (string)
- `file_id` (string)

### completeservicebusiness

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `file_id` (string)
- `completed` (integer)

### changeservicebusinessphase

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `file_id` (string)
- `phase` (string)
- `comment` (string)

### commentnpsservice

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)
- `explanation` (string)
- `id` (string)

### putmanagercosthour

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)
- `cost_hour` (integer)

### getmanagercontactdata

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)

### updatemanagercontactdata

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)
- `calendly` (string)
- `phone` (string)
- `whatsapp` (string)

### getmanagerbusinesses

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)

### assignmanagertobusinesses

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)
- `businesses_ids` (array)

### complementinvoice

**Environment variables**

- `WZU`

**Input schema**

- `invoice_id` (string)

### updatecensusperiodsticketstatus

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `period` (string)
- `value` (string)

### updatecensusperiodscsvstatus

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `period` (string)
- `value` (string)

### unrelateclient

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `stakeholder_id` (string)

### relateclient

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `stakeholder_id` (string)

### editbusinesscontact

**Environment variables**

- `WZU`

**Input schema**

- `business_contact_id` (string)
- `business_id` (string)
- `user_id` (string)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `phone_prefix` (string)
- `phone_number` (string)
- `relation_type` (string)
- `role` (string)
- `address` (string)

### putbusinesscreationstatusview

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `view_status` (string)

### changebusinesscreationstatus

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `status` (string)

### putbusinesscreationfiles

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `step` (integer)
- `provisional_due` (array)
- `due` (array)
- `doc21233600` (array)
- `doc21233601` (array)
- `doc21275254` (array)
- `doc21275255` (array)
- `doc21275256` (array)
- `doc21275643` (array)
- `cif` (array)
- `document036` (array)
- `constitution` (array)

### putbusinesscreationdates

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `company_constitution_date` (string)
- `start_company_date` (string)

### blockbusinesscreationfile

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `block` (integer)

### updateadmintransactionsubcategory

**Environment variables**

- `WZU`

**Input schema**

- `subcategory_id` (string)
- `name` (string)
- `icon` (string)
- `color` (string)
- `keywords` (string)
- `priority` (integer)
- `afterbanks_equivalent` (string)
- `applicable_to` (string)
- `suggestion_to_conciliate` (string)

### deleteadmintransactionsubcategory

**Environment variables**

- `WZU`

**Input schema**

- `subcategory_id` (string)

### webhookwannmepayment

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `checksum` (string)
- `checksum512` (string)
- `notificationType` (string)
- `receiptNumber` (string)
- `transactionCode` (string)
- `amount` (number)
- `statusCode` (string)
- `statusDescription` (string)
- `subStatusCode` (integer)
- `subStatusDescription` (string)
- `partnerReference1` (string)
- `partnerReference2` (string)
- `uniqueNotificationId` (string)
- `recurrentPaymentId` (string)
- `debtCaseId` (string)
- `errorCode` (string)
- `errorDescription` (string)
- `paymentMethod` (string)
- `partnerId` (string)
- `customField1` (string)
- `customField2` (string)
- `customField3` (string)
- `customField4` (string)
- `customField5` (string)
- `customField6` (string)

### handlegocardlesswebhook

**Environment variables**

- `WZU`

**Input schema**

- `Webhook-Signature` (string)

### impersonatestart

**Environment variables**

- `WZU`

**Input schema**

- `user_id` (string)

### changepassword

**Environment variables**

- `WZU`

**Input schema**

- `oldPassword` (string)
- `newPassword` (string)

### signup

**Environment variables**

- `WZU`

**Input schema**

- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `business_name` (string)

### signin

**Environment variables**

- `WZU`

**Input schema**

- `email` (string)
- `password` (string)

### recoverypassword

**Environment variables**

- `WZU`

**Input schema**

- `email` (string)

### createpassword

**Environment variables**

- `WZU`

**Input schema**

- `token` (string)
- `password` (string)

### createuserlog

**Environment variables**

- `WZU`

**Input schema**

- `type` (string)
- `extra_data` (object)
- `business_id` (string)
- `user_id` (string)

### impersonatestop

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### updatemail

**Environment variables**

- `WZU`

**Input schema**

- `newEmail` (string)
- `password` (string)

### updatemailconfirm

**Environment variables**

- `WZU`

**Input schema**

- `otp` (string)
- `mail` (string)

### getpersonaldata

**Environment variables**

- `WZU`

**Input schema**

- `userId` (string)

### updatepersonaldata

**Environment variables**

- `WZU`

**Input schema**

- `firstName` (string)
- `lastName` (string)
- `phone` (string)
- `language` (string)
- `role` (string)
- `avatar` (string)

### getclosenotificationbyid

**Environment variables**

- `WZU`

**Input schema**

- `notification_id` (string)

### postupdatenotificationsetclose

**Environment variables**

- `WZU`

**Input schema**

- `notification_id` (string)
- `closeDate` (string)
- `actualUser` (string)

### getticketnotes

**Environment variables**

- `WZU`

**Input schema**

- `ticketId` (string)

### createticketnote

**Environment variables**

- `WZU`

**Input schema**

- `ticketId` (string)
- `text` (string)
- `docs` (array)

### testscript

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### reloadsagetransactioncode

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### reloadprovidertaxesbysaleslinesfalseinvoices

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### reloadtaxesbysaleslinesinvoices

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### reloadinvoiceslines

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### reloadinvoices

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### reloadeqsurcharge

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### reloadallinvoicesfromupdatedat

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)
- `updatedAt` (string)

### createcensusdeclarationperiodsforbusiness

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### clearinvoices

**Environment variables**

- `WZU`

**Input schema**

- `invoiceIds` (array)
- `page` (integer)
- `pageSize` (integer)

### calculateonboardingstepslogs

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### reloadonboardingvalueforbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### forceabonotosageanddeletelogs

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getusernotifications

**Environment variables**

- `WZU`

**Input schema**

- `offset` (integer)
- `size` (integer)
- `read` (boolean)

### createusersnotifications

**Environment variables**

- `WZU`

**Input schema**

- `sendById` (string)
- `text` (string)
- `type` (string)
- `hash` (string)
- `silentPush` (boolean)
- `extraInfo` (object)
- `userIds` (array)

### setnotificationsasread

**Environment variables**

- `WZU`

**Input schema**

- `ids` (array)
- `all` (boolean)

### executemigrations

**Environment variables**

- `WZU`

**Input schema**

- `token` (string)
- `business_name` (string)
- `phone` (string)
- `user_name` (string)
- `tipology` (string)
- `email` (string)
- `english` (boolean)
- `gclid` (string)
- `one_off` (integer)
- `deal_labels` (array)
- `monthly_value` (integer)
- `opportunity` (boolean)
- `notes` (string)
- `notes_docs` (array)
- `mailhost` (string)
- `password` (string)

### postaccountterms

**Environment variables**

- `WZU`

**Input schema**

- `term_id` (string)

### docusignwebhook

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### uploaddocument

**Environment variables**

- `WZU`

**Input schema**

- `request` (object)

### uploaddocument_1

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### markconversationsasunread

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### markconversationsassaved

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### deleteconversationsassaved

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### markconversationsasread

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### executegetservices

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `getServicesRequestDto` (object)

### setservicebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `status` (string)
- `service_id` (string)
- `manager_id` (string)

### requestservicebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)
- `trigger_id` (string)

### enableservicebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)

### disableservicebusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)

### executeviewservicetrigger

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `trigger_id` (string)

### executecreatetriggerfeedback

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `trigger_id` (string)
- `view` (string)
- `feedback` (boolean)

### sendpromotionsemail

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `phone` (string)
- `email` (string)
- `name` (string)

### getclosepromotions

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### closepromotion

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### votenps

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `vote` (integer)

### votenpsservice

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `services` (array)

### setsatisfactionsurvey

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `question1` (string)
- `question2` (string)
- `question_services` (string)
- `other_services` (string)
- `question_not_satisfied` (string)
- `other_not_satisfied` (string)
- `question_anything_else` (string)
- `question_videocall` (boolean)
- `vote` (integer)

### votenpsmanager

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `manager_id` (string)
- `rating` (integer)
- `comments` (string)

### getnpsrequestclose

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)

### closenpsrequest

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `request_id` (string)
- `service_id` (string)

### getbusinessnotes

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `type` (string)

### createbusinessnote

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `text` (string)
- `docs` (array)
- `type` (string)

### migrateintelligenceland

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getlineactivities

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createorupdatelineactivities

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `b_business_id` (string)
- `line_activities` (array)

### setlastaccess

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### exportbusinesspayrolls

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)
- `fields` (string)

### checknewworkertriggers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createmedicalleave

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `medical_part` (string)
- `accident_cause` (string)

### getlaboralflows

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `size` (integer)
- `offset` (integer)
- `flow` (string)
- `responsible` (string)
- `start_date` (string)
- `end_date` (string)
- `status` (string)
- `date_type` (integer)
- `search` (string)

### createlaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `element_type` (string)
- `element_id` (string)
- `flow` (string)

### finishlaboralflow

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)
- `step_id` (string)

### getlaboralcontracts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `size` (integer)
- `offset` (integer)

### createcontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `modification_process` (string)
- `automate_payroll` (integer)
- `date_contract` (string)
- `birthdate` (string)
- `title_date` (string)
- `seeker_date` (string)
- `start_date` (string)
- `end_date` (string)
- `replaces_to_limit_date` (string)
- `hour` (string)
- `number_social_security` (string)
- `dni` (string)
- `firstname` (string)
- `surname1` (string)
- `surname2` (string)
- `previously_worked_company` (integer)
- `origin_city` (string)
- `origin_province` (string)
- `civil_status` (string)
- `nationality` (string)
- `number_children` (integer)
- `address` (string)
- `zip` (string)
- `population` (string)
- `province` (string)
- `country` (string)
- `phone` (string)
- `mobile_phone` (string)
- `email` (string)
- `iban` (string)
- `title` (string)
- `job_functions` (string)
- `category` (string)
- `business_name` (string)
- `hours` (integer)
- `hours_definition` (string)
- `hours_by_days` (string)
- `days` (string)
- `replaces_to_person` (string)
- `replaces_affiliation_number` (string)
- `replaces_cause` (string)
- `observations` (string)
- `job_seeker` (integer)
- `youth_guarantee_fund` (integer)
- `salary` (number)
- `contract_type` (string)
- `contract_reason` (string)
- `work_in_weekend` (integer)
- `notify_minimum_salary` (integer)
- `account` (string)
- `time_offset` (integer)
- `trial_period` (integer)
- `trial_period_condition` (integer)
- `number_payments` (integer)
- `number_payments_condition` (integer)
- `headquarter` (string)
- `irpf_worker` (integer)
- `irpf_perceived` (integer)
- `irpf_retained` (integer)
- `project_details` (string)
- `extra_remuneration_concepts` (string)
- `dni_or_nif` (string)
- `detailed_timetable` (string)
- `dni_files` (array)
- `academic_files` (array)
- `bank_files` (array)
- `model145` (array)
- `signed_contract` (string)
- `last_payrolls` (array)
- `scholarship_files` (array)
- `attached_scholarship_files` (array)
- `create_flow` (integer)

### getlaboralterminationcontracts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `getLaboralTerminationContractsRequestDto` (object)

### createterminationcontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `firstname` (string)
- `surname1` (string)
- `surname2` (string)
- `dni` (string)
- `deletion_type` (string)
- `dismissal_type` (string)
- `dismissal_cause` (string)
- `advice_type` (string)
- `forewarning` (integer)
- `pending_holidays` (integer)
- `handicapped` (integer)
- `holidays_enjoyed_current_year` (integer)
- `effective_date` (string)
- `timezone_offset` (integer)
- `observations` (string)

### getlaboralcontractmodifications

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `size` (integer)
- `offset` (integer)
- `start_date` (string)
- `end_date` (string)
- `status` (string)

### createlaboralcontractmodification

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `b_business_id` (string)
- `contract_id` (string)
- `temporality` (string)
- `value` (string)
- `status` (string)
- `contract_modification_timestamp` (integer)
- `job_functions` (string)
- `category` (string)
- `start_date` (string)
- `end_date` (string)
- `hours` (integer)
- `hours_definition` (string)
- `hours_by_days` (string)
- `days` (string)
- `replaces_to_person` (string)
- `replaces_to_limit_date` (string)
- `replaces_affiliation_number` (string)
- `replaces_cause` (string)
- `observations` (string)
- `salary_year` (integer)
- `type` (string)
- `account_id` (string)
- `headquarter_id` (string)
- `contract_reason` (string)
- `work_in_weekend` (boolean)
- `notify_minimum_salary` (boolean)
- `trial_period` (string)
- `trial_period_condition` (integer)
- `number_payments` (integer)
- `number_payments_condition` (integer)
- `irpf_worker` (integer)
- `irpf_perceived` (integer)
- `irpf_retained` (integer)
- `project_details` (string)
- `email` (string)
- `date_submit` (string)

### inviteusertobusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `firstname` (string)
- `lastname` (string)
- `email` (string)
- `role` (string)
- `tools` (array)

### getheadquarters

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createorupdateheadquarters

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `headquarters` (array)

### getexpenseaccounts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createorupdateexpenseaccounts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `b_business_id` (string)
- `expense_accounts` (array)
- `limit_char_expense_account` (integer)
- `limit_char_accounting_account` (integer)

### renamedocument

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `document_id` (string)
- `new_name` (string)

### uploaddocument_2

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `request` (object)

### updateinvoicetype

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `id_edit` (string)
- `type` (string)

### updatecomments

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `hash` (string)

### movetofolder

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `items` (array)
- `folder_id` (string)
- `folder_special_type` (string)
- `type` (string)

### createfolder

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `parent_id` (string)
- `name` (string)

### renamefolder

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `folder_id` (string)
- `new_name` (string)

### exportdocumentzip

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### setdefaultbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getallsections

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createsection

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `category` (string)
- `roles` (array)
- `priority` (integer)
- `tool_id` (string)
- `service_id` (string)
- `default_width` (integer)
- `default_height` (integer)
- `is_default_for_roles` (array)
- `min_version` (integer)
- `sage_active_dependency` (boolean)

### likemessage

**Environment variables**

- `WZU`

**Input schema**

- `message_id` (string)

### unlikemessage

**Environment variables**

- `WZU`

**Input schema**

- `message_id` (string)

### sendmessage

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `title` (string)
- `message` (string)
- `responsible` (string)
- `destinataries` (array)
- `element_type` (string)
- `element_id` (string)
- `attachments` (array)
- `conversation_id` (string)
- `is_public` (boolean)
- `is_closed` (boolean)
- `users_cc` (array)

### processemailmessage

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `email_id` (string)
- `from_email` (string)
- `subject` (string)
- `body` (string)
- `attachments` (array)
- `conversation_id` (string)
- `tag_service` (string)

### saveconversation

**Environment variables**

- `WZU`

**Input schema**

- `conversation_id` (string)

### unsaveconversation

**Environment variables**

- `WZU`

**Input schema**

- `conversation_id` (string)

### changeconversationresponsible

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `conversation_id` (string)
- `responsible_id` (string)

### getbusinesscreation

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### updatebusinesscreation

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `business_type` (string)
- `start_company_date` (string)
- `completed` (string)
- `name_mode` (string)
- `legal_name` (string)
- `name_granted_file` (array)
- `city` (string)
- `iban` (string)
- `desired_constitution_company_date` (string)
- `activity_direccion` (string)
- `activity_postal_code` (string)
- `activity_town` (string)
- `activity_province` (string)
- `personal_address` (string)
- `personal_zipcode` (string)
- `personal_town` (string)
- `personal_province` (string)
- `social_direccion` (string)
- `social_postal_code` (string)
- `social_town` (string)
- `social_province` (string)
- `fiscal_direccion` (string)
- `fiscal_postal_code` (string)
- `fiscal_town` (string)
- `fiscal_province` (string)
- `meters_local` (integer)
- `meters_activity` (integer)
- `principal_activity` (string)
- `secondary_activity` (string)
- `regimen_iva` (string)
- `regimen_irpf` (string)
- `intracomunitario` (string)
- `vivir_en_extranjero` (string)
- `bank_account` (string)
- `civil_state` (string)
- `civil_state_date` (string)
- `name` (string)
- `lastname_1` (string)
- `lastname_2` (string)
- `dni` (string)
- `passport` (string)
- `social_security` (string)
- `sell_eu` (string)
- `buy_eu` (string)
- `suscribe_services` (string)
- `job_seeker` (string)
- `activity_place` (string)
- `cadastral_reference` (string)
- `birth_date` (string)
- `nationality` (string)
- `document_type` (string)
- `have_social_security_number` (string)
- `birth_place` (string)
- `birth_province` (string)
- `birth_country` (string)
- `father_name_surname` (string)
- `mother_name_surname` (string)
- `mother_single_surname` (string)
- `contribution_base_select` (string)
- `contribution_base_number` (string)
- `termination_of_activity_select` (string)
- `mutual_company` (string)
- `youth` (string)
- `dni_file` (array)
- `sepa_file` (array)
- `roi_file` (array)
- `europa_out` (string)
- `monetary_contribution` (string)
- `availability` (string)
- `amount_contribution` (string)
- `contibution_objects` (string)
- `partners` (array)
- `capital_document` (array)
- `simplify` (string)
- `name1` (string)
- `name2` (string)
- `name3` (string)
- `name4` (string)
- `name5` (string)

### createbusinesscreationpartner

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### createbusinesscreationmessage

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `message` (string)
- `status` (string)

### blockbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### exporttransactions

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `ids` (array)

### getbankalerts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `requestDto` (object)

### createbankalert

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `id` (string)
- `type` (string)

### afterbanks

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `action` (string)
- `bank_id` (string)
- `user_data` (object)
- `account_id` (string)
- `start_date` (string)
- `multiaccount` (string)
- `reload` (string)
- `otp_data` (object)

### afterbankspsd2

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service` (string)
- `products` (string)
- `start_date` (string)
- `action` (string)

### getbusinessaccounts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `requestDto` (object)

### createorupdatebankaccount

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `bank` (string)
- `name` (string)
- `iban` (string)
- `bank_name` (string)
- `user` (string)
- `password` (string)
- `id` (string)
- `cuenta_impuestos_por_defecto` (boolean)
- `default_invoice_account` (boolean)

### settaxaccount

**Environment variables**

- `WZU`

**Input schema**

- `account_id` (string)

### getlistclient

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `text` (string)
- `type` (string)
- `cif` (string)
- `size` (integer)
- `offset` (integer)
- `searchInGlobal` (boolean)

### putclientdata

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `id` (string)
- `cif` (string)
- `zip` (string)
- `address` (string)
- `email` (string)
- `city` (string)
- `business_name` (string)
- `tel` (string)
- `type` (array)
- `category` (string)
- `state` (string)
- `eu_country` (string)
- `roi` (boolean)
- `image_id` (string)
- `image_url` (string)
- `accounting_account` (string)
- `expense_account` (string)
- `line_activity` (string)
- `irpf` (string)
- `tax_regime` (string)
- `email_extra` (string)
- `iban` (string)
- `sepa_file` (string)
- `expense_account_client` (string)
- `expense_account_provider` (string)
- `include_country` (boolean)
- `activity_type` (string)
- `allow_provider_auto_processing` (boolean)
- `provider_max_quantity_auto_processing` (integer)
- `provider_default_currency_auto_processing` (string)

### exportstakeholders

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)
- `ids` (array)

### importstakeholders

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)

### stakeholdersglobalsearch

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `name` (string)
- `cif` (string)
- `size` (integer)
- `offset` (integer)

### importstakeholderfromglobal

**Environment variables**

- `WZU`

**Input schema**

- `globalId` (string)
- `businessId` (string)
- `type` (string)

### createseries

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `name` (string)
- `prefix` (string)
- `invoice_starter` (string)
- `is_default` (boolean)

### updateseriesdefault

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `serieId` (string)
- `is_default` (integer)

### getproductlist

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### createproduct

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `id` (string)
- `name` (string)
- `price` (number)
- `description_text` (string)
- `taxes` (number)
- `is_product_or_service` (string)

### exportproducts

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `ids` (array)

### getmailtemplates

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)

### createmailtemplates

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `business_id` (string)
- `name` (string)
- `subject` (string)
- `content` (string)
- `base_color` (string)
- `text_color` (string)
- `show_payment_type` (boolean)
- `show_signature` (boolean)
- `editable` (boolean)
- `deleted` (boolean)

### exportinvoicesuplidos

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)
- `start_date` (string)
- `end_date` (string)

### exportinvoice

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)
- `export_type` (string)
- `ids` (array)

### exportinvoicezip

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)
- `skip_exceptions` (boolean)
- `ids` (array)
- `include_individual` (boolean)
- `zip_pdfs` (boolean)

### setuploadedby

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)
- `uploadedById` (string)

### setpaymentstatus

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)
- `paymentStatusId` (string)

### setofficial

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)
- `is_official` (string)

### ocrinvoice

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)

### generatedocument

**Environment variables**

- `WZU`

**Input schema**

- `invoiceId` (string)

### forcegeneratedocument

**Environment variables**

- `WZU`

**Input schema**

- `invoiceId` (string)

### discardinvoice

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoice_id` (string)
- `reason` (string)
- `discard_text` (string)
- `dont_send_email` (boolean)

### updateaccountingaccountexternal

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)
- `accounting_account_id` (string)

### uploaddocument_3

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `type` (string)
- `force` (boolean)
- `client_id` (string)
- `client_cif` (string)

### getinvoicetimemetrics

**Environment variables**

- `WZU`

**Input schema**

- `request` (object)

### createinvoicetimemetrics

**Environment variables**

- `WZU`

**Input schema**

- `user_id` (string)
- `business_id` (string)
- `invoice_id` (string)
- `start_timestamp` (string)
- `end_timestamp` (string)

### createorupdateinvoicetemplate

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `business_id` (string)
- `template_id` (string)
- `name` (string)
- `stakeholder_id` (string)
- `payment_type` (string)
- `bank_account_invoice_id` (string)
- `language` (string)
- `currency` (string)
- `has_irpf` (boolean)
- `irpf_id` (string)
- `description` (string)
- `activity_type` (string)
- `price_definition` (string)
- `products_data` (array)
- `expense_account` (string)
- `activity_line` (string)
- `taxes_name` (string)
- `tax_regime` (string)
- `pdf_template` (string)
- `mail_template` (string)
- `enable_mail_template` (boolean)
- `serie` (string)
- `type` (string)
- `valid_vats` (array)

### getinvoicestags

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `name` (string)

### createtag

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `name` (string)
- `id` (string)
- `color` (string)

### associatetags

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `tag_ids` (string)
- `invoice_ids` (string)
- `mode` (string)

### exportinvoiceproducts

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `only_promotions` (boolean)
- `ids` (array)

### customizetemplate

**Environment variables**

- `WZU`

**Input schema**

- `templateId` (string)
- `business_id` (string)
- `width_logo` (integer)
- `bottom_text` (string)
- `font_family` (string)
- `color` (string)
- `logo_hash` (string)
- `name_template` (string)

### postlistinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `start` (integer)
- `length` (integer)
- `order` (integer)
- `order_dir` (string)
- `status` (string)
- `status_payment` (string)
- `recurrency` (integer)
- `query` (string)
- `type` (string)
- `start_date` (string)
- `end_date` (string)
- `start_registration_date` (string)
- `end_registration_date` (string)
- `upload_start_date` (string)
- `upload_end_date` (string)
- `tax_regime` (string)
- `serie` (string)
- `serie_out` (string)
- `stakeholder` (string)
- `product` (string)
- `activity_line` (string)
- `accounting_account` (string)
- `irpf` (integer)
- `amount_min` (number)
- `amount_max` (number)
- `get_remittance_data` (boolean)
- `sage` (integer)
- `special_free_treatment` (boolean)
- `back` (boolean)
- `select_all` (boolean)
- `get_finutive_client_status` (boolean)
- `ids` (string)

### getinvoicesimple

**Environment variables**

- `WZU`

**Input schema**

- `invoiceId` (string)

### createinvoicesimple

**Environment variables**

- `WZU`

**Input schema**

- `invoiceId` (string)
- `stakeholder_name` (string)
- `stakeholder_id` (string)
- `date` (string)
- `total_vat` (number)
- `total_amount` (number)
- `type` (string)
- `accounting_account` (string)
- `reference` (string)

### importinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### getinvoicesbyprocessingstatus

**Environment variables**

- `WZU`

**Input schema**

- `processingStatus` (string)
- `invoiceType` (string)

### sendemail

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoice_ids` (array)
- `stakeholder_ids` (array)

### sendinvoiceemails

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `business_id` (string)
- `invoices` (object)
- `subject` (string)
- `content` (string)
- `addressees` (array)
- `template_id` (string)
- `signature` (boolean)

### discardmassiveinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoice_id` (string)
- `reason` (string)
- `discard_text` (string)
- `dont_send_email` (boolean)

### postperiod

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `statement_id` (string)
- `period` (string)

### postdocumentcensusstatement

**Environment variables**

- `WZU`

**Input schema**

- `statement_id` (string)
- `file` (string)

### asociateticket

**Environment variables**

- `WZU`

**Input schema**

- `invoice_id` (string)
- `client_provider_id` (string)
- `client_provider_name` (string)
- `type` (string)
- `client_provider_cif` (string)

### getadmins_1

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### postadmins

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `admins_data` (array)

### getconversations

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `specialType` (string)
- `pageable` (object)

### createconversation

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `specialType` (string)

### exportexcel

**Environment variables**

- `WZU`

**Input schema**

- `businessIds` (array)

### getupdatenotifications

**Environment variables**

- `WZU`

**Input schema**

- `pageable` (object)

### postupdatenotification

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `title` (string)
- `description` (string)
- `button_text` (string)
- `link` (string)
- `expires` (boolean)
- `active_until` (string)
- `visible_since` (string)
- `all_businesses` (boolean)
- `businesses` (array)

### getupdatenotificationswithfilters

**Environment variables**

- `WZU`

**Input schema**

- `updateNotificationId` (string)
- `search` (string)

### postupdatenotificationfilter

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `update_notification` (string)
- `name` (string)
- `active` (boolean)
- `filter_type` (string)
- `filter_value` (string)
- `extra_value` (string)

### createsubitem

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `name` (string)
- `businessId` (string)
- `global` (boolean)

### stoptimetracker

**Environment variables**

- `WZU`

**Input schema**

- `timetracker_id` (string)

### starttimetracker

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `type_of_register` (string)
- `service_id` (string)
- `manager_helped_id` (string)
- `sub_item_id` (string)

### addtimetrackerrecord

**Environment variables**

- `WZU`

**Input schema**

- `start_date` (string)
- `end_date` (string)
- `manager_id` (string)
- `business_id` (string)
- `service_id` (string)
- `type_of_register` (string)
- `manager_helped_id` (string)
- `is_edited` (boolean)
- `reason_edited` (string)
- `delete` (boolean)
- `sub_item_id` (string)

### executelistadminservices

**Environment variables**

- `WZU`

**Input schema**

- `no_filter` (integer)
- `tag` (string)

### executecreateservice

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `description` (string)
- `name_english` (string)
- `description_english` (string)
- `icon` (string)
- `status` (string)
- `onboarding` (boolean)
- `recurrent` (boolean)
- `products` (array)
- `file_types` (array)
- `url_landing` (string)
- `collaborator_email` (string)
- `email_content` (string)
- `email_attachments` (string)
- `counter` (integer)
- `outsourced` (boolean)
- `serie_id` (string)
- `external_category` (string)
- `ambitions` (array)
- `partner_privacy_policy` (string)
- `responsibles` (array)

### getadminservicetags

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### executecreateservicetag

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `name` (string)
- `color` (string)

### getservicebusinessfilesettings

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `file_id` (string)

### saveservicebusinessfilesettings

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `files` (array)

### listservicebusinnesproducts

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)

### updateservicebusinnesproducts

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)

### createservicebusinessfile

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `id` (string)
- `file_id` (string)
- `phase` (string)
- `responsible` (string)
- `comment` (string)
- `name_custom_file` (string)
- `color_custom_file` (string)

### managepromotions

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `type` (string)

### exportnpsratings

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)
- `view_more` (integer)

### addservicetomanager

**Environment variables**

- `WZU`

**Input schema**

- `manager_id` (string)
- `service_id` (string)

### invitemanager

**Environment variables**

- `WZU`

**Input schema**

- `email` (string)
- `firstname` (string)
- `lastname` (string)
- `role` (string)

### importpayrolls

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### importemployees

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### createemployees

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### refreshinternalbilling

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)

### creategocardlesspayments

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)

### copyinvoicestowebintra

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)

### createinvoicesinclient

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)

### getinstanceserie

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### createseries_1

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `name` (string)
- `prefix` (string)
- `invoice_starter` (string)
- `is_default` (boolean)

### saveproperty

**Environment variables**

- `WZU`

**Input schema**

- `property_name` (string)
- `property_value` (string)

### addbusinesscontact

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `email` (string)
- `first_name` (string)
- `last_name` (string)
- `phone_prefix` (string)
- `phone_number` (string)
- `main_contact` (boolean)
- `relation_type` (string)
- `role` (string)
- `address` (string)

### getsignatureconfig

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### updatesignatureconfig

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `role` (string)
- `calendly` (string)
- `phone` (string)
- `service` (string)

### sendmessage_1

**Environment variables**

- `WZU`

**Input schema**

- `title` (string)
- `message` (string)
- `responsible` (string)
- `destinataries` (array)
- `attachments` (array)
- `is_closed` (boolean)

### openconversations

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### closeconversations

**Environment variables**

- `WZU`

**Input schema**

- `conversation_ids` (array)

### gettaxesemail

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `period` (string)
- `type` (string)

### sendtaxesemail

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `period` (string)
- `type` (string)
- `content` (string)

### sendcsvemail

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `content` (string)
- `csv_id` (string)
- `period` (string)

### getbusinessesbackoffice

**Environment variables**

- `WZU`

**Input schema**

- `size` (integer)
- `offset` (integer)
- `search` (string)

### createbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_name` (string)
- `phone` (string)
- `user_name` (string)
- `tipology` (string)
- `email` (string)
- `english` (boolean)
- `gclid` (string)
- `one_off` (integer)
- `deal_labels` (array)
- `monthly_value` (integer)
- `opportunity` (boolean)
- `notes` (string)
- `notes_docs` (array)
- `mailhost` (string)
- `password` (string)

### changeuserbusinessrole

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `role` (string)

### getuserbusinessemails

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)

### saveuserbusinessemails

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `alternative_emails` (string)

### inviteusertobusiness_1

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `firstname` (string)
- `lastname` (string)
- `email` (string)
- `role` (string)
- `tools` (array)

### updateinternalbilling

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `internal_billing_id` (string)
- `payment_method` (string)
- `price` (number)
- `discount_type` (string)
- `discount` (number)
- `responsable_id` (string)

### createrectifyinginternalbilling

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `internal_billing_id` (string)
- `price` (number)
- `vat_percentage` (number)
- `discount_type` (string)
- `discount` (number)
- `date` (string)
- `rectification_reason` (string)
- `payment_method` (string)

### createinvoice

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `internal_billing_id` (string)

### configuregocardless

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### sendstakeholderstosage

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### sendinvoicestosage

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoice_ids` (array)
- `force` (boolean)
- `complement` (boolean)

### sendinvoicesbyperiodtosage

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `period_id` (string)
- `invoice_ids` (array)

### migrateallbusinessestointelligenceland

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### importbusinessproductsfromexcel

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### validatebusinessproductsfromexcel

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### exportbusinessproductstoexcel

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### importbusinessesfromexcel

**Environment variables**

- `WZU`

**Input schema**

- `import_bank_account` (boolean)
- `stakeholder_business` (string)
- `manager_all_business_email` (string)
- `overwrite_type` (string)
- `period_name_to_import_census_information` (string)

### exportbusinessestoexcel

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### createbusinesscreationmessage_1

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `message` (string)
- `status` (string)

### createbank

**Environment variables**

- `WZU`

**Input schema**

- `bank_id` (string)
- `afterbanks_service` (string)
- `afterbanks_params` (string)
- `business_bank` (boolean)
- `name` (string)
- `active` (boolean)
- `logo` (string)
- `priority` (integer)
- `neobank` (boolean)

### getadmintransactionsubcategories

**Environment variables**

- `WZU`

**Input schema**

- `search` (string)
- `offset` (integer)
- `size` (integer)

### createadmintransactionsubcategory

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `icon` (string)
- `color` (string)
- `keywords` (string)
- `priority` (integer)
- `afterbanks_equivalent` (string)
- `applicable_to` (string)
- `suggestion_to_conciliate` (string)

### exporttransactions_1

**Environment variables**

- `WZU`

**Input schema**

- `ids` (array)

### addcontactrole

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `business_contact_id` (string)
- `role` (string)

### getbusinesscredentials

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `opt` (integer)

### gettoolsbybussinessanduser

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)

### updatetoolsuser

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)
- `tools` (array)

### deletesubitem

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)

### updatesubitem

**Environment variables**

- `WZU`

**Input schema**

- `id` (string)
- `b_id` (string)
- `name` (string)
- `businessId` (string)
- `global` (boolean)

### getinstance_1

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### updateinstance

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `agency_email_domain` (string)
- `no_recurrent_invoices_serie` (string)
- `recurrent_invoices_serie` (string)
- `rectifying_invoices_serie` (string)
- `churn_rate` (integer)
- `emission_date_instance` (integer)
- `main_initiative` (string)
- `nps_feedback_email` (string)
- `nps_negative_feedback_email` (string)
- `nps_manager_negative_feedback_email` (string)
- `nps_service_negative_feedback_email` (string)
- `nps_positive_feedback_survey_url` (string)
- `nps_negative_feedback_survey_url` (string)
- `email_promotions` (string)
- `user_message_products_invoices` (string)
- `invoices_email` (string)
- `services_email` (string)
- `new_user_email` (string)
- `contract_signed_email` (string)
- `product_requisite_timetracker` (string)
- `sage_enable` (boolean)
- `sage_domain` (string)
- `sage_domain_pre` (string)
- `sage_instance` (string)
- `sage_write_invoices` (boolean)
- `sage_billing_type` (string)
- `sage_accounting_id` (integer)
- `email_no_destinataries` (string)
- `banner_mgm` (string)
- `banner_funnel` (string)
- `banner_funnel_en` (string)
- `banner_mgm_en` (string)
- `commercial_flow` (string)
- `email_due` (string)
- `email_model_036` (string)
- `date_new_flow` (string)
- `main_color` (string)
- `secondary_color` (string)
- `third_color` (string)
- `internal_logo` (string)
- `logo_favicon` (string)
- `logo_landing_page` (string)
- `logo_landing_page_contrast` (string)
- `logo_square` (string)
- `loader_gif` (string)
- `logo_web_app` (string)
- `hero_landing_page` (string)
- `email_params_main_logo` (string)
- `email_params_message` (string)
- `email_params_email` (string)
- `email_params_url` (string)
- `email_params_privacy_policy` (object)
- `email_params_privacy_form` (object)
- `email_params_color` (string)

### patchmaincontact

**Environment variables**

- `WZU`

**Input schema**

- `contact_role_id` (string)

### adduserstoconversation

**Environment variables**

- `WZU`

**Input schema**

- `conversationId` (string)
- `users` (array)

### updatebusiness_1

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `internal_billing_payment_day` (integer)

### updatebusinessdetails

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `gocardless` (integer)
- `language` (string)
- `paid` (boolean)
- `is_discarded` (boolean)
- `is_recurrent` (boolean)
- `name` (string)
- `sage` (integer)
- `opportunity` (boolean)
- `document_id` (string)
- `organization_id` (string)

### getcountries

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getavatar

**Environment variables**

- `WZU`

**Input schema**

- `user_id` (string)
- `inline` (boolean)

### session

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### logout

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getupdatenotificationsbybusinessid

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### migrateuserlog

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### forceissuependinginvoices

**Environment variables**

- `WZU`

**Input schema**

- `pendingDate` (string)

### getpendinginvoicesdata

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### migrateinvoices

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoices_1

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoices_2

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### getnonreadnotificationscount

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### migrateuserlog_1

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratetransaction

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratetransactionsuggestion

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratetool

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratetooluser

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratetags

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### examplemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratestakeholders

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateservice

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateseries

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratesaleslines

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratepdftemplate

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratenpsrating

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratenpsrating_1

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratenpsrating_2

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### executemigrations_1

**Environment variables**

- `WZU`

**Input schema**

- `pageSize` (integer)
- `initialPage` (integer)
- `threads` (integer)
- `batch` (boolean)
- `token` (string)
- `invoices` (boolean)
- `documents` (boolean)

### managermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratemanagerservice

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratemailtemplates

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratelineactivities

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateirpf

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoices_3

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoices_4

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoices_5

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoicestimemetrics

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoicestemplate

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoicesmasterrecurrence

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoiceslines

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateinvoicesdiscartedticketmassive

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateiberinformcalls

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateservice_1

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### examplemigration_1

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratecommunications

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `thread` (integer)
- `ids` (array)

### examplemigration_2

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### examplemigration_3

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratebusinessalert

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratebanner

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratebank

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migratebankbusiness

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### agencycontractmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### migrateaccountingaccount

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)
- `instanceIdOverwritten` (integer)

### userbusinessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### updatenotificationmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### updatenotificationfiltermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### updatenotificationclosemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### updatenotificationbusinessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### transactionerrorlogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### timetrackermanagersmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### timetrackerbusinessesmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### ticketnotesmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### taxmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### stakeholdersprovincemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### stakeholdersglobalmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicetriggermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicetriggerusermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicetagmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicetagbusinessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### serviceproductmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### serviceoffermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### serviceoffertemplatemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinessproductmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinessperiodmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinesshistoricchangesmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinessfilemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### servicebusinessfiletypemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### satisfactionsurveymigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### promotionsexceptionmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### payrollmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### partnermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### onboardingstepslogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### npsserviceratingemailmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### npsrequestmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### npsrequestclosemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### notificationmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### notificationusermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### multimediamigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### metricsmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### logmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### logdatasagemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralmedicalleavemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralflowmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralflowstepmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralcontractmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralcontractmodificationmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### laboralcontractendingmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### invoicesemailsstakeholderslogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### insurancecompaniesmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### headquartermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### foldermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### deallabelmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### dashboardsectionmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### dashboardbusinessusermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### closepromotionsmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### censusdeclarationmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### censusdeclarationperiodmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### censusdeclarationmodelmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businessnotemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businessmonthlymetricsmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businesscreationmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businesscreationstepslogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businesscreationmessagemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businesscontactmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businesscnaemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### businessmigration_1

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bannerfiltermigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bannerbusinessmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bankerrorlogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bankconnectionlogmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bankalertsmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bankaccountsinvoicemigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### bankaccountmigration

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### examplemigration_4

**Environment variables**

- `WZU`

**Input schema**

- `starting_page` (integer)
- `page_size` (integer)
- `ids` (array)
- `thread` (integer)
- `batch` (boolean)

### getcensusdeclarationmodelsbyperiod

**Environment variables**

- `WZU`

**Input schema**

- `period` (string)

### getinstance

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getaccountterms

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### downloadpublicdocumentbyhash

**Environment variables**

- `WZU`

**Input schema**

- `hash` (string)
- `inline` (boolean)

### downloaddocument

**Environment variables**

- `WZU`

**Input schema**

- `tokenId` (string)

### getcurrencyexchangefordate

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)
- `base_currency` (string)
- `force` (boolean)

### getcurrencyexchangefordateandsymbols

**Environment variables**

- `WZU`

**Input schema**

- `date` (string)
- `base_currency` (string)
- `currencies` (array)

### getdistinctsymbols

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getbusinesses

**Environment variables**

- `WZU`

**Input schema**

- `page` (integer)
- `size` (integer)
- `sort` (array)

### getbusinessusers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### gettools

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getperiodtaxesbyinitiativeid

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### executegetservice

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### getserviceresponsibles

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### getbusinessserviceresponsible

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)

### executegetserviceoffers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `service_id` (string)

### executegetrejectedservicetriggers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### executegetpendingservicetriggers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### executegetopportunityservicetriggers

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getonboardingbyinitiative

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getnpssurvey

**Environment variables**

- `WZU`

**Input schema**

- `hash` (string)

### getnpsstatus

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getlaboralteam

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `getLaboralTeamRequestDto` (object)

### getbusinesspayrolls

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `size` (integer)
- `offset` (integer)
- `transaction_id` (string)
- `search` (string)

### getbusinesspayrollssage

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `getLaboralPayrollsSageRequestDto` (object)

### getlaboralmedicalpart

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `medical_part_id` (string)

### getlaboralflowcalendly

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `flow_id` (string)

### getlaboralcontractdocument

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `contract_id` (string)

### getlaboralcontractmodification

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `modification_id` (string)

### getlaboralallcontracts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `getLaboralContractsRequestDto` (object)

### getcollectiveagreement

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getirpfinfo

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getcompanydata

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### downloaddocumentinternal

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `document_id` (string)
- `inline` (boolean)

### searchfoldersidswithtype

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### searchfolders

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `folder_id` (string)
- `search` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### searchdocuments

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `folder_id` (string)
- `search` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### getagencycontract

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getusersreadmessage

**Environment variables**

- `WZU`

**Input schema**

- `message_id` (string)

### getinitiativeconversations

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `pageable` (object)
- `responsible` (string)
- `service` (string)
- `status` (string)
- `saved` (boolean)
- `element_type` (string)
- `element_id` (string)

### getconversation

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `conversation_id` (string)

### getinitiativeconfig

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getbusinesscreationpartnersepa

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `partner_id` (string)
- `is_autonomous` (integer)
- `contribution_base` (string)

### downloadcapitaldocument

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getbanks

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getsuggestionsforconciliate

**Environment variables**

- `WZU`

**Input schema**

- `transaction_id` (string)
- `requestDto` (object)

### getbusinesstransactionssuggestions

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### gettransactionshistoric

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)
- `start_amount` (integer)
- `end_amount` (integer)
- `accounts` (string)
- `size` (integer)
- `offset` (integer)
- `select_all` (integer)

### gettransactioncategories

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### gettransactioncategoriesindicators

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### getrecentaccounts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getaccounts

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getunpaidbalance

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### getprevision

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)
- `period` (string)
- `account` (string)

### getintervalbalance

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### gethistoricbalance

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### getconciliationbalance

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### getclientsbalance

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `start_date` (string)
- `end_date` (string)

### getadmins

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getactualperiodbybusinessid

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getclientdatabyid

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `stakeholderId` (string)

### deletestakeholder

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `stakeholderId` (string)

### gettableclient

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `search` (string)
- `type` (string)
- `length` (integer)
- `start` (integer)
- `readAll` (boolean)
- `order_column` (integer)
- `order_dir` (integer)
- `activity_line` (string)
- `accounting_account` (string)
- `sage_accounting_account` (string)
- `tax_regime` (string)

### getproducttable

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `search` (string)
- `length` (integer)
- `start` (integer)
- `readAll` (boolean)
- `orderColumn` (integer)
- `order_dir` (integer)

### getinvoicedata

**Environment variables**

- `WZU`

**Input schema**

- `invoiceId` (string)

### getinvoicedocument

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)

### getuploadedinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `query` (string)
- `type` (string)
- `ticket_type` (string)
- `stakeholder` (string)
- `status` (string)
- `status_out` (string)
- `uploaded_start_date` (string)
- `uploaded_end_date` (string)
- `start_date` (string)
- `end_date` (string)
- `start_registration_date` (string)
- `end_registration_date` (string)
- `order_column` (integer)
- `order_dir` (string)
- `amount_min` (number)
- `amount_max` (number)
- `invoice_recurrence` (integer)
- `invoice_status` (string)
- `invoice_type` (string)
- `expense_accounts` (string)
- `line_activities` (string)
- `taxes` (string)
- `irpf` (integer)
- `tax_regime` (string)
- `payment_status` (string)
- `payment_status_out` (string)
- `serie` (string)
- `serie_out` (string)
- `product` (string)
- `tag` (string)
- `size` (integer)
- `offset` (integer)
- `app_type_platform` (string)
- `review_tickets_not_processed` (boolean)
- `select_all` (integer)
- `ids` (string)

### getticketsmetrics

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `users_ids` (array)
- `start_date` (string)
- `end_date` (string)

### getallinvoicetemplates

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `request` (object)

### getinvoicetags

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceIds` (string)

### getsalesmetrics

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `start_date` (string)
- `end_date` (string)

### getremittancecheck

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `request` (object)

### gettemplates

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### previewtemplate

**Environment variables**

- `WZU`

**Input schema**

- `templateId` (string)
- `request` (object)

### getopenedperiod

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `period_name` (string)

### getcheckinvoicenumber

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `request` (object)

### getemailstatus

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `id` (string)

### getdiscartedtickets

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `request` (object)

### getcnaelist

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getcensusdeclarationmodelsbyperiod_1

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `period` (string)
- `period_name` (string)
- `exclude_asociated_models` (boolean)

### getcensusstatementsbyperiodandbusiness

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `businessId` (string)

### getadminbyid

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `adminId` (string)

### deleteadmin

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `adminId` (string)

### getaccountant

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `line_activities` (array)
- `invoice_tags` (array)
- `clients` (array)
- `providers` (array)
- `start_date` (string)
- `end_date` (string)

### getbusinesscontactlistforuser

**Environment variables**

- `WZU`

**Input schema**

- `user_id` (string)

### getbusinesseswithnotificationalert

**Environment variables**

- `WZU`

**Input schema**

- `updateNotificationId` (string)
- `search` (string)
- `page` (integer)
- `size` (integer)

### gettimetrackerlist

**Environment variables**

- `WZU`

**Input schema**

- `manager_ids` (array)
- `start_date` (string)
- `end_date` (string)

### gettimetrackerservices

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### gettimetrackermanagers

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### gettimetrackerbusiness

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getactivetimetracker

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getadminserviceresponsibles

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### getadminserviceratings

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `size` (integer)
- `offset` (integer)

### getadminservicefiletypes

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)

### getadminservicescrmfiles

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `phase` (string)
- `search` (string)
- `size` (integer)
- `from` (integer)
- `paid` (boolean)
- `responsible_id` (string)
- `deal_labels` (string)
- `deal_labels_out` (string)
- `service_tags` (string)
- `service_tags_out` (string)
- `files` (string)
- `start_date_last_change` (string)
- `end_date_last_change` (string)

### getservicebusinesshistoric

**Environment variables**

- `WZU`

**Input schema**

- `service_id` (string)
- `business_id` (string)
- `file_id` (string)

### getmanagerservices

**Environment variables**

- `WZU`

**Input schema**

- `search` (string)
- `pageable` (object)
- `managers_ids` (array)
- `services_ids` (array)

### executegetservices_1

**Environment variables**

- `WZU`

**Input schema**

- `onboarding` (integer)
- `manager` (integer)
- `only_recommended` (integer)
- `ratings` (integer)
- `business_id` (string)

### getsageserviceinfo

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getfunnelpromotions

**Environment variables**

- `WZU`

**Input schema**

- `pageable` (object)
- `search` (string)

### getpromotionsexceptions

**Environment variables**

- `WZU`

**Input schema**

- `pageable` (object)
- `type` (string)
- `search` (string)

### getbusinessesonboarding

**Environment variables**

- `WZU`

**Input schema**

- `idsList` (array)

### getbusinessesonboardingindicators

**Environment variables**

- `WZU`

**Input schema**

- `search_string` (string)
- `business_type` (string)
- `order_direction` (string)
- `startup_certificate` (integer)
- `invite_start_date` (string)
- `invite_end_date` (string)
- `services` (array)
- `deal_labels_id` (array)
- `census` (array)
- `opportunity_start_date` (string)
- `opportunity_end_date` (string)
- `paid_start_date` (string)
- `paid_end_date` (string)
- `discarded_start_date` (string)
- `discarded_end_date` (string)
- `updated_start_date` (string)
- `updated_end_date` (string)
- `recurrent_start_date` (string)
- `recurrent_end_date` (string)
- `products` (array)
- `products_out_id` (array)
- `services_out_id` (array)
- `not_blocked` (boolean)
- `with_products` (boolean)
- `has_assigned_client` (boolean)
- `with_recurrency` (boolean)
- `with_bank_account` (boolean)
- `with_fiscal_documents` (boolean)
- `gocardless_active` (boolean)
- `sage_active` (boolean)
- `zip_code` (string)
- `min_invoices_last_6_months_incomes` (integer)
- `max_invoices_last_6_months_incomes` (integer)
- `min_transactions_last_6_months_incomes` (integer)
- `max_transactions_last_6_months_incomes` (integer)
- `min_annual_budget` (integer)
- `max_annual_budget` (integer)
- `special_free_treatment` (boolean)
- `request` (object)

### getbusinessesonboardingidlist

**Environment variables**

- `WZU`

**Input schema**

- `search_string` (string)
- `business_type` (string)
- `order_direction` (string)
- `startup_certificate` (integer)
- `invite_start_date` (string)
- `invite_end_date` (string)
- `services` (array)
- `deal_labels_id` (array)
- `census` (array)
- `opportunity_start_date` (string)
- `opportunity_end_date` (string)
- `paid_start_date` (string)
- `paid_end_date` (string)
- `discarded_start_date` (string)
- `discarded_end_date` (string)
- `updated_start_date` (string)
- `updated_end_date` (string)
- `recurrent_start_date` (string)
- `recurrent_end_date` (string)
- `products` (array)
- `products_out_id` (array)
- `services_out_id` (array)
- `not_blocked` (boolean)
- `with_products` (boolean)
- `has_assigned_client` (boolean)
- `with_recurrency` (boolean)
- `with_bank_account` (boolean)
- `with_fiscal_documents` (boolean)
- `gocardless_active` (boolean)
- `sage_active` (boolean)
- `zip_code` (string)
- `min_invoices_last_6_months_incomes` (integer)
- `max_invoices_last_6_months_incomes` (integer)
- `min_transactions_last_6_months_incomes` (integer)
- `max_transactions_last_6_months_incomes` (integer)
- `min_annual_budget` (integer)
- `max_annual_budget` (integer)
- `special_free_treatment` (boolean)
- `request` (object)

### getfilteredonboarding

**Environment variables**

- `WZU`

**Input schema**

- `filterRequestDTO` (object)

### getonboardingdata

**Environment variables**

- `WZU`

**Input schema**

- `idsList` (array)

### getsatisfactionsurveys

**Environment variables**

- `WZU`

**Input schema**

- `pageable` (object)

### getnpsratings

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `pageable` (object)
- `start_date` (string)
- `end_date` (string)
- `view_more` (integer)

### getnotarycontactlist

**Environment variables**

- `WZU`

**Input schema**

- `request` (object)

### getmybusinesses

**Environment variables**

- `WZU`

**Input schema**

- `idsList` (array)

### getmybusinessesindicators

**Environment variables**

- `WZU`

**Input schema**

- `search_string` (string)
- `business_type` (string)
- `startup_certificate` (integer)
- `invite_start_date` (string)
- `invite_end_date` (string)
- `services_id` (array)
- `deal_labels_id` (array)
- `all_businesses` (boolean)
- `accounting_responsibles_id` (array)
- `min_accounting_service_months` (integer)
- `max_accounting_service_months` (integer)
- `min_tickets_to_process` (integer)
- `max_tickets_to_process` (integer)
- `min_global_rating` (integer)
- `max_global_rating` (integer)
- `min_engagement` (integer)
- `max_engagement` (integer)
- `business_categories_id` (array)
- `request` (object)

### getmybusinessesidlist

**Environment variables**

- `WZU`

**Input schema**

- `search_string` (string)
- `business_type` (string)
- `startup_certificate` (integer)
- `invite_start_date` (string)
- `invite_end_date` (string)
- `services_id` (array)
- `deal_labels_id` (array)
- `all_businesses` (boolean)
- `accounting_responsibles_id` (array)
- `min_accounting_service_months` (integer)
- `max_accounting_service_months` (integer)
- `min_tickets_to_process` (integer)
- `max_tickets_to_process` (integer)
- `min_global_rating` (integer)
- `max_global_rating` (integer)
- `min_engagement` (integer)
- `max_engagement` (integer)
- `business_categories_id` (array)
- `request` (object)

### exportmybusinessestoexcel

**Environment variables**

- `WZU`

**Input schema**

- `idsList` (array)

### getbusinessesdata

**Environment variables**

- `WZU`

**Input schema**

- `idsList` (array)

### getmanagerlist

**Environment variables**

- `WZU`

**Input schema**

- `include_admins` (boolean)

### getmanagerbusinessservices

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)

### searchbusinessesandmanagers

**Environment variables**

- `WZU`

**Input schema**

- `search` (string)
- `size` (integer)
- `offset` (integer)

### getuserpermissions

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getmanagersinfo

**Environment variables**

- `WZU`

**Input schema**

- `search` (ManagerRoleEnum)
- `role` (string)
- `select_all` (boolean)
- `offset` (integer)
- `size` (integer)
- `sort_field` (string)
- `sort_dir` (string)

### getadminlaboraltriggers

**Environment variables**

- `WZU`

**Input schema**

- `businesses` (string)

### getadminlaboralflows

**Environment variables**

- `WZU`

**Input schema**

- `size` (integer)
- `offset` (integer)
- `flow` (string)
- `search` (string)
- `step` (string)
- `responsible` (string)
- `business_responsible` (string)
- `start_date` (string)
- `end_date` (string)
- `status` (string)
- `date_type` (integer)
- `business` (string)

### getsupplementaryinvoices

**Environment variables**

- `WZU`

**Input schema**

- `search` (string)
- `emission_start_date` (string)
- `emission_end_date` (string)
- `register_start_date` (string)
- `register_end_date` (string)
- `status` (string)
- `type` (string)
- `start` (integer)
- `length` (integer)

### getcensusstatementsbyperiod

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `search` (string)
- `with_requirements` (boolean)
- `with_positive_values` (boolean)
- `opened_period` (boolean)
- `closed_period` (boolean)
- `pending_csv` (boolean)
- `completed_csv` (boolean)
- `in_process_csv` (boolean)
- `business_type` (string)
- `min_tickets` (integer)
- `max_tickets` (integer)
- `in_sage` (integer)
- `with_laboral_service` (boolean)
- `with_start_company_date` (boolean)
- `min_csv_return` (integer)
- `max_csv_return` (integer)
- `model_ids` (array)
- `period` (string)
- `offset` (integer)
- `size` (integer)

### getcensusmodelsummarybyperiod

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `search` (string)
- `with_requirements` (boolean)
- `with_positive_values` (boolean)
- `opened_period` (boolean)
- `closed_period` (boolean)
- `pending_csv` (boolean)
- `completed_csv` (boolean)
- `in_process_csv` (boolean)
- `business_type` (string)
- `min_tickets` (integer)
- `max_tickets` (integer)
- `in_sage` (integer)
- `with_laboral_service` (boolean)
- `with_start_company_date` (boolean)
- `min_csv_return` (integer)
- `max_csv_return` (integer)
- `model_ids` (array)

### getcensussummaryindicators

**Environment variables**

- `WZU`

**Input schema**

- `name` (string)
- `search` (string)
- `business_ids` (array)
- `opened_period` (boolean)
- `closed_period` (boolean)
- `in_process_csv` (boolean)
- `completed_csv` (boolean)
- `pending_csv` (boolean)
- `with_requirements` (boolean)
- `with_positive_values` (boolean)
- `business_type` (string)
- `min_tickets` (integer)
- `max_tickets` (integer)
- `in_sage` (integer)
- `with_laboral_service` (boolean)
- `with_start_company_date` (boolean)
- `min_csv_return` (integer)
- `max_csv_return` (integer)
- `model_ids` (array)

### getinternalbillings

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (array)
- `startDate` (string)
- `endDate` (string)
- `discountType` (string)
- `serviceProductId` (array)
- `serviceId` (array)
- `paymentMethod` (string)
- `paymentReferenceIsNull` (boolean)
- `invoiceIsNull` (boolean)
- `clientInvoiceIsNull` (boolean)
- `invoiceId` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### getinvoicetimemetrics_1

**Environment variables**

- `WZU`

**Input schema**

- `request` (object)

### getproperty

**Environment variables**

- `WZU`

**Input schema**

- `propertyName` (string)

### deleteproperty

**Environment variables**

- `WZU`

**Input schema**

- `propertyName` (string)

### checkduplicateinvoices

**Environment variables**

- `WZU`

**Input schema**

- `startDate` (string)
- `endDate` (string)

### getpossibledestinataries

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getmanagercommunications

**Environment variables**

- `WZU`

**Input schema**

- `pageable` (object)
- `business_id` (string)
- `responsible_id` (string)
- `service_id` (string)
- `status` (string)
- `saved` (boolean)
- `proactive` (boolean)
- `element_type` (string)
- `element_id` (string)
- `start_date` (string)
- `end_date` (string)

### getconversationids

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `responsible_id` (string)
- `service_id` (string)
- `status` (string)
- `saved` (boolean)
- `proactive` (boolean)
- `element_type` (string)
- `element_id` (string)
- `start_date` (string)
- `end_date` (string)

### getrecoverypasswordurl

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)

### getrelatedclient

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getqontoagreement

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getinternalbillingsbybusinessid

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `startDate` (string)
- `endDate` (string)
- `discountType` (string)
- `serviceProductId` (array)
- `serviceId` (array)
- `paymentMethod` (string)
- `paymentReferenceIsNull` (boolean)
- `invoiceIsNull` (boolean)
- `clientInvoiceIsNull` (boolean)
- `invoiceId` (string)
- `page` (integer)
- `size` (integer)
- `sort` (array)

### getbusinessdetails

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getbusinesscontactlistforbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getbackofficelistinvoices

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)

### getdatasenttosage

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoice_id` (string)

### getinvoicessageprocessingstatus

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `idProcesoIME` (string)

### getopenedperiod_1

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `period_name` (string)

### getcategories

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### getadminbusinesscreation

**Environment variables**

- `WZU`

**Input schema**

- `start` (integer)
- `length` (integer)
- `query` (string)
- `start_date` (string)
- `end_date` (string)
- `start_date_activity` (string)
- `end_date_activity` (string)
- `start_recurrent_date` (string)
- `end_recurrent_date` (string)
- `status` (string)
- `paid` (string)
- `responsible` (string)
- `business_type` (string)
- `language` (string)
- `blocked` (integer)
- `recurrent` (integer)
- `tags_filter_mode` (integer)
- `contribution_types` (string)
- `start_activation_date` (string)
- `end_activation_date` (string)
- `start_date_company_constitution` (string)
- `end_date_company_constitution` (string)
- `start_paid_date` (string)
- `end_paid_date` (string)
- `deal_labels` (string)
- `ids` (string)
- `order_column` (integer)
- `order_dir` (string)
- `select_all` (integer)

### getbusinesscreation_1

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)

### getadminafterbankscategories

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### exportmanagers

**Environment variables**

- `WZU`

**Input schema**

- `managers_id` (array)

### getprocessedinvoicesbyuser

**Environment variables**

- `WZU`

**Input schema**

- `user_id` (array)
- `start_date` (string)
- `end_date` (string)
- `pageable` (object)

### getprocessedinvoicesbybusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (array)
- `start_date` (string)
- `end_date` (string)
- `pageable` (object)

### getadmincensusstatements

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### deleteuser

**Environment variables**

- `WZU`

**Input schema**

- `password` (string)

### deleteticketnote

**Environment variables**

- `WZU`

**Input schema**

- `ticketId` (string)
- `noteId` (string)

### deletepayments

**Environment variables**

- `WZU`

**Input schema**

No input parameters

### deletebusinessnote

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `note_id` (string)

### deletemessage

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `message_id` (string)

### deletebusinesscreationpartnersepa

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `partner_id` (string)

### deletebankaccount

**Environment variables**

- `WZU`

**Input schema**

- `account_id` (string)
- `delete_transactions` (boolean)

### deleteseries

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `serieId` (string)

### deleteinvoicesimpleandinvoice

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)

### deleteinvoice

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `invoiceId` (string)
- `invoice_id` (string)
- `recurrence_delete_option` (string)

### deletetemplate

**Environment variables**

- `WZU`

**Input schema**

- `businessId` (string)
- `templateId` (string)

### deleteupdatenotificationfilterbyid

**Environment variables**

- `WZU`

**Input schema**

- `filter_id` (string)

### deletetimetrackerrecord

**Environment variables**

- `WZU`

**Input schema**

- `id_remove` (string)

### deletepromotionsexception

**Environment variables**

- `WZU`

**Input schema**

- `exception_id` (string)

### deletemanager

**Environment variables**

- `WZU`

**Input schema**

- `managerId` (string)

### deletecontactrole

**Environment variables**

- `WZU`

**Input schema**

- `contact_role_id` (string)

### deleteuserbusiness

**Environment variables**

- `WZU`

**Input schema**

- `business_id` (string)
- `user_id` (string)

### deletebusinesscontact

**Environment variables**

- `WZU`

**Input schema**

- `business_contact_id` (string)

### deletecensusstatement

**Environment variables**

- `WZU`

**Input schema**

- `statement_id` (string)
