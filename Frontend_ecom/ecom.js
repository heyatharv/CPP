let form=document.querySelector('#btn');
let url='http://localhost/Ecommerce/createcart.php';
form.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let product=document.querySelector('#product').value;
    console.log(product);
    let quantity=document.querySelector('#quantity').value;
    console.log(quantity);
    let user=document.querySelector('#user').value;
    console.log(user);
    let data={
        
        "product":product,
        "quantity":quantity,
        "user":user       
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/Ecommerce/createcart.php';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-wwww-form-urlcencoded');
   
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readystate==4)
        {
        console.log('Product added');
        }
    else
        {
        console.log('Error occured');
        }
    }
    xhr.send(params);
});