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
  console.log(interactObject.member?.roles);
  if (!RoleToApply)
    return "Probem adding role to your account. Please contact an administrator";
  try {
    // connect to the guild, find the user and add the role based on the
  } catch (error) {
    console.error(error);
  }
  return `:white_check_mark:   \` ${interactObject.name} \` role has been added for you on this server`;
};
export default RoleAssignment;
