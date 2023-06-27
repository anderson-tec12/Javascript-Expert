import TableComponent from '../../shared/base/tableComponent.mjs';

export default class TableBrwoserComponent extends TableComponent{
  render(data){
   const tmplate = this.prepareData(data)

   document.body.insertAdjacentHTML("afterbegin", tmplate)
  }

  prepareData(data){
    const [firstItem] = data
    const theaders = Object.keys(firstItem)
                           .map(text => `<th scope="col">${text}</th>`)
    
    const joinLists = list => list.join('')   

    const tbodyValues = data
      .map(item => Object.values(item))
      .map(item => item.map(value => `<td>${value}</td>`))
      .map(tds => `<tr>${joinLists(tds)}</tr>`)
    
    const template = `
      <table class="table">
        <thead>
          <tr>
            ${joinLists(theaders)}
          </tr>
        </thead>
        <tbody>
          ${joinLists(tbodyValues)}
        </tbody>
      </table>
    `

    return template

  }
}