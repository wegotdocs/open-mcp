import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "prefetch": z.array(z.enum(["auth_issues","author_issues","config_issues","crypto_issues","data_issues","defect_review_requested_by","duplicate_finding","endpoint_set","endpoints","files","finding_group_set","found_by","last_reviewed_by","mitigated_by","notes","other_issues","reporter","review_requested_by","reviewers","risk_acceptance_set","sensitive_issues","session_issues","sonarqube_issue","test","test_import_set"])).describe("List of fields for which to prefetch model instances and add those to the response").optional(),
  "related_fields": z.boolean().describe("Expand finding external relations (engagement, environment, product,                                             product_type, test, test_type)").optional()
}