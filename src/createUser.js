const url='https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/';
const endpoint='users';
const $ = selector => {
  return document.querySelector(selector)
} 

const submitBtn=$('.post')
          submitBtn.addEventListener('click',()=>{
                createUser()
                event.preventDefault()
          })

    const createUser= () => {
     const name=$('.name');
     const avatar=$('.photo');

     if (!name.value.trim() || !avatar.value.trim()) { 
      showErrors()
      return
     }

      hideErrors();
     
      const data = { 
        avatar: avatar.value,
        createdAt:new Date(),
        name: name.value,
      }

      fetch(
          `${url}${endpoint}`,
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        )
    //document.location.reload()
    }

       const showErrors = () => {
        const helpers = document.querySelectorAll('input');
      
        helpers.forEach(element => {
          element.style = 'border: 2px solid orange'
        });
      }
      
      const hideErrors = () => {
        const helpers = document.querySelectorAll('input');
        helpers.forEach(element => {
          element.style = 'border: 1px solid blue'
        });
      }









































// const onReady = () => {
//   getDescriptions(data=>{
//     fillDescriptionContent(data)
//   })
// }

// const getDescriptions=callback=>{
//   fetch(`${url}${endpoint}`) 
//     .then(response=>{
//       if (response.ok && response.status === 200) {
//         return response.json()
//         .then(data=>{
//           callback(data)
//         })
//       }
//     }).catch(err=>{
//       console.log('Error',err)
//     })
//   }

//     const fillDescriptionContent=response=>{
//         response.forEach(item=>{
            
//              //header

//           let rowHeader=document.createElement('div')
//           let rowHeaderLeftItem=document.createElement('nav')
//           let rowHeaderRightItem=document.createElement('nav')
//           rowHeaderLeftItem.innerText=item.author
//           rowHeaderRightItem.innerText=item.title
//           rowHeader.appendChild(rowHeaderLeftItem)
//           rowHeader.appendChild(rowHeaderRightItem)
//           rowHeader.classList.add('row_header')
//           rowHeaderLeftItem.classList.add('bold_font')
            
           
//              //body

//           let rowBody=document.createElement('div')
//           rowBody.innerText=item.description
          
          
//             //mainContainer

//           let row=document.createElement('div')
//           row.classList.add('right_item')
//           row.appendChild(rowHeader)
//           row.appendChild(rowBody)
            
//           description.appendChild(row)
//         })
//     }

//   onReady()