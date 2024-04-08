getuser=()=>{
    let url2='http://localhost/Ecommerce/getuser.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url2,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let table=document.querySelector('#Myuser');
        let response=JSON.parse(xhr.responseText);
        let {users}=response;
        console.log(xhr.responseText);
        users.forEach(cr=>{
            let {id,name,phone,address}=cr;
            let tableid=document.createElement('td');
            let crid=document.createTextNode(id);
            let tablename=document.createElement('td');
            let crname=document.createTextNode(name);  
            let tablephone=document.createElement('td');
            let crphone=document.createTextNode(phone);       
            let tableaddress=document.createElement('td');
            let craddress=document.createTextNode(address);         
            
            
            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('Delete');
            
            

            let tablerow=document.createElement('tr');
            deletebtn.appendChild(deletebtntxt);
           
            tableid.appendChild(crid);
            tablename.appendChild(crname);
            tablephone.appendChild(crphone);
            tableaddress.appendChild(craddress);
            
           
            table.appendChild(tableid);
            table.appendChild(tablename);
            table.appendChild(tablephone);
            table.appendChild(tableaddress);

            table.appendChild(deletebtn);
            table.appendChild(tablerow);

            let url3='http://localhost/Ecommerce/deleteuser.php';
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
                        console.log('user deleted');
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
getuser();

