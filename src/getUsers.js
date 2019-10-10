const url='https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/';
const endpoint='users';
const endpoint2='postblog';

const $ = selector =>  document.querySelector(selector)


   //users

const users = () => {
  getUsers( data => {
    fillContentName(data)
  })
}


const getUsers =  callback => {
    fetch(`${url}${endpoint}`)
      .then( response => { 
        return response.json()
        .then( data => { 
          callback(data);
        });
      })
      .catch( err => { 
        console.log("Error", err);
      });
  };

  const fillContentName = response => {
    response.forEach( item => {

        //img
    let photo=document.createElement('img')
    photo.classList.add('avatar')
    photo.setAttribute('src',item.avatar)


        //name
    let name=document.createElement('label')
    name.innerText=item.name;
    name.classList.add('name')
  

       //mainContent
    let row=document.createElement('div'); 
    row.appendChild(photo);
    row.appendChild(name);
    row.classList.add('list')
      
    content.appendChild(row)
    })
  };
  
  users()

         //descriptions

  const descriptions = () => {
    getDescriptions( data => {
      fillDescriptionContent(data)
    })
  }
  
  const getDescriptions = callback=>{
    fetch(`${url}${endpoint2}`) 
      .then(response=>{
        if (response.ok && response.status === 200) {
          return response.json()
          .then( data => {
            callback(data)
          })
        }
      }).catch(err=>{
        console.log('Error',err)
      })
    }
  
      const fillDescriptionContent= response => {
          response.forEach( item => {
              
               //header
  
            let rowHeader=document.createElement('div')
            let rowHeaderLeftItem=document.createElement('nav')
            let rowHeaderRightItem=document.createElement('nav')
            rowHeaderLeftItem.innerText=item.author
            rowHeaderRightItem.innerText=item.title
            rowHeader.appendChild(rowHeaderLeftItem)
            rowHeader.appendChild(rowHeaderRightItem)
            rowHeader.classList.add('row_header')
            rowHeaderLeftItem.classList.add('bold_font')
              
             
               //body
  
            let rowBody=document.createElement('div')
            rowBody.innerText=item.description
            
            
              //mainContainer
  
            let row=document.createElement('div')
            row.classList.add('right_item')
            row.appendChild(rowHeader)
            row.appendChild(rowBody)
              
            description.appendChild(row)
          })
      }
  
    descriptions()
    
    