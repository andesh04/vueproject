Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
})

var sec = new Vue ({
    el: '#input',
    data: {
        message: 'hello'
    },
    methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
    }
})

var vue_det = new Vue({
  el: '#time',
  data: {
     timestamp: ""
  },
  created() {
    setInterval(this.getNow, 1000);
   },
   methods: {
    getNow: function() {
      const today = new Date();
      // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const watchtime = time;
        this.timestamp = watchtime;
    }
}
})

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' },
      {message: 'Cook'}
    ]
  }
})


Vue.component('button-counter' ,{
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click ="count++">Clicked for {{count}}</button>'
})

new Vue({ el: '#components-demo'})