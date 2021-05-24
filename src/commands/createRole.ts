import RoleList from "../roles.json";

const CreateRole = (role: string): string => {
  if (!RoleList.some((roleItem) => roleItem.name === role))
    return "Probem adding role to your account. Please contact an administrator";
  return `${role} role has been added to your account`;
};
export default CreateRole;
