import { z } from "zod"

export const inputParamsSchema = {
  "ID": z.string().describe("ID is the identifier of the object.").readonly().optional(),
  "SSEManagement": z.enum(["Collect","Stream"]).describe("This property defines how you want the extractor to work with\nserver-side events. With Collect all the events buffer until the server\ncloses the connection and sends the entire data to the lua code\nwhile Stream will collect line by line and will send events line by line.").optional(),
  "analyzers": z.array(z.string()).describe("The analyzers parameter allows for customizing which analyzers should be used,\noverriding the default selection. Each analyzer entry can optionally include a\nprefix to modify its behavior:\n\n  - No prefix: Runs only the specified analyzers and any dependencies required\nfor deeper analyzis (slower but more acurate).\n  - '+' (enable): Activates an analyzer that is disabled by default.\n  - '-' (disable): Disables an analyzer that is enabled by default.\n  - '@' (direct execution): Runs the analyzer immediately, bypassing the deeper\nanalyzis (faster but less acurate).\n\nAn analyzers entry can be specified using:\n  - The analyzer name (e.g., 'Toxicity detector')\n  - The analyzer ID (e.g., 'en-text-toxicity-detector')\n  - The analyzer group (e.g., 'Detectors')\n  - A detector name (e.g., 'toxic')\n  - A detector label (e.g., 'insult')\n  - A detector group (e.g., 'Malcontents')\n\nIf left empty, all default analyzers will be executed.").optional(),
  "anonymization": z.enum(["FixedSize","VariableSize"]).describe("How to anonymize the data. If deanonymize is true, then VariablSize is required.").optional(),
  "behavior": z.enum(["Popup","Throw","Ignore"]).describe("Defines how to handle error in the case of a webpage. If set to Popup, the error\nwill be shown in a popup. If throw, a javascript error will be returned.").optional(),
  "block": z.enum(["Allow","Before","After"]).describe("Block the request to the provider if not Allow. If Before, the data will be\nblocked before running any extraction or analyzis. If After block the request\nafter analysizis.").optional(),
  "cancelBehavior": z.enum(["Block","SendRedacted"]).describe("The behavior to take when cancel is chosen from the popup.").optional(),
  "createTime": z.string().datetime({ offset: true }).describe("Creation date of the object.").readonly().optional(),
  "deanonymize": z.boolean().describe("If true, deanonymize the redacted data. This has no effects on streaming output.").optional(),
  "description": z.string().describe("The description of the provider.").optional(),
  "honorPriorDecision": z.boolean().describe("If true, it will wait on a prior popup and honor its decision. It only has\neffect if there is an existing popup being shown.").optional(),
  "ignore": z.boolean().describe("If true, the analysis will run, but nothing will be logged.").optional(),
  "importHash": z.string().describe("The hash of the structure used to compare with new import version.").optional(),
  "importLabel": z.string().describe("The user-defined import label that allows the system to group resources from the\nsame import operation.").optional(),
  "method": z.enum(["Post","Put","Patch","Get","Delete","Options","Head"]).describe("The method to match."),
  "name": z.string().describe("The internal reference name of the object."),
  "namespace": z.string().describe("The namespace of the object.").readonly().optional(),
  "path": z.string().describe("A regular expression to match a URL path to log."),
  "propagate": z.boolean().describe("Propagates the object to all child namespaces. This is always true.").optional(),
  "script": z.string().describe("If not empty, use this lua code to run the extraction.").optional(),
  "type": z.enum(["Input","Output"]).describe("The type of extractor."),
  "updateTime": z.string().datetime({ offset: true }).describe("Last update date of the object.").readonly().optional()
}