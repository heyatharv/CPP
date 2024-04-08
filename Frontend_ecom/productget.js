getproduct=()=>{
    let url2='http://localhost/Ecommerce/getproduct.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url2,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let table=document.querySelector('#Myproduct');
        let response=JSON.parse(xhr.responseText);
        let {product}=response;
        console.log(xhr.responseText);
        product.forEach(cr=>{
            let {id,name,price,category}=cr;
            let tableid=document.createElement('td');
            let crid=document.createTextNode(id);
            let tablename=document.createElement('td');
            let crname=document.createTextNode(name);  
            let tableprice=document.createElement('td');
            let crprice=document.createTextNode(price);       
            let tablecategory=document.createElement('td');
            let crcategory=document.createTextNode(category);         
            
            
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('Delete');
            
            

            let tablerow=document.createElement('tr');
            deletebtn.appendChild(deletebtntxt);
           
            tableid.appendChild(crid);
            tablename.appendChild(crname);
            tableprice.appendChild(crprice);
            tablecategory.appendChild(crcategory);
            
           
            table.appendChild(tableid);
            table.appendChild(tablename);
            table.appendChild(tableprice);
            table.appendChild(tablecategory);

            table.appendChild(deletebtn);
            table.appendChild(tablerow);

            let url3='http://localhost/Ecommerce/deleteproduct.php';
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
getproduct();

