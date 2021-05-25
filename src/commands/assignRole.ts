import { Client, Interaction } from "discord.js";
import RoleList from "../roles.json";

const RoleAssignment = (
  interactObject: Interaction,
  client: Client
): string => {
  // console.log(client.guilds);
  const RoleToApply = RoleList.find(
    (roleItem) => roleItem.name === interactObject.name
  );
  if (!RoleToApply)
    return "Problem adding role to your account. Please contact an administrator";

  const mapOfRoles = interactObject?.member?.roles.cache.map((r) => r.id);
  try {
    console.log(mapOfRoles?.includes(RoleToApply.id));
    if (!mapOfRoles?.includes(RoleToApply.id)) {
      interactObject.member?.roles.add(RoleToApply.id);
      return `:white_check_mark:  ${RoleToApply.emojiCode} \` ${interactObject.name} \` role has been assigned for you on this server. Your channels have expanded`;
    }

    interactObject.member?.roles.remove(RoleToApply.id);
    return `:no_entry:  ${RoleToApply.emojiCode} \` ${interactObject.name} \` role has been removed for you on this server. Your channels have been reduced`;
  } catch (error) {
    return `There was a problem with the discord api. Please contact an administrator`;
  }
};
export default RoleAssignment;
