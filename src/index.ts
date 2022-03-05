type User = {
  name: string;
  age: number;
  id: string;
};

export const getUser = (params: { users: User[]; id: User["id"] }) =>
  params.users.find((user) => user.id === params.id);
