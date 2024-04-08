let form=document.querySelector('#product');
let url='http://localhost/Ecommerce/createproduct.php';
form.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let name=document.querySelector('#name').value;
    console.log(name);
    let price=document.querySelector('#price').value;
    console.log(price);
    let category=document.querySelector('#category').value;
    console.log(category);
    let data={
        "name":name,
        "price":price,
        "category":category       
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/Ecommerce/createproduct.php';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-wwww-form-urlcencoded');
   
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readystate==4)
        {
        console.log('Product');
        }
    else
        {
        console.log('Error occured');
        }
    }
    xhr.send(params);
});