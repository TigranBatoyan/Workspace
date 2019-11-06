
const email=document.getElementById('email')
const password=document.getElementById('password')
const inp=document.getElementsByClassName('reg')
const login = () =>{
    const data={
        password: password.value,
        email: email.value
    }
    fetch('https://it-blog-posts.herokuapp.com/api/people/login',
        {
            method:'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(data=>{
                if(data.status === 200){
                        email.value='',
                        password.value=''
                        window.open('workspace.html')
                        console.log(data)
                }else{
                    for(let n=0;n<=inp.length;n++){
                        inp[n].classList.add('red')
                    }   
                }
            })
}

// const login = () =>{
//     fetch('https://it-blog-posts.herokuapp.com/api/people')
//             .then(response=>response.json()).then(data=>console.log(data))
// }