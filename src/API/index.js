import { createClient } from "@supabase/supabase-js";

// CLIENT RELATED FUNCTIONS
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

// AUTH RELATED FUCNTIONS
export const signup = async (email, password) => {
  const response = await supabase.auth.signUp({
    email,
    password,
  });
  return response;
};

export const login = async (email, password) => {
  const response = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return response;
};

export const logout = async () => {
  const response = await supabase.auth.signOut();
  return response;
};

// TASK RELATED FUNCTIONS

export const newTask = async (task) => {
  const response = await supabase.from("Tasks").insert(task);
  return response;
};

export const getTasks = async (select = "*", order = "id", asc = false) => {
  const response = await supabase
    .from("Tasks")
    .select(select)
    .order(order, { ascending: asc });

  return response.data;
};

export const updateTask = async (task, where = "id") => {
  const response = await supabase
    .from("Tasks")
    .update({
      task_title: task.title,
      task_content: task.content,
    })
    .eq(where, task.id);

  return response;
};

export const deleteTask = async (taskId) => {
  const response = await supabase.from("Tasks").delete().eq("id", taskId);
  return response;
};

export const discardTask = async (taskId) => {
  const response = await supabase
    .from("Tasks")
    .update({ discarded: true })
    .eq("id", taskId);

  return response;
};

export const completeTask = async (taskId) => {
  const response = await supabase
    .from("Tasks")
    .update({ completed: true })
    .eq("id", taskId);

  return response;
};
