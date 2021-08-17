# gdnsapp
## This project is for making an ISP call "AIS" to be able to work with DuckDNS Add-on in Home Assistant.

### Instruction
### 1) Install GDNSapp.
There is two ways to install **GDNS app**.
#### 1.1) Via Home Assistant Add-On
- Go to Supervisor > Add-on Store > Repositories.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_repositories.png?raw=true")
- Paste the URL "https://github.com/mike28270/gdnsapp" as in the picture and then click add.  
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_repositories_add.png?raw=true")
- Wait until it is done.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_repositories_done.png?raw=true")
- Find "gdns" on the store.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_addon_gdns.png?raw=true")
- Click "install" and wait.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_addon_gdns_install.png?raw=true")
- Click "start".
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_addon_gdns_start.png?raw=true")
- Check the result by going to LOG tap. If it is okay, the log will show as below.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/addon_addon_gdns_log.png?raw=true")

#### 1.2) Via Docker.
- Download folder gndsapp to your computer or server.
- Go to gdnsapp directory and Build a Docker image by using the command below. 
```
sudo docker build -t mike28270/gdnsapp:1.0 .
```
- Run the image. 
```
sudo docker run --name gdns -p 5114:8000 mike28270/gdnsapp:1.0
```
note. You can change the main port to any port that you desire.
e.g. If you want to use port **"5322"**.
```
sudo docker run --name gdns -p 5322:8000 mike28270/gdnsapp:1.0
```
### 2) Check the applicaition.
- Open a browser (e.g. Chrome, Safari or others.)
- Type a http://[ipaddress]:[port]/[DNS_name]
e.g. If your server ip is **"192.168.1.10"**, port is **"5114"** and your domain name from AIS Thddns is **"smarthome.thddns.net"**, the URL will be as follow.
```
ipv4: http://192.168.1.10:5114/smarthome.thddns.net
```
- The webpage should return an IP address. Moreover, you can check the log from Add-on Log tab or Docker LOGS, depending on your installation.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/result.png?raw=true")

### 3) DuckDNS configuration.
- Go to Duckdns add-on page at configuration tab. Then, add a **"ipv4:"** configuration as the picture below and click save.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/docker_configuration.png?raw=true")
e.g. If your server ip is **"192.168.1.10"**, port is **"5114"** and your domain name from AIS Thddns is **"smarthome.thddns.net"**, the configuration will be as follow.
```
ipv4: http://192.168.1.10:5114/smarthome.thddns.net
```
- Check DuckDNS Log. The IP Address should be updated by now.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/docker_log.png?raw=true)
