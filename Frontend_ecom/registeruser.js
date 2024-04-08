let form=document.querySelector('#user');
let url='http://localhost/Ecommerce/createuser.php';
form.addEventListener('click',(e)=>{
    e.preventDefault();
    let name=document.querySelector('#name').value;
    console.log(name);
    let phone=document.querySelector('#phone').value;
    console.log(phone);
    let address=document.querySelector('#address').value;
    console.log(address);
   
    let data={
        "name":name,
        "phone":phone,
        "address":address
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/Ecommerce/createuser.php';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-wwww-form-urlcencoded');
   
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readystate==4)
        {
        console.log('user created');
        }
    else
        {
        console.log('Error occured');
        }
    }
    xhr.send(params);
});