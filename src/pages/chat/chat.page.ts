import { Component } from '@angular/core';

declare var io;

@Component({
    selector: 'chat',
    templateUrl: 'chat.page.html'
})

export class ChatPage {
    title: string;
    socket: any;
    friends: any;
    msg: string;
    messages: string;
    chats = [];

    constructor() {
        this.title = 'Chat Levissima';
        this.socketAuth();
    }

    public socketAuth(): void {
      //let token = localStorage.getItem('id_token');
      this.socket = io.connect('http://localhost:3000');
      this.socket.emit('join', 'Diego');
      this.socket.on('chat', (client, msg) => {
        console.log("Usuário =>", client);
        console.log("Mensagem =>", msg);
        this.chats.push(msg);
      });
  }

  sendMessage(): void {
    this.socket.emit('send', this.messages);
  }

}
