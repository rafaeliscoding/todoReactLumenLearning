import Alt from '../alt.js';
import request from 'superagent';

//where youe actions go!!!!
class TodoActions {
  loadActions(){
    return (dispatch)=>{
      request.get('/api/todos')
      // .set("header", "value")
      .end((err, res)=>{
        if (err){
          console.log('error', err);
        }
        //read up on res.text
        return dispatch(JSON.parse(res.text).todos);
      })
    }
  }
  createTodo(){
    return (dispatch) =>{
      request
      .post('api/todos')
      .end((err,res) =>{
        if (err) return console.log("error", err);
        return dispatch(JSON.parse(res.text));
      })

    }
  }
  updateTodoTitle(item, title){
    return (dispatch) =>{
      let newTodo = {...item};
      newTodo.title = title;
      request
        .put(`/api/todos/${item._id}`)
        .send(newTodo)
        .end((err,res) =>{
          if(err) return console.log("err", err)

          return dispatch(JSON.parse(res.text));
        })
    }
  }
  updateTodoChecked(todoItem, checked){
    return (dispatch) =>{
      let newTodo = {...todoItem};
      newTodo.done = checked;
      request
        .put(`/api/todos/${todoItem._id}`)
        .send(newTodo)
        .end((err,res) =>{
          if(err) return console.log("err", err)

          return dispatch(JSON.parse(res.text));
        })
    }

  }

}

export default Alt.createActions(TodoActions);
