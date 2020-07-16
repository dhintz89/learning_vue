var app = new Vue({     // initialize Vue - var can be named anything
    el: '#app',   // node (element) this Vue instance links to
    data: {       // data to be made available to node
        message: "Hello World, this is my first Vue app!"
    }
})

var conditional = new Vue({
    el: "#directive",
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var conditional = new Vue({
    el: '#conditional',
    data: {
        seen: true  // any truthy value will cause v-if to be rendered
    }
})

var forArry = new Vue({
    el: "#forArry",
    data: {
        todos: [
            {text: 'Learn JS'},   // can be any kind of array, doesn't need to be an object
            {text: 'Learn Vue'},
            {text: 'Build something awesome'},
            {text: 'Profit!'}
        ]
    }
})

var listener = new Vue({
    el: "#listener",
    data: {
        message: "!DOG!"
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var boundForm = new Vue({
    el: "#boundForm",
    data: {
        message: "Hello Vue!"
    }
})

