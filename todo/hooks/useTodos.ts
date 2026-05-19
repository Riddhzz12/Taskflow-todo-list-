"use client";

import { useEffect, useState } from "react";
import { getTodos } from "@/services/api";

export function useTodos() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const token = localStorage.getItem("token") || "";

    if (!token) return;

    getTodos(token).then((data) => {
      setTasks(data);
    });
  }, []);

  return { tasks, setTasks };
}

/*hook kya krega:
page load pe todos fetch krega
state manage krega
reuse ho skta hai har page mein*/