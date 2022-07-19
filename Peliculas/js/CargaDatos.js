//const tbody = document.querySelector('#respuesta tbody');
       const endpoint = 'https://api.datos.gob.mx/v1/calidadAire';
       fetch(endpoint)
       .then(response => response.json())
       .then(data => mostrarData(data))
       .catch(error => console.log(error))

       // console.log(response);

     /*  const request = new XMLHttpRequest();

       request.open('GET', endpoint);

       request.responseType = 'json';
       request.send();

       request.onload = function(){
          const calidad = request.response;

       }*/

       const mostrarData = (data) =>{
          // console.log(data);
           console.log(data);

                //const result = jsonObj['results'];
           
                let body = ''
                for (let i = 0; i<result.lenght; i++){
                        body += `<tr><td> ${result[i]._id}</td></tr>`
                }    
                document.getElementById('respuesta_body').innerHTML = body
       }


     //  request.open('GET', endpoint);
      // for(let i = 0; i < endpoint.length; i++) {
    //        let fila = tbody.insertRow();
   //         fila.insertCell().innerHTML = endpoint[i]['id'];  
    //   }

