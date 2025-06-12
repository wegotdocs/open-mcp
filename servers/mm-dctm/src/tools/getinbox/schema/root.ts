import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "items-per-page": z.number().int().describe("The number of entries per page. When the result feed is paged, the attribute items-per-page will be displayed in the feed.").optional(),
  "page": z.number().int().describe("The number of the page to be served. When the result feed is paged, the attribute page will be displayed in the feed.").optional(),
  "inline": z.boolean().describe("Ensures whether to show content (the object instance) in the atom entry for a collection. * 'true', return object instance and embed object instance into entry's content element. * 'false', do not return object instance within entry's content.").optional(),
  "links": z.boolean().describe("Ensures whether link relations to be returned for this object representation. * 'true', return links for the object. * 'false' do not return links for the object.").optional(),
  "item-type": z.number().int().describe("Specifies what kind of items the inbox should return. By default is to return all notifications and workflow tasks, namely 7, it is value of 0x001|0x0002|0x0004. It can be any of the following value bitwise OR'ed together. * '0xFFFF', (DF_ALL) including all notifications and tasks. * '0x0001', (DF_NOTIFICATION) including only notifications but not queued notifications. * '0x0002', (DF_QUEUED) including only queued notifications. * '0x0004', (DF_WORKFLOWTASK) including only workflow tasks * '0x0008', (DF_ROUTERTASK) including only router task.").optional(),
  "Accept": z.enum(["application/vnd.emc.documentum+json","application/atom+xml","application/hal+json"]).describe("The Accept header.").optional()
}