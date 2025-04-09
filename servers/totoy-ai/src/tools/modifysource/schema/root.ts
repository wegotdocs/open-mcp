import { z } from "zod"

export const inputParams = {
  "source_id": z.string().regex(new RegExp("^src_[a-zA-Z0-9]{25}$")).max(29).describe("Unique identifier for a `Source` that was uploaded to Totoy."),
  "text_content": z.string().max(1000000).describe("Plain-text string to replace the original `text_content` of the `Source`.").optional(),
  "title": z.string().max(512).describe("Title of the text `Source`.").optional(),
  "backlink": z.string().max(512).describe("A url to the text `Source` that can be used by clients to link back to the original text.").optional(),
  "valid_from": z.string().datetime({ offset: true }).nullable().describe("From what time the `Source` can be used by a `Knowledge Base` or an `Explanation`. If no `valid_from` is set, the `Source` is valid from the time it is added to `Sources`.").optional(),
  "valid_until": z.string().datetime({ offset: true }).nullable().describe("Until when the `Source` can be used by a `Knowledge Base` or an `Explanation`. If no `valid_until` is set, the `Source` is valid until it is removed from `Sources`.").optional(),
  "project_id": z.string().regex(new RegExp("^pj_[a-zA-Z0-9]{25}$")).max(28).nullable().describe("The unique identifier of the project this `Source` should be assigned to. `Sources` can only be used by resources with the same `project_id`. If no `project_id` is set, the `Source` will be assigned to the default project. A `Source` can only be assigned to a different `Project`, if no `Knowledge Bases` are using the `Source`.").optional(),
  "custom_metadata": z.record(z.any()).describe("<llm-instruction>This part of the input schema is truncated. If you want to pass the property `custom_metadata` to the tool, first call the tool `expandSchema` with \"/properties/custom_metadata\" in the list of pointers. This will return the expanded input schema which you can then use in the tool call. You may have to call `expandSchema` multiple times if the schema is nested.</llm-instruction>\n<property-description>Custom optional metadata for a `Source` provided by a client. Up to 10 key-value pairs.</property-description>").optional()
}