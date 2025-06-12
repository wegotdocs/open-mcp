import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "templateId": z.string().describe("The object id of the workflow template."),
  "view": z.string().describe("Properties to return. The pattern is like:?view=(:view-name)?(,column)*. (:view-name) and (,columns)* must be mutually exclusive names of predefined views start with colon (':'). The following view-name are defined: :all :default\n\nIf no view-name is specified, names of properties or predefined views should be returned, separated by comma (',').").optional(),
  "filter": z.string().describe("A filter expression in a subset of XPath.").optional(),
  "sort": z.string().describe("Sorting for entries in collection result. A sort consists of multiple sort specifications, separated by comma (','). Each sort specification consists of an attribute to be sorted and its sort order, separated by the spacpe (' ').\n\nSort order can be either DESC orASC, case insensitive. Sort order is optional, if not specified, the default sort order isASC. Optionally it can be specified with non-repeating attributes. Sort order can be forced to be in case insensitive mode, with the hint no-case. Whether the default sort is in case sensitive mode or not is determined by the database.\n\nExample: sort=r_modify_date desc,object_name asc no-case,title. If any attribute with invalid name is specified, error will be thrown.").optional(),
  "inline": z.boolean().describe("Ensures whether to show content (the object instance) in the atom entry for a collection. * 'true', return object instance and embed object instance into entry's content element. * 'false', do not return object instance within entry's content.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional()
}