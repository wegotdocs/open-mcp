import { z } from "zod"

export const inputParamsSchema = {
  "branchId": z.string().describe("If specified, the branch on which you want to manage the component.").optional(),
  "branchName": z.string().optional(),
  "componentId": z.string().describe("Required. Read only. The ID of the component. The component ID is available on the Revision History dialog, which you can access from the Build page in the service.").optional(),
  "copiedFromComponentId": z.string().describe("Read only. If you copied the component, this field is the ID of the original component from where you copied the component.").optional(),
  "copiedFromComponentVersion": z.number().int().describe("Read only. If you copied the component, this field is the revision number of the original component you copied.").optional(),
  "createdBy": z.string().describe("Read only. User name of the user who created the component.").optional(),
  "createdDate": z.string().datetime({ offset: true }).describe("Read only. Date and time.").optional(),
  "currentVersion": z.boolean().describe("Read only. Indicates if the value specified in the version field is the most current and latest revision number created for the component on the **Build** tab. A value of True indicates that the revision number is the most current revision number on the **Build** tab, whereas False indicates that the version field value is not the most current revision number.").optional(),
  "deleted": z.boolean().describe("Read only. Indicates if the component is deleted. A value of True indicates a deleted status, whereas False indicates an active status.").optional(),
  "folderId": z.string().describe("The ID of the folder where the component currently resides.").optional(),
  "folderName": z.string().describe("Read only. The folder location of the component within Component Explorer.").optional(),
  "modifiedBy": z.string().describe("Read only. User name of the user who last modified the component.").optional(),
  "modifiedDate": z.string().datetime({ offset: true }).describe("Read only. Date and time.").optional(),
  "name": z.string().describe("Read only.").optional(),
  "subType": z.string().describe("Read only. Used by connector-related components \\(connections and operations\\) to identify the connector type. Subtype values are the internal connector ID, not the user-facing name.See [Connector object](/api/platformapi#tag/Connector).").optional(),
  "type": z.enum(["certificate","connector-action","connector-settings","crossref","documentcache","transform.map","transform.function","certificate.pgp","process","processproperty","profile.db","profile.edi","profile.flatfile","profile.xml","profile.json","queue","tradingpartner","tpgroup","tporganization","tpcommoptions","webservice","webservice.external","processroute","customlibrary","edistandard","flowservice","script.processing","script.mapping","xslt"]).describe("Read only. The type of component. See the section **Component Types** later in this topic for a complete list of component type values").optional(),
  "version": z.number().int().describe("Read only.").optional()
}