// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  AssociateConfigurationItemsToApplicationRequest,
  AssociateConfigurationItemsToApplicationResponse,
} from "../models/models_0";
import {
  de_AssociateConfigurationItemsToApplicationCommand,
  se_AssociateConfigurationItemsToApplicationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateConfigurationItemsToApplicationCommand}.
 */
export interface AssociateConfigurationItemsToApplicationCommandInput
  extends AssociateConfigurationItemsToApplicationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateConfigurationItemsToApplicationCommand}.
 */
export interface AssociateConfigurationItemsToApplicationCommandOutput
  extends AssociateConfigurationItemsToApplicationResponse,
    __MetadataBearer {}

/**
 * <p>Associates one or more configuration items with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } from "@aws-sdk/client-application-discovery-service"; // ES Modules import
 * // const { ApplicationDiscoveryServiceClient, AssociateConfigurationItemsToApplicationCommand } = require("@aws-sdk/client-application-discovery-service"); // CommonJS import
 * const client = new ApplicationDiscoveryServiceClient(config);
 * const input = { // AssociateConfigurationItemsToApplicationRequest
 *   applicationConfigurationId: "STRING_VALUE", // required
 *   configurationIds: [ // ConfigurationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociateConfigurationItemsToApplicationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateConfigurationItemsToApplicationCommandInput - {@link AssociateConfigurationItemsToApplicationCommandInput}
 * @returns {@link AssociateConfigurationItemsToApplicationCommandOutput}
 * @see {@link AssociateConfigurationItemsToApplicationCommandInput} for command's `input` shape.
 * @see {@link AssociateConfigurationItemsToApplicationCommandOutput} for command's `response` shape.
 * @see {@link ApplicationDiscoveryServiceClientResolvedConfig | config} for ApplicationDiscoveryServiceClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>The user does not have permission to perform the action. Check the IAM
 *       policy associated with this user.</p>
 *
 * @throws {@link HomeRegionNotSetException} (client fault)
 *  <p>The home Region is not set. Set the home Region to continue.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more parameters are not valid. Verify the parameters and try again.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of one or more parameters are either invalid or out of range. Verify the
 *       parameter values and try again.</p>
 *
 * @throws {@link ServerInternalErrorException} (server fault)
 *  <p>The server experienced an internal error. Try again.</p>
 *
 * @throws {@link ApplicationDiscoveryServiceServiceException}
 * <p>Base exception class for all service exceptions from ApplicationDiscoveryService service.</p>
 *
 * @public
 */
export class AssociateConfigurationItemsToApplicationCommand extends $Command
  .classBuilder<
    AssociateConfigurationItemsToApplicationCommandInput,
    AssociateConfigurationItemsToApplicationCommandOutput,
    ApplicationDiscoveryServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ApplicationDiscoveryServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSPoseidonService_V2015_11_01", "AssociateConfigurationItemsToApplication", {})
  .n("ApplicationDiscoveryServiceClient", "AssociateConfigurationItemsToApplicationCommand")
  .f(void 0, void 0)
  .ser(se_AssociateConfigurationItemsToApplicationCommand)
  .de(de_AssociateConfigurationItemsToApplicationCommand)
  .build() {}
