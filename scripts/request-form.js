function requestCert() {
    console.log("yes");
    document.getElementById("notValid").style.display='none';
    document.getElementById("valid").style.display='none';
    axios.post('https://idcheck-dot-choreo-asgardeo-intern-project.de.r.appspot.com/',{
        id_number:document.getElementById("nicInput").value,
        address:document.getElementById("addressInput").value


    }).then(response=>{
        console.log(response);  
        idNumber =document.getElementById("nicInput").value;
        axios.post('https://policereport-dot-choreo-asgardeo-intern-project.de.r.appspot.com/',{
            id_number:idNumber,
            grama_id:response.data.grama_id

        }).then(response=>{
            document.getElementById("valid").style.display='block';
            console.log("works");            
        }).catch(error=>{
            console.log(error);
        })




    }).catch(error=>{
        console.log(error);
        document.getElementById("notValid").style.display='block';
    }
        )
    
}