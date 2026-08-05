export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: { title: string };
}

export const fetchUsers = async (): Promise<User[]> => {
  // Fetching real API data as required by the assessment
  const response = await fetch('https://dummyjson.com/users?limit=10');
  if (!response.ok) throw new Error('Failed to fetch users');
  const data = await response.json();
  return data.users;
};