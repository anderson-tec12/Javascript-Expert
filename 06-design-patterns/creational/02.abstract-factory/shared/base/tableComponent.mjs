import NotImplementedExepted from '../notImplementedExepted.mjs';

NotImplementedExepted

export default class TableComponent{
  render(data){
    throw new NotImplementedExepted(this.render.name)
  }
}