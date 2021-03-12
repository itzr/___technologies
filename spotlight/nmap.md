
My IPs

Internal IP:
- 172.xx.xx.xx (ifconfig | grep net)
    - OS: “too many fingerprints match this host to give specific OS details” / 0 Hops

External IP: 
- 14.xxx.xx.xx 
    - trace route:
        - 1 (hop) 
        - 2.32 ms
        - static.vnpt.vn (same IP)
    - OS: 
        - Linux 2.6.32 - 3.10 / 1 Hop
    - RPC:
        - 2000/tcp open  bandwidth-test MikroTik bandwidth-test server
        - 8000/tcp open  ipcam          Hikvision IPCam control port

- 203.xxx.xx.xx
    - trace route:
        - 1 (hop)
        - 0.96 ms 
        - static.cmcti.vn (203.xxx.xx.xx)
    - OS: 
        - Linux 2.6.32 - 3.10 / 1 Hop


Protocols

- ICMP
    - Internet Control Message Protocol
- UDP (UDP Packet)
    - User Datagram Protocol
        - “Stateless” -> it doesn’t acknowledge that packets sent have been received. 
- SCTP
    - Stream Control Transmission Protocol (SCTP)
- ARP
    - Address Resolution Protocol

Other
- TCP SYN (SYN Packet)
    - Syncronize
- TCP ACK (ACK Packet)
    - Acknowledgement
- MAC Address (Media Access Control)
- TCP NULL
    - Does not set any bits
        - TCP flag header is 0
- TCP FIN
    - Sets just the TCP FIN bit
- XMAS Scan
    - Sets the FIN, PSH, and URG flags, lighting the packet up like a Christmas tree.
- RPC
    - Remote Procedure Call

Commands

- nmap
- ifconfig (**)
- netstat
- ipconfig
- Whoami
- Nslookup

Detailed Commands
- ‘nmap -O [IP]’
    - Operating System Scan
- ‘nmap -sP [IP]/24’
    - ping only scan
    - useful when you want to perform a quick search of the target network to see which hosts are online without actually scanning the target(s) for open ports. 
- nslookup myip.opendns.com. resolver1.opendns.com
- curl ifconfig.me
- nmap -PR [IP] 
    - It also has the added benefit of being more accurate because LAN hosts can’t block ARP requests (even if they are behind a firewall). 
- nmap [IP/24]
    - Use ‘/24’ to scan all IPs in the local subnet.
    - This is CIDR notation
    - CIDR notation consists of the network address and subnet mask (in binary bits) separated by a slash. 
- nmap -p "*" 10.10.1.41
    - scan all ports
- There are a total of 131,070 TCP/IP ports (65,535 TCP and 65,535 UDP). Nmap, by default, only scans 1,000 of the most commonly used ports. 
    - 

Research


Network Audit
Command: ‘sudo nmap -sU 172.xx.xx.xx’

“While TCP is the most commonly used protocol, many network services (like DNS, DHCP, and SNMP) still utilize UDP. When performing a network audit, it’s always a good idea to check for both TCP and UDP services to get a more complete picture of the target host/network. “

Nmap TraceRoute

Command:  ‘nmap —traceroute [ip]’

Three-way TCP Handshake

SYN -> ACK/SYN -> ACK

Network Scanning

For network scanning outside of a local subnet, several types of ICMP packets can be used instead, including echo, timestamp, and address mask requests.

- Echo (or ping) requests are used to detect if another host can be reached
- Timestamp messages determine the latency between two hosts. 
- Address mask requests are intended to discover the subnet mask in use on the network.

ICMP echo requests that originate outside an internal network are commonly blocked by firewalls, but timestamp and address mask requests are less likely to be blocked

