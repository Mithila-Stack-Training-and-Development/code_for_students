export const toUserInList = (user) => {
  if (!user) return null;
  return {
    id: user._id,
    name: user.name,
    email: user.email,
  };
};

export const toUserInDetail = (user) => {
  const baseDto = toUserInList(user);
  if(!baseDto) return null;
  return {
    ...baseDto,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
};