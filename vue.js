// // import styled from 'vue-styled-components';
// Vue.directive("focus", {
//   // Quand l'élément lié est inséré dans le DOM...
//   inserted: function (el) {
//     // L'élément prend le focus
//     el.focus();
//   },
// });
var app6 = new Vue({
  el: "#app-6",
  data: {
    message: "",
  },
  methods: {
    HotKey: function (event) {
      console.log(event)
        if (event.key === "²") {this.delTodo(0)}
        if (event.key === "&" || event.key === "1") {this.delTodo(0)}
        if (event.key === "é" || event.key === "2") {this.delTodo(1)}
        if (event.key === "\"" || event.key === "3") {this.delTodo(2)}
        if (event.key === "\'" || event.key === "4") {this.delTodo(3)}
        if (event.key === "(" || event.key === "5") {this.delTodo(4)}
        if (event.key === "-" || event.key === "6") {this.delTodo(5)}
        if (event.key === "è" || event.key === "7") {this.delTodo(6)}
    },
    addTodo: function () {
      app7.groceryList.push({
        id:
          app7.groceryList.length !== 0
            ? app7.groceryList[app7.groceryList.length - 1].id + 1
            : 1,
        text: this.message,
      });
      this.message = "";
      this.cookieRefresh();
      app6.$refs.taskedit.focus();
    },
    delTodo: function (id) {
      app7.groceryList.splice(id, 1);
      app6.cookieRefresh();
      app6.$refs.taskedit.focus();
    },
    cookieRefresh: function () {
      const datasent = JSON.stringify(app7.groceryList);
      document.cookie = "vueTodo=" + datasent + app7.expire;
    },
  },
});

//la suite est trés marrante!
// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   },
//   methods: {
//     reverseMessage: function () {
//       this.message = this.message.split('').reverse().join('')
//     }
//   }
// })

// Define a new component called todo-item
Vue.component("todo-item", {
  props: ["todo", "index"],
  template:
    // '<li v-on:click="delTodo(index)" class="todo"><div class="todotext">{{ todo.text }}</div><Xtodo v-bind:id="index"></Xtodo></li>',
    '<li v-on:click="delTodo(index)" class="todo"><div class="todotext">{{ todo.text }}</div></li>',
  methods: {
    delTodo: function (id) {
      app7.groceryList.splice(id, 1);
      app6.cookieRefresh();
      app6.$refs.taskedit.focus();
    },
  },
});

// Vue.component("Xtodo", {
//   props: ["id"],
//   template: '<button v-on:click="delTodo(id)">X</button>',
//   methods: {
//     delTodo: function (id) {
//       app7.groceryList.splice(id, 1);
//       const datasent = JSON.stringify(app7.groceryList);
//       document.cookie = "vueTodo=" + datasent + app7.expire;
//     },
//   },
// });

var app7 = new Vue({
  el: "#app-7",
  data: {
    groceryList: [
      { id: 0, text: "Book trip to Tokyo" },
      { id: 1, text: "Cook dinner" },
      { id: 2, text: "Wash the dishes" },
    ],
    expire: "",
  },

  created: function () {
    const d = new Date();
    d.setTime(d.getTime() + 360 * 24 * 60 * 60 * 1000);
    this.expire = ";expires=" + d.toUTCString() + ";path=/";

    if (document.cookie) {
      const cookiedata = document.cookie.replace(
        /(?:(?:^|.*;\s*)vueTodo\s*\=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.groceryList = JSON.parse(cookiedata);
    }
  },
});
