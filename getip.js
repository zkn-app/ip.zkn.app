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
    }
}
ipgeolocation_XML.open('GET', 'https://api.ipgeolocation.io/ipgeo?apiKey=08638ed1c63a477bb1f84b38bafeb1e8&ip=' + ip, true);
ipgeolocation_XML.send();


const dnsendpoint_ip_api = document.getElementById("end_ip-api");
let dnsendpoint_ip_api_XML = new XMLHttpRequest();
dnsendpoint_ip_api_XML.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
        let ip_api = JSON.parse(this.responseText);
        dnsendpoint_ip_api.querySelector("#ip").innerText = ip_api.dns.ip;
        dnsendpoint_ip_api.querySelector("#isp").innerText = ip_api.dns.geo;
    }
}
dnsendpoint_ip_api_XML.open('GET', 'http://edns.ip-api.com/json');
dnsendpoint_ip_api_XML.send();








