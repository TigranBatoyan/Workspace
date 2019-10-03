const getUser = function () {
    //runSppiner(); 
    fetch(
      "https://5d8e0901370f02001405c7c9.mockapi.io/api/v1/postblog/users", 
    )
      .then(function (response) { 
        return response.json()
        .then(function (data) { 
          fillContentName(data);
        });
      })
      .catch(function (err) { 
        console.log("Error", err);
      });
  };

  const runSppiner = function () {
    content.innerText = "Loading...";
  };

  const fillContentName = function (response) {
    response.forEach(function(item,index){

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