import { useListUsers } from '@http/generated/api';

export const App = () => {
  const { data } = useListUsers();
  console.log(data);

  return (
    <div>
      <h1 className="text-gray-500">Users</h1>
      <ul>
        {data?.data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
