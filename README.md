# gdnsapp
## This project is for making an ISP call "AIS" to be able to work with DuckDNS Add-on in Home Assistant.

### Instruction
#### 1. Download folder gndsapp to your computer.
#### 2. Build a Docker image by using the command below. 
```
sudo docker build -t mike28270/gdnsapp:1.0 .
```
#### 3. Run the image. 
```
sudo docker run --name gdns -p 5114:8080 mike28270/gdnsapp:1.0
```
#### note. You can change the main port to any port that you desire.
#### e.g. If you want to use port 5322.
```
sudo docker run --name gdns -p 5322:8080 mike28270/gdnsapp:1.0
```
#### 4. Go to Duckdns add-on page at configuration tab.
![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/Duckdns_configuration.png?raw=true)


![alt text](https://github.com/mike28270/gdnsapp/blob/main/pictures/Duckdns_log.png?raw=true)

