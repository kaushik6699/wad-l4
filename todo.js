// todo.js
const todoList = () => 
{
  let  =  l[];
  const add = (todoItem) => 
  {
    //push the todo
    l.push(todoItem);
  };
  const markAsComplete = (index) => 
  {
    all[index].completed = true;
  };
  //overdue
  
  const overdue = () => 
  {
    return l.filter
    (
      (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
    );
  };
  //dueToday
  const dueToday = () => {
    return all.filter(
      (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
    );
  };
  const dueLater = () => {
    return l.filter(
      (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
    );
  };
  return { l, add, markAsComplete, overdue, dueToday, dueLater };
};
module.exports = todoList;
