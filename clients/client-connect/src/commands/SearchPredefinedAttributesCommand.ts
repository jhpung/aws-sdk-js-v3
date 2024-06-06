// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { SearchPredefinedAttributesRequest, SearchPredefinedAttributesResponse } from "../models/models_2";
import { de_SearchPredefinedAttributesCommand, se_SearchPredefinedAttributesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchPredefinedAttributesCommand}.
 */
export interface SearchPredefinedAttributesCommandInput extends SearchPredefinedAttributesRequest {}
/**
 * @public
 *
 * The output of {@link SearchPredefinedAttributesCommand}.
 */
export interface SearchPredefinedAttributesCommandOutput extends SearchPredefinedAttributesResponse, __MetadataBearer {}

/**
 * <p>Predefined attributes that meet certain criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, SearchPredefinedAttributesCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, SearchPredefinedAttributesCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * const client = new ConnectClient(config);
 * const input = { // SearchPredefinedAttributesRequest
 *   InstanceId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   SearchCriteria: { // PredefinedAttributeSearchCriteria
 *     OrConditions: [ // PredefinedAttributeSearchConditionList
 *       {
 *         OrConditions: [
 *           "<PredefinedAttributeSearchCriteria>",
 *         ],
 *         AndConditions: [
 *           "<PredefinedAttributeSearchCriteria>",
 *         ],
 *         StringCondition: { // StringCondition
 *           FieldName: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *           ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *         },
 *       },
 *     ],
 *     AndConditions: [
 *       "<PredefinedAttributeSearchCriteria>",
 *     ],
 *     StringCondition: {
 *       FieldName: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ComparisonType: "STARTS_WITH" || "CONTAINS" || "EXACT",
 *     },
 *   },
 * };
 * const command = new SearchPredefinedAttributesCommand(input);
 * const response = await client.send(command);
 * // { // SearchPredefinedAttributesResponse
 * //   PredefinedAttributes: [ // PredefinedAttributeSearchSummaryList
 * //     { // PredefinedAttribute
 * //       Name: "STRING_VALUE",
 * //       Values: { // PredefinedAttributeValues Union: only one key present
 * //         StringList: [ // PredefinedAttributeStringValuesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       LastModifiedTime: new Date("TIMESTAMP"),
 * //       LastModifiedRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   ApproximateTotalCount: Number("long"),
 * // };
 *
 * ```
 *
 * @param SearchPredefinedAttributesCommandInput - {@link SearchPredefinedAttributesCommandInput}
 * @returns {@link SearchPredefinedAttributesCommandOutput}
 * @see {@link SearchPredefinedAttributesCommandInput} for command's `input` shape.
 * @see {@link SearchPredefinedAttributesCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 * @public
 */
export class SearchPredefinedAttributesCommand extends $Command
  .classBuilder<
    SearchPredefinedAttributesCommandInput,
    SearchPredefinedAttributesCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "SearchPredefinedAttributes", {})
  .n("ConnectClient", "SearchPredefinedAttributesCommand")
  .f(void 0, void 0)
  .ser(se_SearchPredefinedAttributesCommand)
  .de(de_SearchPredefinedAttributesCommand)
  .build() {}
