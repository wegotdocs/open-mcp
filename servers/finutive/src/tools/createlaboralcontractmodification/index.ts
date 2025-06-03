import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createlaboralcontractmodification",
  "toolDescription": "Create contract modification",
  "baseUrl": "https://agepyme.finutive.com/api/",
  "path": "/businesses/{business_id}/laboral/contracts/modifications",
  "method": "post",
  "security": [
    {
      "key": "wzu",
      "value": "<mcp-env-var>WZU</mcp-env-var>",
      "in": "cookie",
      "envVarName": "WZU"
    }
  ],
  "paramsMap": {
    "path": {
      "business_id": "business_id"
    },
    "body": {
      "business_id": "b_business_id",
      "contract_id": "contract_id",
      "temporality": "temporality",
      "value": "value",
      "status": "status",
      "contract_modification_timestamp": "contract_modification_timestamp",
      "job_functions": "job_functions",
      "category": "category",
      "start_date": "start_date",
      "end_date": "end_date",
      "hours": "hours",
      "hours_definition": "hours_definition",
      "hours_by_days": "hours_by_days",
      "days": "days",
      "replaces_to_person": "replaces_to_person",
      "replaces_to_limit_date": "replaces_to_limit_date",
      "replaces_affiliation_number": "replaces_affiliation_number",
      "replaces_cause": "replaces_cause",
      "observations": "observations",
      "salary_year": "salary_year",
      "type": "type",
      "account_id": "account_id",
      "headquarter_id": "headquarter_id",
      "contract_reason": "contract_reason",
      "work_in_weekend": "work_in_weekend",
      "notify_minimum_salary": "notify_minimum_salary",
      "trial_period": "trial_period",
      "trial_period_condition": "trial_period_condition",
      "number_payments": "number_payments",
      "number_payments_condition": "number_payments_condition",
      "irpf_worker": "irpf_worker",
      "irpf_perceived": "irpf_perceived",
      "irpf_retained": "irpf_retained",
      "project_details": "project_details",
      "email": "email",
      "date_submit": "date_submit"
    }
  },
  inputParamsSchema
}

export default tool