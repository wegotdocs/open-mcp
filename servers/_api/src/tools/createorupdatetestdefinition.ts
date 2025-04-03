import { z } from "zod"

export const toolName = `createorupdatetestdefinition`
export const toolDescription = `Update test definition`
export const baseUrl = `/api`
export const path = `/v1/dataQuality/testDefinitions`
export const method = `put`
export const security = []
export const keys = {
  "query": [],
  "header": [],
  "path": [],
  "cookie": [],
  "body": [
    "addition",
    "dataProducts",
    "description",
    "displayName",
    "domain",
    "entityType",
    "extension",
    "name",
    "owner",
    "parameterDefinition",
    "supportedDataTypes",
    "testPlatforms"
  ]
}
export const flatMap = {}

export const inputParams = z.object({ "addition": z.record(z.any()).optional(), "dataProducts": z.array(z.string()).optional(), "description": z.string(), "displayName": z.string().optional(), "domain": z.string().optional(), "entityType": z.enum(["TABLE","COLUMN"]), "extension": z.record(z.any()).optional(), "name": z.string().regex(new RegExp("^(?U)[\\w ()\\[\\]_\\-`.,%+—!?'\"/\\\\]+$")).min(1).max(128), "owner": z.object({ "deleted": z.boolean().optional(), "description": z.string().optional(), "displayName": z.string().optional(), "fullyQualifiedName": z.string().optional(), "href": z.string().url().optional(), "id": z.string().uuid(), "name": z.string().optional(), "payload": z.object({ "type": z.enum(["additionAttributeConfig","relationshipConditionBasedDirectiveKey","glossaryTermInfo","testCaseResult"]).optional() }).optional(), "type": z.string(), "version": z.number().optional() }).optional(), "parameterDefinition": z.array(z.object({ "dataType": z.enum(["NUMBER","INT","FLOAT","DOUBLE","DECIMAL","TIMESTAMP","TIME","DATE","DATETIME","ARRAY","MAP","SET","STRING","BOOLEAN"]).optional(), "description": z.string().optional(), "displayName": z.string().optional(), "name": z.string().optional(), "optionValues": z.array(z.record(z.any())).optional(), "required": z.boolean().optional() })).optional(), "supportedDataTypes": z.array(z.enum(["NUMBER","TINYINT","SMALLINT","INT","BIGINT","BYTEINT","BYTES","FLOAT","DOUBLE","DECIMAL","NUMERIC","TIMESTAMP","TIMESTAMPZ","TIME","DATE","DATETIME","INTERVAL","STRING","MEDIUMTEXT","TEXT","CHAR","LONG","VARCHAR","BOOLEAN","BINARY","VARBINARY","ARRAY","BLOB","LONGBLOB","MEDIUMBLOB","MAP","STRUCT","UNION","SET","GEOGRAPHY","ENUM","JSON","UUID","VARIANT","GEOMETRY","BYTEA","AGGREGATEFUNCTION","ERROR","FIXED","RECORD","NULL","SUPER","HLLSKETCH","PG_LSN","PG_SNAPSHOT","TSQUERY","TXID_SNAPSHOT","XML","MACADDR","TSVECTOR","UNKNOWN","CIDR","INET","CLOB","ROWID","LOWCARDINALITY","YEAR","POINT","POLYGON","TUPLE","SPATIAL","TABLE","NTEXT","IMAGE","IPV4","IPV6","DATETIMERANGE"])).optional(), "testPlatforms": z.array(z.enum(["OpenMetadata","GreatExpectations","DBT","Deequ","Soda","Other"])) }).shape