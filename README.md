# Asauna

[Asauna Live](https://asauna.herokuapp.com/?#/) -- Open in a new tab to avoid being redirected!

![Header](https://user-images.githubusercontent.com/49211034/61145478-677af980-a48c-11e9-8902-2f06f3f68548.png)


## Showcase

__Clone of Asana, a project and task management webapp.__
###### Rails backend & React/Redux frontend

* Create, edit, and navigate to different workspaces.
![aYGm1XSQXC](https://user-images.githubusercontent.com/49211034/62726618-848fe300-b9cc-11e9-9e86-13a449eced9a.gif)

* Simplify your team organization by creating separate workspaces for your projects.
* Create projects to track your tasks.

![x2KRAQ6yvd](https://user-images.githubusercontent.com/49211034/61146890-ed4c7400-a48f-11e9-9eaf-26540a0fab37.gif)

* Create project-specific tasks.
* Access all of your tasks under MyTasks.

![zQt79CpfyE](https://user-images.githubusercontent.com/49211034/61148180-0c98d080-a493-11e9-962c-9da88e4507fa.gif)

* Complete your tasks by checking it off.

![1lTpRcHBIw](https://user-images.githubusercontent.com/49211034/61148298-4ff33f00-a493-11e9-8e20-57a5c4e04afc.gif)


## Deleting task animation

### The Code
```
handleRemove(e) {
    if (e.target.classList[1] === "fa-check-circle") {
        e.target.classList.add("done--check-fade")
        let target = e.currentTarget;
        target.classList.add("complete--task");

        setTimeout(() => {
            target.classList.add("complete--task-fade");
        }, 750);

        setTimeout(() => {
            this.props.deleteTask(this.props.task.id)
            .then(() => {
                this.props.fetchTasks(this.props.match.params.workspaceId)
            })
        }, 1500);
    }
}
```

### The CSS

```
.complete--task {
    background: linear-gradient(135deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, 
    rgba(255, 82, 99, 0.8) 51%, rgba(255, 115, 129, 0.8) 60%, 
    rgba(252, 189, 1, 0.8) 80%, rgba(0,0,0,0) 100%);
    background-size: 300%;
    background-position: 230%;
    min-height: initial;
}
```


## Deployment Instructions

1. `npm install`
2. `bundle install`
3. enable postgres
4. `rails db:setup`
