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


const ipapiInfo = document.getElementById("ip-api");
let ip_api_XML = new XMLHttpRequest();
ip_api_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipapiInfo.querySelector("#ip").innerText = ip_api.query;
        ipapiInfo.querySelector("#country").innerText = ip_api.country;
        ipapiInfo.querySelector("#city").innerText = ip_api.city;
        ipapiInfo.querySelector("#isp").innerText = ip_api.isp;
        ipapiInfo.querySelector("#asn").innerText = ip_api.as
    }
}
ip_api_XML.open('GET', 'http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,zip,lat,lon,isp,org,as,query', true);
ip_api_XML.send();

const ipgeolocation = document.getElementById("ipgeolocation");
let ipgeolocation_XML = new XMLHttpRequest();
ipgeolocation_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        ipgeolocation.querySelector("#ip").innerText = ip_api.ip;
        ipgeolocation.querySelector("#country").innerText = ip_api.country_name;
        ipgeolocation.querySelector("#city").innerText = ip_api.city;
        ipgeolocation.querySelector("#isp").innerText = ip_api.isp;
        ipgeolocation.querySelector("#asn").innerText = "null";
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
        freeipapi.querySelector("#isp").innerText = "null";
        freeipapi.querySelector("#asn").innerText = "null";
    }
}
freeipapi_XML.open('GET', 'https://freeipapi.com/api/json/');
freeipapi_XML.send();

const dnsendpoint_ip_api = document.getElementById("end_ip-api");
let dnsendpoint_ip_api_XML = new XMLHttpRequest();
dnsendpoint_ip_api_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        dnsendpoint_ip_api.querySelector("#ip").innerText = ip_api.dns.ip;
        dnsendpoint_ip_api.querySelector("#isp").innerText = ip_api.dns.geo;
    }
}
dnsendpoint_ip_api_XML.open('GET', 'https://edns.ip-api.com/json');
dnsendpoint_ip_api_XML.send();








