// Initalize_State of todos

const initialState = {
  todos: [{
    id:1,
    content: 'coding',
    completed: false
  }]
}

// todos reducer 
const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      const { id, content } = action.payload;
      return {
        todos: [
          ...state.todos,
          { content, completed: false, id }
        ]
      }
    }
    
    // toggle todos 

    case 'TOGGLE_TODO': {
      const { id } = action.payload;
      const todos = state.todos.map(obj => obj.id === id ? { ...obj, completed: !obj.completed } : obj);
      return { todos }
    }

    default: {
      return state;
    }
  }
}

export default todosReducer;
