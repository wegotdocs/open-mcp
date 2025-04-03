import { z } from "zod"

export const toolName = `getattributejsonschema`
export const toolDescription = ``
export const baseUrl = `/api`
export const path = `/v1/metadata/adcEntityAttributes/json-schema`
export const method = `post`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "arrayConstraints",
    "dataProducts",
    "definition",
    "description",
    "displayName",
    "domain",
    "extension",
    "isArray",
    "keyName",
    "name",
    "owner",
    "renderSpec",
    "required"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "arrayConstraints": z.object({ "maxItems": z.number().int().optional(), "minItems": z.number().int().optional(), "uniqueItems": z.boolean().optional() }).optional(), "dataProducts": z.array(z.string()).optional(), "definition": z.object({ "schema": z.record(z.any()).optional(), "type": z.enum(["string","stringConst","markdown","mathFormula","date","number","boolean","link","enum","reference","tag","code","increment"]).optional() }), "description": z.string().optional(), "displayName": z.string().optional(), "domain": z.string().optional(), "extension": z.record(z.any()).optional(), "isArray": z.boolean(), "keyName": z.string().regex(new RegExp("^(?U)(?! |\\d+$|.*-$)[\\w()\\[\\]`%+!?#\\\\]+$")).min(1).max(1024).optional(), "name": z.string().regex(new RegExp("^(?U)(?![-_ ,—])[\\w()\\[\\]`%+!?\"/\\\\][\\w ()\\[\\]_\\-`,%+—!?\"/\\\\]+(?<![-_ ,—])$")).min(2).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "renderSpec": z.object({ "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.object({ "key": z.string(), "nestedRenderSpecs": z.array(z.string()).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.string().optional(), "hidden": z.string().optional(), "hint": z.string().optional(), "order": z.string().optional(), "placeholder": z.string().optional(), "segment": z.string().optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).min(1).max(2147483647).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) })).optional(), "renderSpec": z.object({ "class": z.enum(["link","tag","reference","markdown","mathFormula","date"]).optional(), "hidden": z.boolean().optional(), "hint": z.string().optional(), "order": z.number().int().optional(), "placeholder": z.string().optional(), "segment": z.enum(["baseLeft","baseRight","relatedTerms","dataQuality","ttLeft","ttRight","saLeft","saRight"]).optional() }) }), "required": z.boolean() }).shape