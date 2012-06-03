$(function() {

Todo = Backbone.Model.extend({
//Modelo de soporte para nuestras tareas
name: null
});

//Listado de TODOS
TodoList = Backbone.Collection.extend({
    initialize: function(){
        this.bind("add", function( model ){
            view.render( model );
        })
    }
});

//Vista de los TODOS
TodoView = Backbone.View.extend({

    tagName: 'li',

    events: {
        'click #add-input':  'getTodo',
    },

    initialize: function() {
        this.todolist = new TodoList();
        _.bindAll(this, 'render');
    }, 

    getTodo: function() {
        var todo = $('#input').val();
        this.todolist.add( {name: todo} );
    },

    render: function( model ) {
        $("#todo-list").append("<li>"+ model.get("name")+"</li>");
    },

});

var view = new TodoView({el: 'body'});
});​