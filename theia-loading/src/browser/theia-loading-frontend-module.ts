/**
 * Generated using theia-extension-generator
 */
import { TheiaLoadingCommandContribution, TheiaLoadingMenuContribution } from './theia-loading-contribution';
import {
    CommandContribution,
    MenuContribution
} from "@theia/core/lib/common";
import { ContainerModule } from "inversify";

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bind(CommandContribution).to(TheiaLoadingCommandContribution);
    bind(MenuContribution).to(TheiaLoadingMenuContribution);
});
