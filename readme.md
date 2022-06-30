# Todo API

### Get all todos
/api/todos

returns array of todos
### Get single todo
/api/todos/{id}

returns single object todo
### Add todo
/api/todos

{
    "title": String,
    "completed": Boolean
}

returns the added todo object
### Update todo
/api/todos/{id}

{
    "completed": Boolean
}

returns mongodb info about the action
### Delete todo
/api/todos/{id}

returns mongodb info about the action
  
  ___


