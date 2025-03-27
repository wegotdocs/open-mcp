# @open-mcp/microsoft_com_graph_beta

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "microsoft_com_graph_beta": {
      "command": "npx",
      "args": ["-y", "@open-mcp/microsoft_com_graph_beta"],
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

### description_accessreviewdecisions

### accessreviewdecisions_accessreviewdecision_listaccessreviewdecis

### accessreviewdecisions_accessreviewdecision_createaccessreviewdec

### description_accessreviewdecisions_count

### get_count_accessreviewdecisions_c5db

### accessreviewdecisions_accessreviewdecision_deleteaccessreviewdec

### description_accessreviewdecisions_accessreviewdecision_id_

### accessreviewdecisions_accessreviewdecision_getaccessreviewdecisi

### parameters_accessreviewdecisions_accessreviewdecision_id_

### accessreviewdecisions_accessreviewdecision_updateaccessreviewdec

### description_accessreviews

### accessreviews_accessreview_listaccessreview

### accessreviews_accessreview_createaccessreview

### description_accessreviews_count

### get_count_accessreviews_27b1

### accessreviews_accessreview_deleteaccessreview

### description_accessreviews_accessreview_id_

### accessreviews_accessreview_getaccessreview

### parameters_accessreviews_accessreview_id_

### accessreviews_accessreview_updateaccessreview

### description_accessreviews_accessreview_id_decisions

### accessreviews_listdecisions

### parameters_accessreviews_accessreview_id_decisions

### accessreviews_createdecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_decisions

### description_accessreviews_accessreview_id_decisions_count

### get_count_decisions_e283

### parameters_accessreviews_accessreview_id_decisions_count

### accessreviews_deletedecisions

### description_accessreviews_accessreview_id_decisions_accessreview

### accessreviews_getdecisions

### parameters_accessreviews_accessreview_id_decisions_accessreviewd

### accessreviews_updatedecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_decisions_a

### description_accessreviews_accessreview_id_instances

### accessreviews_listinstances

### parameters_accessreviews_accessreview_id_instances

### accessreviews_createinstances

### description_accessreviews_accessreview_id_instances_count

### get_count_instances_6b79

### parameters_accessreviews_accessreview_id_instances_count

### accessreviews_deleteinstances

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_getinstances

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_updateinstances

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_instances_listdecisions

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_createdecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### get_count_decisions_00c9

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_deletedecisions

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_instances_getdecisions

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_updatedecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_accessreview_instances_accessreview_applydecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_accessreview_instances_accessreview_resetdecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_accessreview_instances_accessreview_sendreminder

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_accessreview_instances_accessreview_stop

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_instances_listmydecisions

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_createmydecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### get_count_mydecisions_8fe5

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_deletemydecisions

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_instances_getmydecisions

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_updatemydecisions

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### accessreviews_instances_listreviewers

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_createreviewers

### x_ms_docs_grouped_path_accessreviews_accessreview_id_instances_a

### description_accessreviews_accessreview_id_instances_accessreview

### get_count_reviewers_0f39

### parameters_accessreviews_accessreview_id_instances_accessreview_

### accessreviews_instances_deletereviewers

### description_accessreviews_accessreview_id_instances_accessreview

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/microsoft_com_graph_beta
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/microsoft_com_graph_beta`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
