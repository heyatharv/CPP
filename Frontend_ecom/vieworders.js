getOrder=()=>{
    let url2='http://localhost/Ecommerce/getOrder.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url2,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let table=document.querySelector('#Myorders');
        let response=JSON.parse(xhr.responseText);
        let {orders}=response;
        console.log(xhr.responseText);
        orders.forEach(cr=>{
            let {id,order_summary,status,user}=cr;
            let tableid=document.createElement('td');
            let crid=document.createTextNode(id);                    
            let tableuser=document.createElement('td');
            let cruser=document.createTextNode(user);  
            let tableorder_summary=document.createElement('td');
            let crorder_summary=document.createTextNode(order_summary);   
            let tablestatus=document.createElement('td');
            let crstatus=document.createTextNode(status);   
            
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('Delete');
            
            

            let tablerow=document.createElement('tr');
            deletebtn.appendChild(deletebtntxt);
            tableid.appendChild(crid);
            tableuser.appendChild(cruser);
            tableorder_summary.appendChild(crorder_summary);
            tablestatus.appendChild(crstatus);

           
            table.appendChild(tableid);
            table.appendChild(tableuser);
            table.appendChild(tableorder_summary);
            table.appendChild(tablestatus);
            
            table.appendChild(deletebtn);
            table.appendChild(tablerow);

            let url3='http://localhost/Ecommerce/deleteOrder.php';
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
getOrder();

