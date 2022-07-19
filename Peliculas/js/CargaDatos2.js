fetch('https://rickandmortyapi.com/api/character')
  .then(function(response) {
   // console.log(data);
    return response.json();
  })
 // .then(function(response) {
 //   console.log(response);
 // })
  .then(function(myJson) {
    var divOut = document.getElementById('respuesta_body');
    var allResults = myJson.results;
    var txtOut = "";
    for (var k in allResults) {
      txtOut += `<tr><td><b>${allResults[k].id}</b></td>`;
      txtOut += `<td>${allResults[k].name}</b></td>`;
      txtOut += `<td>${allResults[k].status}</b></td>`;
      txtOut += `<td>${allResults[k].species}</b></td>`;
      txtOut += `<td>${allResults[k].type}</b></td>`;
      txtOut += `<td>${allResults[k].gender}</b></td>`;
      txtOut += `<td>${JSON.stringify(allResults[k].origin)}</td>`;
      txtOut += `<td>${JSON.stringify(allResults[k].location)}</td>`;
      txtOut += `<td><img src="${allResults[k].image}"></td>`;     
      txtOut += `<td>${allResults[k].episode}</td>`;
      txtOut += `<td>${allResults[k].url}</td>`;
      txtOut += `<td>${allResults[k].created}</td></tr>`;
     // txtOut += `<b>${allResults[k].source_id}</b><br />`;
      var allResults2 = allResults.episode;
      for (var i in allResults2) {
              const listItem = document.createElement('li');
              listItem.textContent = allResults2[i];
              myList.appendChild(listItem);
      }
    

    }
    respuesta_body.innerHTML = txtOut;
  });