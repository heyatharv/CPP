let form=document.querySelector('#createbtn');
let url='http://localhost/Ecommerce/createorder.php';
form.addEventListener('click',(e)=>{
    e.preventDefault();
    let order_summary=document.querySelector('#order_summary').value;
    console.log(order_summary);
    let user=document.querySelector('#user').value;
    console.log(user);
    let status=document.querySelector('#status').value;
    console.log(status);
    let data={
        "order_summary":order_summary,
        "user":user,
        "status":status
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/Ecommerce/createorder.php';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-wwww-form-urlcencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readystate==4)
        {
        console.log('Order placed');
        }
    else
        {
        console.log('Error occured');
        }
    }
    xhr.send(params);
});