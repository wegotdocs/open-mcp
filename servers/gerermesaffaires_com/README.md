# @open-mcp/gerermesaffaires_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "gerermesaffaires_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/gerermesaffaires_com"],
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

### get_box_menus

### get_business_groups

### patch_business_groups

### post_business_groups

### get_business_groups_all

### get_business_groups_id_

### get_business_groups_id_spaces

### delete_business_groups_id_spaces_spaceid_

### post_business_groups_id_spaces_spaceid_legal_entities_personid_c

### post_business_groups_id_spaces_spaceid_legal_entities_personid_c

### get_hub_business_groups_id_menus

### post_hub_documents

### get_hub_menus

### get_hub_menus_all

### post_hub_payslips

### post_hub_spaces_spaceid_documents

### get_hub_spaces_spaceid_menus

### post_hub_spaces_spaceid_payslips

### get_menus

### post_menus_menuid_documents

### get_profile

### patch_profile

### post_profile

### patch_profile_email

### get_profile_id_file

### patch_profile_mobile

### get_registration

### post_registration

### get_session

### get_spaces

### post_spaces

### get_spaces_all

### delete_spaces_id_

### get_spaces_id_

### patch_spaces_id_

### get_spaces_id_accounting_year

### post_spaces_id_accounting_year

### get_spaces_id_collective_decision

### post_spaces_id_collective_decision

### get_spaces_id_company_entities

### post_spaces_id_company_entities

### get_spaces_id_company_entities_all

### get_spaces_id_company_entities_companyid_

### patch_spaces_id_company_entities_companyid_

### get_spaces_id_company_entities_personid_details

### post_spaces_id_company_entities_personid_details

### delete_spaces_id_company_entities_personid_details_designation_

### post_spaces_id_documents_download

### get_spaces_id_folders_folderid_persons_memberid_

### patch_spaces_id_folders_folderid_persons_memberid_

### patch_spaces_id_folders_folderid_persons_memberid_activeaccess

### patch_spaces_id_folders_folderid_persons_memberid_unactiveaccess

### post_spaces_id_folders_folderid_persons_personid_guest_in_space

### get_spaces_id_groups

### post_spaces_id_groups

### get_spaces_id_groups_all

### get_spaces_id_groups_groupid_

### patch_spaces_id_groups_groupid_

### delete_spaces_id_groups_groupid_folders_folderid_

### patch_spaces_id_groups_groupid_folders_folderid_

### delete_spaces_id_groups_groupid_persons_memberid_

### patch_spaces_id_groups_groupid_persons_memberid_

### get_spaces_id_legal

### patch_spaces_id_legal

### get_spaces_id_logo

### get_spaces_id_persons

### post_spaces_id_persons

### get_spaces_id_persons_all

### patch_spaces_id_persons_memberid_player

### delete_spaces_id_persons_personid_

### get_spaces_id_persons_personid_

### patch_spaces_id_persons_personid_

### get_spaces_id_persons_personid_details

### post_spaces_id_persons_personid_details

### delete_spaces_id_persons_personid_details_designation_

### get_spaces_id_persons_personid_folders

### get_spaces_id_persons_personid_groups

### get_spaces_id_persons_personid_portfolios

### post_spaces_id_persons_personid_portfolios

### patch_spaces_id_portfolios_portfolioid_persons_memberid_

### get_spaces_id_professional_vehicles

### post_spaces_id_professional_vehicles

### get_spaces_id_settings_nf203_logs

### post_spaces_id_settings_nf203_logs

### get_spaces_id_status

### post_spaces_id_status

### delete_spaces_id_status_code_

### get_spaces_id_tax_contracts

### post_spaces_id_tax_contracts

### get_spaces_id_triggers

### delete_spaces_id_triggers_name_

### post_spaces_id_triggers_name_

### delete_spaces_spaceid_common_folders_id_

### patch_spaces_spaceid_common_folders_id_

### get_spaces_spaceid_company_entities_id_follow_ups

### get_spaces_spaceid_customers

### get_spaces_spaceid_customers_all

### get_spaces_spaceid_documents

### patch_spaces_spaceid_documents_documentid_

### get_spaces_spaceid_documents_documentid_extend

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/gerermesaffaires_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/gerermesaffaires_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
