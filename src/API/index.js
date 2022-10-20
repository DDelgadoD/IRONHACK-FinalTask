import { createClient } from '@supabase/supabase-js';

//TODO : Repasar y dar un buen formato

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

console.log(import.meta.env.BASE_URL)

export const signup = async (email, password) =>{
    const response = await supabase.auth.signUp({
        email,
        password
    })
    
    return response;

}

export const login = async (email, password) =>{
    const response = await supabase.auth.signInWithPassword({
        email,
        password
    })

    return response;
}

/* task
    {
        task.id
        task.title
        task.content
    }
*/

export const newTask = async (task) => {
    const response = await supabase.from('Tasks')
    .insert({
        user_id: task.id,
        task_title: task.title,
        task_content: task.content
    })

    console.log(response);
}

export const getTasks = async () => {
    const response = await supabase.from('Tasks')
    .select('*')
    .order('id', {ascending: false}) 
    
    return (response.data);
}

/* task
    {
        task.id
        task.title
        task.content
    }
*/

const deleteTasks = async (task) => {
    const response = await supabase
        .from('Tasks')
        .update({
            task_title: task.title,
            task_content: task.content
        })
        .eq('id', task.id)

    console.log(response);
}

/* task
    {
        task.id
        task.title
        task.content
    }
*/

const updateTasks = async (task) => {
    const response = await supabase
        .from('Tasks')
        .delete()
        .eq('id', '1')

    console.log(response);
}

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    return response
}


/*

const registro = async () =>{
    const result = await supabase.auth.signUp({
        email: 'david.delgado82@gmail.com',
        password: '12345678'
    })
    console.log(result)
}

const login = async () =>{
    const response = await supabase.auth.signInWithPassword({
        email: 'david.delgado82@gmail.com',
        password: '12345678'
    })

    console.log(response)
    console.log(response.data.user.id)
    // newTask(response.data.user.id)
    tasks.value = await getTasks(response.data.user.id)
    loaded.value = true;

}

const newTask = async (id) => {
    const response = await supabase.from('Tasks')
    .insert({
        user_id: id,
        task_title: "Title",
        task_content: "Content"
    })

    console.log(response);
}

const getTasks = async (id) => {
    const response = await supabase.from('Tasks')
    .select('*')
    .order('id', {ascending: false}) 
    
    console.log(response.data)
    return (response.data);
}

const deleteTasks = async (id) => {
    const response = await supabase
        .from('Tasks')
        .update({
            task_title: 'New Title',
            task_content: 'New content'
        })
        .eq('id', '1')

    console.log(response);
}

const updateTasks = async (id) => {
    const response = await supabase
        .from('Tasks')
        .delete()
        .eq('id', '1')

    console.log(response);
}


onMounted(() => {
    // registro()
    // login()
   
});
*/