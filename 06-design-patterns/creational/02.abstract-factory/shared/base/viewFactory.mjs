import NotImplementedExepted from '../notImplementedExepted.mjs';

export default class ViewFactory{
  createTable(){
    throw new NotImplementedExepted(this.createTable.name)
  }
}