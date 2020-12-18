import { injectable, inject } from "inversify";
import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from "@theia/core/lib/common";
import { CommonMenus } from "@theia/core/lib/browser";

export const TheiaLoadingCommand = {
    id: 'TheiaLoading.command',
    label: "Say Hello"
};

@injectable()
export class TheiaLoadingCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
    ) { }

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(TheiaLoadingCommand, {
            execute: () => this.messageService.info('Hello World!')
        });
    }
}

@injectable()
export class TheiaLoadingMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: TheiaLoadingCommand.id,
            label: TheiaLoadingCommand.label
        });
    }
}
