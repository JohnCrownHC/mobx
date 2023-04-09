import { action, makeAutoObservable, observable } from 'mobx';
import axios from 'axios';

interface IComment {
  id: number;
  name: string;
  email: string;
  body: string;
}

class Comments {
  @observable comments: IComment[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async getComments() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments?_limit=20',
    );
    this.comments = [...response.data];
  }
}

export default new Comments();
