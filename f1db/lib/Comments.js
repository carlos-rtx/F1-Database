"use client"
export default class Comment {
  constructor(content, show = false, ) {
    this.content = content;
    this.show = show;
    if(this.show === true) {
      console.log("Date: " + date + " Comment: " + content)
    }
    this.date = new Date();
  }
}