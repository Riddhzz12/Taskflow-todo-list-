const BASE_URL = "http://localhost:3001";

/* ======================
   LOGIN
====================== */
export const loginUser = async (email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

/* ======================
   REGISTER
====================== */
export const registerUser = async (name: string, email: string, password: string) => {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Register failed");
  }

  return data;
};

/* ======================
   GET TODOS
====================== */
export const getTodos = async (token: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch todos");
  }

  return data;
};

/* ======================
   ADD TODO
====================== */
export const addTodo = async (title: string, token: string) => {
  const res = await fetch(`${BASE_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ title }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to add todo");
  }

  return data;
};

/* ======================
   TOGGLE TODO
====================== */
export const toggleTodo = async (id: number, token: string) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to toggle todo");
  }

  return data;
};

/* ======================
   DELETE TODO
====================== */
export const deleteTodo = async (id: number, token: string) => {
  const res = await fetch(`${BASE_URL}/todos/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to delete todo");
  }

  return data;
};