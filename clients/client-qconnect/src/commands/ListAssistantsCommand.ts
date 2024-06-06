// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssistantsRequest, ListAssistantsResponse } from "../models/models_0";
import { de_ListAssistantsCommand, se_ListAssistantsCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssistantsCommand}.
 */
export interface ListAssistantsCommandInput extends ListAssistantsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssistantsCommand}.
 */
export interface ListAssistantsCommandOutput extends ListAssistantsResponse, __MetadataBearer {}

/**
 * <p>Lists information about assistants.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAssistantsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAssistantsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ListAssistantsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAssistantsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssistantsResponse
 * //   assistantSummaries: [ // AssistantList // required
 * //     { // AssistantSummary
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       status: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       serverSideEncryptionConfiguration: { // ServerSideEncryptionConfiguration
 * //         kmsKeyId: "STRING_VALUE",
 * //       },
 * //       integrationConfiguration: { // AssistantIntegrationConfiguration
 * //         topicIntegrationArn: "STRING_VALUE",
 * //       },
 * //       capabilityConfiguration: { // AssistantCapabilityConfiguration
 * //         type: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssistantsCommandInput - {@link ListAssistantsCommandInput}
 * @returns {@link ListAssistantsCommandOutput}
 * @see {@link ListAssistantsCommandInput} for command's `input` shape.
 * @see {@link ListAssistantsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class ListAssistantsCommand extends $Command
  .classBuilder<
    ListAssistantsCommandInput,
    ListAssistantsCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "ListAssistants", {})
  .n("QConnectClient", "ListAssistantsCommand")
  .f(void 0, void 0)
  .ser(se_ListAssistantsCommand)
  .de(de_ListAssistantsCommand)
  .build() {}
