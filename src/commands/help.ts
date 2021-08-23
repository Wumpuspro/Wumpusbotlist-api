import { Command, CommandContext, Permission } from './command';

export default class HelpCommand implements Command {
    name = 'help';
    precondition: Permission = 'KICK_MEMBERS';
    
    execute = async (ctx: CommandContext) => {
        return ctx.channel.send(
            '🔨 `- accept <bot> <reason>` -> accept bot user with reason\n' +
            '🅰 `- add-badge <bot> <badge_name>` -> add a badge to a bot\n' +
            '🅰 `- clear-badges <bot>` -> clear badges from a bot\n' +
            '🅰 `- delete <bot> <reason>` -> delete a bot from the list\n' +
            '🔨 `- decline <bot> <reason>` -> decline bot user with reason\n' +
            '🔨 `- help` -> show this\n' +
            '✅ `- ping` -> `dbots ping` -> pong!\n' +
            '🔨 `- q` -> show approval queue');
    }
}
