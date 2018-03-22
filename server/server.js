let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// let newTodo = new Todo({
//   text: 'Cook dinner'
// })

// newTodo.save().then((doc) => {
//   console.log(`saved todo ${doc}`)
// }, (err) => {
//   console.log('Unable to save todo');
// });

let newTodo = new Todo ({
  text: 'Read a book',
  completed: false,
  completedAt: 123456
});

newTodo.save().then((doc) => {
  console.log(`Added Todo ${doc}`)
}, (err) => {
  console.log('Unable to add Todo ',err);
})