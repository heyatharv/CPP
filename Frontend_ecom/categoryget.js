getcategory=()=>{
    let url2='http://localhost/Ecommerce/getcategory.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url2,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let table=document.querySelector('#Mycategory');
        let response=JSON.parse(xhr.responseText);
        let {category}=response;
        console.log(xhr.responseText);
        category.forEach(cr=>{
            let {id,name}=cr;
            let tableid=document.createElement('td');
            let crid=document.createTextNode(id);
            let tablename=document.createElement('td');
            let crname=document.createTextNode(name);  
                 
            
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('Delete');
            
            

            let tablerow=document.createElement('tr');
            deletebtn.appendChild(deletebtntxt);
           
            tableid.appendChild(crid);
            tablename.appendChild(crname);
           
           
            table.appendChild(tableid);
            table.appendChild(tablename);

            table.appendChild(deletebtn);
            table.appendChild(tablerow);

            let url3='http://localhost/Ecommerce/deletecategory.php';
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
getcategory();

