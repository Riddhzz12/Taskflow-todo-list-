const BASE_URL = "http://localhost:3001";

// LOGIN
export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
};

// GET TODOS
export const getTodos = async (token: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.json();
};

// ADD TODO
export const addTodo = async (title: string, token: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  return res.json();
};

//sab api ek jagah se chale iska goal