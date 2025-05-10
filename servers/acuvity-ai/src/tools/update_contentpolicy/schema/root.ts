import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "description": z.string().describe("Description of the content policy.").optional(),
  "friendlyName": z.string().describe("Friendly name of the object."),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "moderations": z.array(z.object({ "action": z.enum(["Warn","Block","None"]).describe("The actual action to take when triggered."), "alertDefinition": z.string().describe("The definition to use for alerting.").optional(), "link": z.string().describe("Sets an optional link to reference a document with more explanation on the\nmoderation.").optional(), "message": z.string().describe("The message if the moderation action is warn or block.").optional(), "predicates": z.array(z.object({ "key": z.enum(["Categories","Confidentiality","CustomDataTypes","DstApp","DstComponent","DstIPRange","Exploits","IsIngress","Keywords","Languages","Malcontents","Modality","Model","PIIs","Plugin","Provider","Relevance","RiskScore","Secrets","Size","SrcApp","SrcComponent","SrcIPRange","Status","Team","Tools","Topics","Workspace"]).describe("The key of the predicate."), "operator": z.enum(["All","Any","Empty","Equals","EqualsOrGreaterThan","EqualsOrLesserThan","NotAny","NotEmpty","NotEquals"]).describe("The operator of the predicate."), "values": z.array(z.any()).describe("The values of the predicate.").optional() }).describe("Represents a Predicate.")).describe("The predicate expression for the moderation to be triggered.").optional(), "redact": z.boolean().describe("If true, redacts the keywords, PIIs, and/or secrets defined in the predicates.").optional() }).describe("Represents a moderation to take in the content policy.")).describe("The list of moderations to take when the user has access to the provider.").optional(),
  "name": z.string().describe("The internal reference name of the object. It is a sanitized version of Friendly\nName if empty.").optional(),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}