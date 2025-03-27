# @open-mcp/botify_com

## MCP client config

Add the following to `~/Library/Application\ Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "botify_com": {
      "command": "npx",
      "args": ["-y", "@open-mcp/botify_com"],
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

### getprojectanalyses

### parameters_analyses_username_project_slug_

### getanalysissummary

### parameters_analyses_username_project_slug_analysis_slug_

### getcrawlstatistics

### parameters_analyses_username_project_slug_analysis_slug_crawl_st

### getcrawlstatisticsbyfrequency

### parameters_analyses_username_project_slug_analysis_slug_crawl_st

### getcrawlstatisticsurls

### parameters_analyses_username_project_slug_analysis_slug_crawl_st

### getganalyticsorphanurls

### parameters_analyses_username_project_slug_analysis_slug_features

### getlinkspercentiles

### parameters_analyses_username_project_slug_analysis_slug_features

### getpageranklost

### parameters_analyses_username_project_slug_analysis_slug_features

### getsitemapsreport

### parameters_analyses_username_project_slug_analysis_slug_features

### getsitemapssamplesoutofconfig

### parameters_analyses_username_project_slug_analysis_slug_features

### getsitemapssamplessitemapsonly

### parameters_analyses_username_project_slug_analysis_slug_features

### getlinkstopdomains

### parameters_analyses_username_project_slug_analysis_slug_features

### getlinkstopsubdomains

### parameters_analyses_username_project_slug_analysis_slug_features

### parameters_analyses_username_project_slug_analysis_slug_urls

### geturls

### parameters_analyses_username_project_slug_analysis_slug_urls_agg

### geturlsaggs

### geturlsdatamodel

### parameters_analyses_username_project_slug_analysis_slug_urls_dat

### geturlsexports

### parameters_analyses_username_project_slug_analysis_slug_urls_exp

### createurlsexport

### geturlsexportstatus

### parameters_analyses_username_project_slug_analysis_slug_urls_exp

### parameters_analyses_username_project_slug_analysis_slug_urls_sug

### geturlssuggestedfilters

### geturldetail

### parameters_analyses_username_project_slug_analysis_slug_urls_url

### getuserprojects

### parameters_projects_username_

### parameters_projects_username_project_slug_features_url_rewriting

### testurlrewritingrules

### getsavedfilters

### parameters_projects_username_project_slug_filters

### getsavedfilter

### parameters_projects_username_project_slug_filters_identifier_

### parameters_projects_username_project_slug_urls_aggs

### getprojecturlsaggs

## Inspector

Needs access to port 3000 for running a proxy server, will fail if http://localhost:3000 is already busy.

```bash
npx -y @modelcontextprotocol/inspector npx -y @open-mcp/botify_com
```

- Open http://localhost:5173
- Transport type: `STDIO`
- Command: `npx`
- Arguments: `-y @open-mcp/botify_com`
- Click `Environment Variables` to add
- Click `Connect`

It should say _MCP Server running on stdio_ in red.

- Click `List Tools`
