import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "typeName": z.string().describe("Specifies the name of the type."),
  "view": z.string().describe("Properties to return. The pattern is like:?view=(:view-name)?(,column)*. (:view-name) and (,columns)* must be mutually exclusive names of predefined views start with colon (':'). The following view-name are defined: :all :default\n\nIf no view-name is specified, names of properties or predefined views should be returned, separated by comma (',').").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "included-properties": z.string().describe("The property names to be included in the Response. The property names are comma separated. For example, included-properties=attr1,attr2,attr3").optional(),
  "lifecycle-id": z.string().describe("The id of the lifecycle.").optional(),
  "state": z.string().describe("The state name of the lifecycle.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/vnd.emc.documentum+xml","application/hal+json"]).describe("The Accept header.").optional(),
  "Content-Type": z.enum(["application/vnd.emc.documentum+xml","application/vnd.emc.documentum+json","application/hal+json"]).describe("The Content-Type header.").optional()
}