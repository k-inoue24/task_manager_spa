<script>
export default {
  name: 'Common',
  data() {
    return {
      formats: {
        input: ['YYYY-MM-DD'],
        data: ["YYYY/MM/DD"],
      },
      modelConfig: {
        type: 'string',
        mask: 'YYYY'+'年'+'M'+'月'+'D'+'日' + '（' + 'W' + '）', // Uses 'iso' if missing
      },
      newTask: '',
      newHour: '',
      id: 1,
      todos: [],
      mode: 'single',
      selectedDate: null,
    }
  },
  watch: {
    todos: {
        handler() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        deep: true
    }
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
  },
  methods: {
      addItem() {
          let taskItem = {
              taskDay: this.todayString,
              taskId: this.lastId,
              taskTitle: this.newTask,
              taskHour: this.newHour,
              taskDone: false
          }
          if(this.newTask != '' && this.newHour != '') {
              this.todos.push(taskItem);
              this.newTask = '';
              this.newHour = '';
          } else {
            alert('タスク名と予定工数をそれぞれ入力してください')
          }
      },
      deleteItem(item) {
        if (confirm('タスク名「' + item.taskTitle + '」を削除してよろしいですか？')) {
          this.todos = this.todos.filter(function(todo){
            return todo.taskId != item.taskId;
          },this)
        }
      },
      addFutureItem(){
        let taskItem = {
          taskDay: this.selectedDate,
          taskId: this.lastId,
          taskTitle: this.newTask,
          taskHour: this.newHour,
          taskDone: false
      }
      if(this.newTask != '' && this.newHour != '') {
          this.todos.push(taskItem);
          this.newTask = '';
          this.newHour = '';
      } else {
        alert('タスク名と予定工数をそれぞれ入力してください')
      }
    },
    checkConfirm(status,item){
      let alertMessage;
      let itemTitle = item.taskTitle;
      if(status == "remaining") alertMessage = 'タスク名「' + itemTitle + '」を完了にしてよろしいですか？';
      else alertMessage = 'タスク「' + itemTitle + '」を未完了に戻してよろしいですか？'
      if(!confirm(alertMessage)) item.taskDone = false;
    },
    downloadCSV(){
      let csv = '\ufeff' + '日付,タスク名,工数（h）\n'
      this.todos.forEach(el => {
        let line = el['taskDay'] + ',' + el['taskTitle']+ ',' + el['taskHour'] + '\n';
        csv += line;
      })
      let blob = new Blob([csv], { type: 'text/csv' });
      let link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'all_task.csv';
      link.click();
    }
  },
  computed: {
      today() {
          let today = new Date();
          return today;
      },
      todayString() {
          let dayArray = new Array("日","月","火","水","木","金","土");
          let todayString = this.today.getFullYear() + '年' + (this.today.getMonth() + 1) + '月' + this.today.getDate() + '日' + '（' + dayArray[this.today.getDay()] + '）';
          return todayString;
      },
      remainingTask(){
          return this.todos.filter(function(todo){
              return todo.taskDone == false && todo.taskDay == this.todayString;
          },this)
      },
      remainingHour(){
          let remainingHour = 0;
          this.remainingTask.forEach(function(el){
              remainingHour += parseInt(el.taskHour, 10);
          });
          return remainingHour;
      },
      completedTask(){
          return this.todos.filter(function(todo){
              return todo.taskDone == true && todo.taskDay == this.todayString
          },this);
      },
      completedHour(){
          let completedHour = 0;
          this.completedTask.forEach(function(el){
              completedHour += parseInt(el.taskHour, 10);
          });
          return completedHour;
      },
      lastId() {
        let lastId = 1;
        this.todos.forEach(function(el){
          if(lastId <= el.taskId) lastId = el.taskId + 1;
        });
        return lastId;
      },
      dateSelect() {
        let dateSelect = [];
        let dateSelectString = [];
        let dayArray = new Array("日","月","火","水","木","金","土");
        for(let i = 0; i < 9; i++) {
          dateSelect[i] = this.today.setDate(this.today.getDate() - i);
          dateSelectString[i] = dateSelect[i].getFullYear() + '年' + (dateSelect[i].getMonth() + 1) + '月' + dateSelect[i].getDate() + '日' + '（' + dayArray[dateSelect[i].getDay()] + '）';
        }
        return dateSelect;
      },
      futureTask(){
        return this.todos.filter(function(todo){
          return todo.taskDone == false && todo.taskDay == this.selectedDate
        },this);
      },
      futureDoneTask(){
        return this.todos.filter(function(todo){
          return todo.taskDone == true && todo.taskDay == this.selectedDate
        },this);
      },
      futureTaskHour(){
        let futureTaskHour = 0;
        this.futureTask.forEach(function(el){
          futureTaskHour += parseInt(el.taskHour, 10);
        });
        return futureTaskHour;
      },
      futureDoneTaskHour(){
        let futureDoneTaskHour = 0;
        this.futureDoneTask.forEach(function(el){
          futureDoneTaskHour += parseInt(el.taskHour, 10);
        });
        return futureDoneTaskHour;
      },
      archiveTask(){
        return this.todos.filter(function(todo){
          return todo.taskDone == false && todo.taskDay == this.selectedDate
        },this);
      },
    },
  }
</script>

