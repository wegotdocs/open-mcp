import { z } from "zod"

export const toolName = `targetlist`
export const toolDescription = `getting a list of objects that use the specified object as a tag`
export const baseUrl = `/api`
export const path = `/v1/tags/usage/{tagEntityType}/{tagEntityId}`
export const method = `get`
export const security = []
export const keys = {
  "query": [
    "targetEntityType",
    "limit",
    "before",
    "after"
  ],
  "header": [],
  "path": [
    "tagEntityType",
    "tagEntityId"
  ],
  "cookie": [],
  "body": []
}
export const flatMap = {}

export const inputParams = z.object({ "tagEntityType": z.enum(["adcSubjectArea","adcGlossaryTermType","glossaryTerm","glossary","team","user","role","politic","testSuite","testCase","testDefinition","table","database","databaseService","databaseSchema","storedProcedure","dashboardService","dashboard","dashboardDataModel","chart","dataInsightChart","pipelineService","pipeline","messagingService","topic","metadataService","mlModel","mlModelService","container","storageService","kpi","eventSubscription","adcSettings","adcUserSettings","ingestionPipeline","adcRelationship","adcEntityAttribute","classification","tag"]).describe("The type of tag entity"), "tagEntityId": z.string().uuid().describe("Id of the entity that is the tag"), "targetEntityType": z.enum(["adcSubjectArea","adcGlossaryTermType","glossaryTerm","glossary","team","user","role","politic","testSuite","testCase","testDefinition","table","database","databaseService","databaseSchema","storedProcedure","dashboardService","dashboard","dashboardDataModel","chart","dataInsightChart","pipelineService","pipeline","messagingService","topic","metadataService","mlModel","mlModelService","container","storageService","kpi","eventSubscription","adcSettings","adcUserSettings","ingestionPipeline","adcRelationship","adcEntityAttribute","classification","tag"]).describe("The type of target entities (owners) of the tag"), "limit": z.number().int().gte(0).lte(1000000).describe("Limit the number target entities returned. (1 to 1000000, default = 50)"), "before": z.string().describe("Returns list of target entities before this cursor").optional(), "after": z.string().describe("Returns list of target entities after this cursor").optional() }).shape