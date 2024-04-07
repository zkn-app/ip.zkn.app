//ipwhois
const ipwhoisInfo = document.getElementById("ipwhois");
fetch("https://ipwho.is/")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok'); 
        }
        return response.json();
    })
    .then(data => {
        ipwhoisInfo.querySelector(".ip").innerText = data.ip;
        ipwhoisInfo.querySelector(".country").innerText = data.country;
        ipwhoisInfo.querySelector(".city").innerText = data.city;
        ipwhoisInfo.querySelector(".isp").innerText = data.connection.isp;
        ipwhoisInfo.querySelector(".asn").innerText = data.connection.asn
    })
    .catch(error => {
        
        console.error('problemi con fetch operation:', error);

    });


//ipgeolocation
const ipgeolocation = document.getElementById("ipgeolocation");
fetch("https://api.ipgeolocation.io/ipgeo?apiKey=08638ed1c63a477bb1f84b38bafeb1e8&ip=")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok'); 
        }
        return response.json();
    })
    .then(data => {
        ipgeolocation.querySelector(".ip").innerText = data.ip;
        ipgeolocation.querySelector(".country").innerText = data.country_name;
        ipgeolocation.querySelector(".city").innerText = data.city;
        ipgeolocation.querySelector(".isp").innerText = data.isp;
        ipgeolocation.querySelector(".asn").innerText = "";
    })
    .catch(error => {
        
        console.error('problemi con fetch operation:', error);

    });

//ipdataco
const ipdataco = document.getElementById("ipdataco");
fetch("https://api.ipdata.co/?api-key=98ef8fdb3c05da4960af979d6e7656a546d0bd66d8c11b0add46ff8f")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok'); 
        }
        return response.json();
    })
    .then(data => {
        ipdataco.querySelector(".ip").innerText = data.ip;
        ipdataco.querySelector(".country").innerText = data.country_name;
        ipdataco.querySelector(".city").innerText = data.city;
        ipdataco.querySelector(".isp").innerText = data['asn'].name;
        ipdataco.querySelector(".asn").innerText = data['asn'].asn;
    })
    .catch(error => {
        
        console.error('problemi con fetch operation:', error);

    });

//ipinfo
const ipinfo = document.getElementById("ipinfo");
fetch("https://ipinfo.io/json")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok'); 
        }
        return response.json();
    })
    .then(data => {
        ipinfo.querySelector(".ip").innerText = data.ip;
        ipinfo.querySelector(".country").innerText = data.country;
        ipinfo.querySelector(".city").innerText = data.city;
        ipinfo.querySelector(".isp").innerText = data.org;
    })
    .catch(error => {
        
        console.error('problemi con fetch operation:', error);

    });


//Ip api
const ipapi = document.getElementById("ipapi");

fetch("https://ipapi.co/json/")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok'); 
        }
        return response.json();
    })
    .then(data => {
        ipapi.querySelector(".ip").innerText = data.ip;
        ipapi.querySelector(".country").innerText = data.country_name;
        ipapi.querySelector(".city").innerText = data.city;
        ipapi.querySelector(".isp").innerText = data.org;
        ipapi.querySelector(".asn").innerText = data['asn'];
    })
    .catch(error => {
        
        console.error('problemi con fetch operation:', error);

      });


//Free ip api
const freeipapi = document.getElementById("freeipapi");

// Esegui la richiesta Fetch all'API
fetch("https://freeipapi.com/api/json/")
  .then(response => {
    // Verifica se la risposta è ok (status 200-299)
    if (!response.ok) {
      throw new Error('Risposta non ok');
    }
    return response.json(); // Trasforma la risposta in JSON
  })
  .then(data => {
    
    freeipapi.querySelector(".ip").innerText = data.ipAddress || "Non disponibile";
    freeipapi.querySelector(".country").innerText = data.countryName || "Non disponibile";
    freeipapi.querySelector(".city").innerText = data.cityName || "Non disponibile";
    freeipapi.querySelector(".isp").innerText = data.isp || "";
    freeipapi.querySelector(".asn").innerText = data.asn || "";
  })
  .catch(error => {
    // eventuali errori nella richiesta o nella trasformazione in JSON
    console.error('problemi con fetch operation:', error);
  });




//ip-api.com dns
const dnsendpoint_ip_api = document.getElementById("end_ip-api");
let dnsendpoint_ip_api_XML = new XMLHttpRequest();
dnsendpoint_ip_api_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        dnsendpoint_ip_api.querySelector(".ip").innerText = ip_api.dns.ip;
        dnsendpoint_ip_api.querySelector(".isp").innerText = ip_api.dns.geo;
    }
}
dnsendpoint_ip_api_XML.open('GET', 'https://' + randomAlphaString(32) + '.edns.ip-api.com/json');
dnsendpoint_ip_api_XML.send();

//Shark dns
const sharkdns = document.getElementById("sharkdns");
let sharkdns_XML = new XMLHttpRequest();
sharkdns_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        let ip_data = ip_api[Object.keys(ip_api)[0]]
        sharkdns.querySelector(".ip").innerText = ip_data.IP;
        sharkdns.querySelector(".isp").innerText = ip_data.City + " " + ip_data.Country + " " + ip_data.ISP;
    }
}
sharkdns_XML.open('GET', 'https://' + randomAlphaString(16) + '.ipv4.surfsharkdns.com/');
sharkdns_XML.send();


//Generate random alpha numeric string
function randomAlphaString(max){
    const random_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let out_str = "";
    for(i = 0; i < max; i++){
        out_str += random_str.charAt(Math.floor(Math.random()*random_str.length))
    }
    return out_str;
}
const ip_container =  document.getElementById("ip-container");
const hide_ip =  document.getElementById("hide-ip");
hide_ip.addEventListener('change', () => {
    ip_container.querySelectorAll('.ip').forEach(function(elem){
        console.log(elem.innerText);
        if(elem.innerText === "Ip Hidden"){
            elem.innerText = "Non Hidden";
        }else{
            elem.innerText = "Ip Hidden";
        }
    })
    
    

})

