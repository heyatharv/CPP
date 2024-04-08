getCart=()=>{
    let url2='http://localhost/Ecommerce/getCart.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url2,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let table=document.querySelector('#Mycart');
        let response=JSON.parse(xhr.responseText);
        let {cart}=response;
        console.log(xhr.responseText);
        cart.forEach(cr=>{
            let {id,product,quantity,user}=cr;
            let tableid=document.createElement('td');
            let crid=document.createTextNode(id);
            let tableuser=document.createElement('td');
            let cruser=document.createTextNode(user);  
            let tableproduct=document.createElement('td');
            let crproduct=document.createTextNode(product);       
            let tablequantity=document.createElement('td');
            let crquantity=document.createTextNode(quantity);         
            
            
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('Delete');
            
            

            let tablerow=document.createElement('tr');
            deletebtn.appendChild(deletebtntxt);
           
            tableid.appendChild(crid);
            tableproduct.appendChild(crproduct);
            tablequantity.appendChild(crquantity);
            tableuser.appendChild(cruser);
            
           
            table.appendChild(tableid);
            table.appendChild(tableproduct);
            table.appendChild(tablequantity);
            table.appendChild(tableuser);

            table.appendChild(deletebtn);
            table.appendChild(tablerow);

            let url3='http://localhost/Ecommerce/deletecart.php';
            deletebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                let id=cr.id;
                let data={
                    "id":id
                };
                let params=JSON.stringify(data);
                let xhr=new XMLHttpRequest();
                xhr.open('DELETE',url3,true);
                xhr.onload=()=>{
                    if(xhr.status==200||xhr.readyState==4)
                    {
                        console.log('Product deleted');
                        location.reload();
                    }
                    else
                    {
                        console.log('Error occured');
                    }
                }
                xhr.send(params);
            });
        });
        }
        else{
            console.log('error occured');
        }
    }
    xhr.send();
}
getCart();

