import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "accessDeniedMessage": z.string().describe("The message that is sent if the access is denied.").optional(),
  "action": z.enum(["Allow","Deny"]).describe("Define if the provider is allowed or denied for the match expression.").optional(),
  "alertDefinition": z.string().describe("The definition to use for alerting when action is deny.").optional(),
  "contentPolicies": z.array(z.string()).describe("The list of content policies to apply when the user has access to the provider.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the access policy.").optional(),
  "disabled": z.boolean().describe("If true, the policy is disabled.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "match": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The match criteria used to take a decision on the access.").optional(),
  "minimalLogging": z.boolean().describe("If true, the system will not log the messages that are not considered as\nviolations.").optional(),
  "name": z.string().describe("The name of the access policy."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "offbandAnalysis": z.boolean().describe("If true, the system will run analysis in parallel of the user request. When this\nis active, no further policing will be done, and no content policy will run.\nThis can be used to observe the transmitted data and have analysis report,\nwithout adding latency to the end user request, at the price of not being able\nto do any form of content moderation.").optional(),
  "permissive": z.boolean().describe("If set, just log the decision, but don't enforce it.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}