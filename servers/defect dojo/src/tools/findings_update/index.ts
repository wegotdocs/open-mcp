import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "findings_update",
  "toolDescription": "",
  "baseUrl": "https://demo.defectdojo.org/api/v2",
  "path": "/api/v2/findings/{id}/",
  "method": "put",
  "security": [
    {
      "key": "sessionid",
      "value": "<mcp-env-var>SESSIONID</mcp-env-var>",
      "in": "cookie",
      "envVarName": "SESSIONID"
    },
    {
      "key": "Authorization",
      "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
      "in": "header",
      "envVarName": "USERNAME_PASSWORD_BASE64"
    },
    {
      "key": "Authorization",
      "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
      "in": "header",
      "envVarName": "AUTHORIZATION"
    }
  ],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "tags": "tags",
      "push_to_jira": "push_to_jira",
      "vulnerability_ids": "vulnerability_ids",
      "reporter": "reporter",
      "title": "title",
      "date": "date",
      "sla_start_date": "sla_start_date",
      "sla_expiration_date": "sla_expiration_date",
      "cwe": "cwe",
      "epss_score": "epss_score",
      "epss_percentile": "epss_percentile",
      "known_exploited": "known_exploited",
      "ransomware_used": "ransomware_used",
      "kev_date": "kev_date",
      "cvssv3": "cvssv3",
      "cvssv3_score": "cvssv3_score",
      "severity": "severity",
      "description": "description",
      "mitigation": "mitigation",
      "impact": "impact",
      "steps_to_reproduce": "steps_to_reproduce",
      "severity_justification": "severity_justification",
      "references": "references",
      "active": "active",
      "verified": "verified",
      "false_p": "false_p",
      "duplicate": "duplicate",
      "out_of_scope": "out_of_scope",
      "risk_accepted": "risk_accepted",
      "under_review": "under_review",
      "under_defect_review": "under_defect_review",
      "is_mitigated": "is_mitigated",
      "numerical_severity": "numerical_severity",
      "line": "line",
      "file_path": "file_path",
      "component_name": "component_name",
      "component_version": "component_version",
      "static_finding": "static_finding",
      "dynamic_finding": "dynamic_finding",
      "unique_id_from_tool": "unique_id_from_tool",
      "vuln_id_from_tool": "vuln_id_from_tool",
      "sast_source_object": "sast_source_object",
      "sast_sink_object": "sast_sink_object",
      "sast_source_line": "sast_source_line",
      "sast_source_file_path": "sast_source_file_path",
      "nb_occurences": "nb_occurences",
      "publish_date": "publish_date",
      "service": "service",
      "planned_remediation_date": "planned_remediation_date",
      "planned_remediation_version": "planned_remediation_version",
      "effort_for_fixing": "effort_for_fixing",
      "review_requested_by": "review_requested_by",
      "defect_review_requested_by": "defect_review_requested_by",
      "sonarqube_issue": "sonarqube_issue",
      "reviewers": "reviewers"
    }
  },
  inputParamsSchema
}

export default tool