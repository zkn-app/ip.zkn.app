const ipwhoisInfo = document.getElementById("ipwhois");
let ip = '';

let ipwhois_XMLHttp = new XMLHttpRequest();
ipwhois_XMLHttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
        let ip_api = JSON.parse(this.responseText);
        ipwhoisInfo.querySelector("#ip").innerText = ip_api.ip;
        ipwhoisInfo.querySelector("#country").innerText = ip_api.country;
        ipwhoisInfo.querySelector("#city").innerText = ip_api.city;
        ipwhoisInfo.querySelector("#isp").innerText = ip_api.connection.isp;
        ipwhoisInfo.querySelector("#asn").innerText = ip_api.connection.asn
    }
};
ipwhois_XMLHttp.open('GET', 'https://ipwho.is/', true);
ipwhois_XMLHttp.send();


const ipgeolocation = document.getElementById("ipgeolocation");
let ipgeolocation_XML = new XMLHttpRequest();
ipgeolocation_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipgeolocation.querySelector("#ip").innerText = ip_api.ip;
        ipgeolocation.querySelector("#country").innerText = ip_api.country_name;
        ipgeolocation.querySelector("#city").innerText = ip_api.city;
        ipgeolocation.querySelector("#isp").innerText = ip_api.isp;
        ipgeolocation.querySelector("#asn").innerText = null;
    }
}
ipgeolocation_XML.open('GET', 'https://api.ipgeolocation.io/ipgeo?apiKey=08638ed1c63a477bb1f84b38bafeb1e8&ip=' + ip, true);
ipgeolocation_XML.send();

const ipdataco = document.getElementById("ipdataco");
let ipdataco_XML = new XMLHttpRequest();
ipdataco_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipdataco.querySelector("#ip").innerText = ip_api.ip;
        ipdataco.querySelector("#country").innerText = ip_api.country_name;
        ipdataco.querySelector("#city").innerText = ip_api.city;
        ipdataco.querySelector("#isp").innerText = ip_api['asn'].name;
        ipdataco.querySelector("#asn").innerText = ip_api['asn'].asn;
    }
}
ipdataco_XML.open('GET', 'https://api.ipdata.co/?api-key=98ef8fdb3c05da4960af979d6e7656a546d0bd66d8c11b0add46ff8f');
ipdataco_XML.send();

const ipinfo = document.getElementById("ipinfo");
let ipinfo_XML = new XMLHttpRequest();
ipinfo_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipinfo.querySelector("#ip").innerText = ip_api.ip;
        ipinfo.querySelector("#country").innerText = ip_api.country;
        ipinfo.querySelector("#city").innerText = ip_api.city;
        ipinfo.querySelector("#isp").innerText = ip_api.org;
    }
}
ipinfo_XML.open('GET', 'https://ipinfo.io/json');
ipinfo_XML.send();

const ipapi = document.getElementById("ipapi");
let ipapi_XML = new XMLHttpRequest();
ipapi_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipapi.querySelector("#ip").innerText = ip_api.ip;
        ipapi.querySelector("#country").innerText = ip_api.country_name;
        ipapi.querySelector("#city").innerText = ip_api.city;
        ipapi.querySelector("#isp").innerText = ip_api.org;
        ipapi.querySelector("#asn").innerText = ip_api['asn'];
    }
}
ipapi_XML.open('GET', 'https://ipapi.co/json/');
ipapi_XML.send();

const freeipapi = document.getElementById("freeipapi");
let freeipapi_XML = new XMLHttpRequest();
freeipapi_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        freeipapi.querySelector("#ip").innerText = ip_api.ipAddress;
        freeipapi.querySelector("#country").innerText = ip_api.countryName;
        freeipapi.querySelector("#city").innerText = ip_api.cityName;
        freeipapi.querySelector("#isp").innerText = null;
        freeipapi.querySelector("#asn").innerText = null;
    }
}
freeipapi_XML.open('GET', 'https://freeipapi.com/api/json/');
freeipapi_XML.send();


//ip-api.com dns
const dnsendpoint_ip_api = document.getElementById("end_ip-api");
let dnsendpoint_ip_api_XML = new XMLHttpRequest();
dnsendpoint_ip_api_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        dnsendpoint_ip_api.querySelector("#ip").innerText = ip_api.dns.ip;
        dnsendpoint_ip_api.querySelector("#isp").innerText = ip_api.dns.geo;
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
        sharkdns.querySelector("#ip").innerText = ip_data.IP;
        sharkdns.querySelector("#isp").innerText = ip_data.City + " " + ip_data.Country + " " + ip_data.ISP;
    }
}
sharkdns_XML.open('GET', 'https://' + randomAlphaString(16) + '.ipv4.surfsharkdns.com/');
sharkdns_XML.send();

//browserleaks.org/
const browserleaks = document.getElementById("browserleaks");
let browserleaks_XML = new XMLHttpRequest();
browserleaks_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        let ip_data = ip_api[Object.keys(ip_api)[0]]
        browserleaks.querySelector("#ip").innerText = Object.keys(ip_api);
        browserleaks.querySelector("#isp").innerText = ip_data[1] + " " + ip_data[2];
    }
}
browserleaks_XML.open('GET', 'https://' + randomAlphaString(16) + '.dns4.browserleaks.org/');
browserleaks_XML.send();


//Generate random alpha numeric string
function randomAlphaString(max){
    const random_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let out_str = "";
    for(i = 0; i < max; i++){
        out_str += random_str.charAt(Math.floor(Math.random()*random_str.length))
    }
    return out_str;
}

console.log(randomAlphaString(32))




