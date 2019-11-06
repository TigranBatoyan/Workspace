const userName=document.getElementById('name')
const lastName=document.getElementById('lastname')
const email=document.getElementById('email')
const password=document.getElementById('password')
const inp=document.getElementsByClassName('reg')

const register = () =>{
    const data = {
        username:userName.value,
        lastname:lastName.value,
        email:email.value,
        password:password.value
    }
    if(data.username && data.lastname && data.email && data.password){
        fetch('https://it-blog-posts.herokuapp.com/api/people',
                {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                    'Content-Type': 'application/json'
                    }
                }
            ).then(data => {
                userName.value='',
                lastName.value='',
                email.value='',
                password.value=''
                window.open('login.html')
                console.log(data)
            })
    }else{   
        for(let n=0;n<=inp.length;n++){ 
                 inp[n].classList.add('red')
        }   
    }
}