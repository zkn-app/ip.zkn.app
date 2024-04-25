let ip_addrInfo = {};


//nahida api

const iptitle = document.getElementById("iptitle");
fetch("https://api.nahida.one/ip/")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data)
        ip_addrInfo.nah_info = data.ip;
        iptitle.querySelector(".ip").innerText = data.ip;
    })
    .catch(error => {
       console.error('problemi con fetch operation:', error);

    });

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
        ip_addrInfo.ipwhois = data.ip;
        ipwhoisInfo.querySelector(".ip").innerText = data.ip;
        ipwhoisInfo.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.country_code.toLowerCase()}"></i> ${data.country || ''} ${data.city || ''} ${data.connection.isp || ''} ${data.connection.asn || ''}</span>`;
    })
    .catch(error => {

        console.error('problemi con fetch operation:', error);

    });


//ident me
const identme = document.getElementById("identme");
fetch("https://ident.me/json")
    .then(response => {
        if(!response.ok){
            throw new Error('Risposta non ok');
        }
        return response.json();
    })
    .then(data => {
        ip_addrInfo.identme = data.ip;
        identme.querySelector(".ip").innerText = data.ip;
        identme.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.cc.toLowerCase()}"></i> ${data.country || ''} ${data.city || ''} ${data.aso || ''} ${data.asn || ''}</span>`;
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
        ip_addrInfo.ipgeolocation = data.ip;
        ipgeolocation.querySelector(".ip").innerText = data.ip;
        ipgeolocation.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.country_code2.toLowerCase()}"></i> ${data.country_name || ''} ${data.city || ''} ${data.isp || ''} ${data.asn || ''}</span>`;
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
        ip_addrInfo.ipdataco = data.ip;
        ipdataco.querySelector(".ip").innerText = data.ip;
        ipdataco.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.country_code.toLowerCase()}"></i> ${data.country_name || ''} ${data.city || ''} ${data['asn'].name || ''} ${data['asn'].asn || ''}</span>`;
        //codice temporaneo
        document.getElementById('is_threat').innerText = data.threat.is_threat;
        document.getElementById('is_tor').innerText = data.threat.is_tor;
        document.getElementById('is_proxy').innerText = data.threat.is_proxy;
        document.getElementById('is_datacenter').innerText = data.threat.is_datacenter;
        document.getElementById('is_anonymous').innerText = data.threat.is_anonymous;
        document.getElementById('is_known_abuser').innerText = data.threat.is_known_abuser;
        document.getElementById('is_known_attacker').innerText = data.threat.is_known_attacker;
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
        ip_addrInfo.ipinfo = data.ip;
        ipinfo.querySelector(".ip").innerText = data.ip;
        ipinfo.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.country.toLowerCase()}"></i> ${data.country || ''} ${data.city || ''} ${data.org || ''} ${data.asn || ''}</span>`;
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
        ip_addrInfo.ipapi = data.ip;
        ipapi.querySelector(".ip").innerText = data.ip;
        ipapi.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.country_code.toLowerCase()}"></i> ${data.country_name || ''} ${data.city || ''} ${data.org || ''} ${data['asn'] || ''}</span>`;
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
        ip_addrInfo.freeipapi = data.ipAddress;
        freeipapi.querySelector(".ip").innerText = data.ipAddress || "Non disponibile";
        freeipapi.querySelector(".ip-addr").innerHTML = `<span><i class="fi fi-${data.countryCode.toLowerCase()}"></i> ${data.countryName || ''} ${data.cityName || ''} ${data.isp || ''} ${data.asn || ''}</span>`;
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
const ip_container = document.getElementById("ip-container");
const hide_ip =  document.getElementById("hide-ip");
hide_ip.addEventListener('click', () => {
    const hide_ip_text = hide_ip.querySelector('.text');
    const hide_ip_svg = hide_ip.querySelector('.svg-icon');
    if(hide_ip_svg.src.indexOf('src/show.svg') !== -1){
        hide_ip_svg.src = "src/hidden.svg";
    }else{
        hide_ip_svg.src = "src/show.svg";
    }
    if(hide_ip_text.textContent == "Toggle IP Addresses"){
        hide_ip_text.innerText = "Hide IP Addresses";
    }else{
        hide_ip_text.innerText = "Toggle IP Addresses";
    }
    ip_container.querySelectorAll('.ip').forEach(function(elem){
        //console.log(elem.parentElement.id)
        if(elem.innerText === "Ip Hidden"){
            //console.log(ip_addrInfo[elem.parentElement.id])
            if(ip_addrInfo[elem.parentElement.id] == undefined){
                elem.innerText = "Error";
            }else{
                elem.innerText = ip_addrInfo[elem.parentElement.id];
            }
        }else{
            elem.innerText = "Ip Hidden";
        }
    })
    /*
    if(iptitle.querySelector('.ip').textContent == ip_addrInfo.nah_info){
        iptitle.querySelector('.ip').innerText = "0.0.0.0";
    }else{
        iptitle.querySelector('.ip').innerText = ip_addrInfo.nah_info;
    }
    */
})

console.log(ip_addrInfo)