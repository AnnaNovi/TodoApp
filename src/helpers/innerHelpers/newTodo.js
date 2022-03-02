export class newTodo{
  constructor(content, done = false, note = '') {
    this.content = content;
    this.done = done;
    this.note = note;
  }
}