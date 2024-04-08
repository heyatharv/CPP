let form=document.querySelector('#createcategory');
let url='http://localhost/Ecommerce/createcategory.php';
form.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let name=document.querySelector('#name').value;
    console.log(name);
   
    let data={
        
        "name":name
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    let url='http://localhost/Ecommerce/createcategory.php';
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-wwww-form-urlcencoded');
   
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readystate==4)
        {
        console.log('category created');
        }
    else
        {
        console.log('Error occured');
        }
    }
    xhr.send(params);
});