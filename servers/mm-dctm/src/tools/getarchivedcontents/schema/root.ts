import { z } from "zod"

export const inputParamsSchema = {
  "repositoryName": z.string().describe("The repository name."),
  "object-id": z.string().describe("The r_object_id of required sysobject.").optional(),
  "include-children": z.string().describe("Specifies whether to get its child nodes' contents for a virtual document. * 'true', would include its child nodes' contents. * 'false', do not include its child nodes' contents, means only get this root node's contents.").optional(),
  "binding-label": z.string().describe("Specifies the version label to use to resolve late bound nodes for a virtual document.").optional(),
  "include-broken": z.string().describe("Specifies whether to include nodes with broken bindings for a virtual document. * 'true', would include nodes with broken bindings with current version. * 'false', do not include nodes with broken bindings.").optional(),
  "depth": z.number().int().describe("Specifies to what depth level the virtual document hierarchy will be returned. -1 means return the whole virtual document tree.").optional(),
  "format": z.string().describe("The format of the content uploaded.").optional()
}