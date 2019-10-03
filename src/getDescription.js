fetch('https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/postblog') 
    .then(function(response){
        return response.json()
        .then(function (data){
          console.log(data)
          fillContentDescription(data)
        })
    }).catch(function(err){
      console.log('Error',err)
    })
   
    const fillContentDescription=function(response){
        response.forEach(function(item,index){
            
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


  