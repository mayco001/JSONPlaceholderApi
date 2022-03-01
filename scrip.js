
function posts() {
    
    const API_URL = 'https://jsonplaceholder.typicode.com';

    const xhr = new XMLHttpRequest();

    function onRequest(){
        if(this.readyState == 4 && this.status == 200){
        // 0 = UNSET
        // 1 = OPEMED
        // 2 = HEADERS_RECEIVED
        // 3 = LOADING
        // 4 = DONE 
            const data = JSON.parse(this.response);
            const HTMLResponse = document.querySelector("#app");

            const tpl = data.map(user => 
                `<p><strong>UserId:</strong> ${user.userId}</p> 
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Title:</strong> ${user.title}</p>
                <p><strong>Body:</strong> ${user.body}</p>`
                )
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
    
    xhr.addEventListener("load", onRequest);
    xhr.open('GET', `${API_URL}/posts`);
    xhr.send();

}

function comments() {

    const API_URL = 'https://jsonplaceholder.typicode.com';

    const xhr = new XMLHttpRequest();

    function onRequest(){
        if(this.readyState == 4 && this.status == 200){
        
            const data = JSON.parse(this.response);
            const HTMLResponse = document.querySelector("#app");

            const tpl = data.map(user => 
                `<p><strong>PostId:</strong> ${user.postId}</p> 
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>E-mail:</strong> ${user.email}</p>
                <p><strong>Body:</strong> ${user.body}</p>`
                )
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
    
    xhr.addEventListener("load", onRequest);
    xhr.open('GET', `${API_URL}/comments`);
    xhr.send();

}

function users() {

    const API_URL = 'https://jsonplaceholder.typicode.com';

    const xhr = new XMLHttpRequest();

    function onRequest(){
        if(this.readyState == 4 && this.status == 200){
    
            const data = JSON.parse(this.response);
            const HTMLResponse = document.querySelector("#app");

            const tpl = data.map(user => 
                `<p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <p><strong>UserName:</strong> ${user.username}</p>
                <p><strong>E-mail:</strong> ${user.email}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
                <p><strong>WebSite:</strong> ${user.website}</p>
                <p><strong>Address</strong></p>
                <p><strong>Street:</strong> ${user.address.street}</p>
                <p><strong>Suite:</strong> ${user.address.suite}</p>
                <p><strong>City:</strong> ${user.address.city}</p>
                <p><strong>ZipCode:</strong> ${user.address.zipcode}</p>
                <p><strong>Geo</strong></p>
                <p><strong>Lat:</strong> ${user.address.geo.lat}</p>
                <p><strong>Lng:</strong> ${user.address.geo.lng}</p>
                <p><strong>Company</strong></p>
                <p><strong>Name:</strong> ${user.company.name}</p>
                <p><strong>CatchPhrase:</strong> ${user.company.catchPhrase}</p>
                <p><strong>Bs:</strong> ${user.company.bs}</p>
                `
                )
            HTMLResponse.innerHTML = `<ul>${tpl}</ul>`
    }
}
    
    xhr.addEventListener("load", onRequest);
    xhr.open('GET', `${API_URL}/users`);
    xhr.send()

}

