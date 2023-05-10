const resp = fetch('https://reqres.in/api/users?page=1');
resp.then((response)=>{
  return response.json();
}).then((json)=>{
    // let placeholder = document.getElementById("tr");
    // let odc= "";
    // for(let user of json.data){
    //     odc =  `<tr>
    //     <th scope="row">${user.first_name}</th>
    //     <td>${user.last_name}</td>
    //     <td>${user.email}</td>
    //   </tr>`
    // }
    let htmlX =``;
    let content = document.getElementById('container');
    json.data.forEach(element => {
        console.log(element)
        
        let htmlcard = ` 
        <div class="col-4">
        <div class="card" id="cards" style="width: 18rem;">
        <div class="card-body">
        <div class="input-group mb-3">
        <input type="text" class="form-control" value="${element.first_name}">
        </div>
        <div class="input-group mb-3">
        <input type="text" class="form-control" value="${element.last_name}">
        </div>
        <div class="input-group mb-3">
        <input type="text" class="form-control" value="${element.email}">
        </div>
      
         <a href="#" class="btn btn-primary">Ver detalles</a>
        </div>
      </div> </div>`
      htmlX = htmlX + htmlcard
    });
    content.innerHTML=htmlX
})

const resp = fetch('https://reqres.in/api/users/2');
resp.then((response)=>{
    return response.json();
}).then((json)=>{
    let htmlX =``;
    let content = document.getElementById('container');
    let htmlmodal = `<div class="modal-body">
    <div class="input-group mb-3">
    <input type="text" class="form-control" value="${element.first_name}">
    </div>
    <div class="input-group mb-3">
    <input type="text" class="form-control" value="${element.last_name}">
    </div>
    <div class="input-group mb-3">
    <input type="text" class="form-control" value="${element.email}">
    </div>
    </div> `
  htmlX = htmlX + htmlmodal
})
content.innerHTML=htmlX
//console.log(resp);
