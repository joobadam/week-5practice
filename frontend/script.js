
const monthComponent = function(nth, name,days){
    let daysHtml = "";

    for (let i= 1 ; i <= days; i++){
        daysHtml+= dayComponant(i)
    }
    return `
      <div id="${nth} " class="${name} ">
      <h2>${name} </h2>
      ${daysHtml}
      </div>  
    `
}

const dayComponant = function(dayCount) {
    return `
    <div class="day">${dayCount} </div>  `
}


const rootElement = document.querySelector('#root')
rootElement.insertAdjacentHTML('beforeend',monthComponent(1, "january", 31));
rootElement.insertAdjacentHTML('beforeend',monthComponent(2, "february", 28))
