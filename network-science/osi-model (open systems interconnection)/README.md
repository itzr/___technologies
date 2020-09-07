##### Learning Intention
- What is the OSI and why is it useful?
- How does it translate to real implementation?
- Does data always flow through all 7 layers?
- In detail, what is the difference between L3 (network) and L4 (transport)?
    - Depends if the protocol deals with one-endpoint (L4) or multiple (L3).
    - By 'deals with', I mean 'encapsulating the payload'
- When Envoy says it is a "L7 proxy and communication bus", what does that mean?
- When Envoy says it offers **L3/L4 filter architecture**, what does that mean?
- When Envoy says it offers **HTTP L7 filter architecture**, what does that mean?
- When Envoy says it offers **HTTP L7 routing**, what does that mean?
- When Envoy says it offers **MongoDB L7 & DynamoDB L7 support**, what does that mean?

##### Sources
https://en.wikipedia.org/wiki/OSI_model
https://avinetworks.com/glossary/l4-l7-network-services/
https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy
Google Search: "OSI Layer Attacks"

### What is OSI
- Conceptual model
- Standardises communication functions
- No regard for underlying internal structure
- Its goal is interoperability of diverse communication systems

#### OSI Layering
- Model partitioned into abstraction layers
- A layer serves the layer above it
- A layer is served by the layer below it.

#### OSI Layering (summary)
- Application Layer (L7):
    - Human-computer interaction layer 
    where applications can access the network serivces
    - Message format
- Presentation Layer (L6):
    - Ensures that data is in a useable format and is where
    data encryption occurs
    - Encryption, compression
- Session Layer (L5):
    - Maintains connections and is responsible for 
    controlling ports and sessions
    - Authentication, permissions, session management
- Transport Layer (L4):
    - Transmits data using transmission protocols
    including TCP and UDP
    - end-to-end guaranteed delivery
- Network Layer (L3):
    - Decides which physical path the data will data
    - Delivering data over inter-networking
        - Routing & switching
- Datalink Layer (L2):
    - Defines the format of data on the network
    - Media access, flow control
- Phyiscal Layer (L1):
    - Transmits raw bit stream over the phyical medium
    - bit stream on physical media

## Attacks

- L7: Application (HTTP, SMTP, FTP) 
    - Malware attack
    - FTP bounce
    - SMTP attack
    - Data attack
    - Insecure HTTP
    - Browser Hijacking
    - Buffer Overflows
    - Application and Business Logic Flaws
- L6: Presentation (Data Representation and Encryption)
    - Malformed SSL Request
    - SSL Stripping
    - Unicode Vulnerabilities
- L5: Session (Web Sockets):
    - Session Hijacking
    - DoS
- L4: Transport (TCP, UDP, SSL)
    - Desynchronisation Attack
    - Flooding
    - TCP Sequence Prediction Attack
    - Energy Drain Attack
- L3: Network (IP, ICMP)
    - Sel. Forwarding
    - Sybil Attack (Ping Floods)
    - Spoofing
    - Hijacking
- L2: Data-Link (ALOHA, CDMA, CSMA, OFDMA, MAC, Ethernet(?))
    - MAC Spoofing
    - Identity Theft
    - Collision
    - Exhaustion
    - Switch Looping
    - Traffic Analysis
- L1: Physical (Wifi, Ethernet, Bluetooth)
    - Eavesdropping
    - Radio Inteference
    - Jamming
    - Tampering
    

#### OSI Layering (example)

Layer N+1 (application): Sends path to Layer N.
Layer N: Provides error-free communication across a network
Layer N-1: Gets called by Layer N to send and receive packets

### Critique 

- Some argue OSI reference model is relevant to cloud computing
- Others argue OSI model does not fit into today's networking protocol.
    - They suggest a more simplified approach.

### Layer Architecture

| Layer | Layer | Layer        | Protocol Data Unit (PDU) | Function                                                                                                                                               |
|-------|-------|--------------|--------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| Host  | 7     | Application  | Data                     | High-level APIs, including resource sharing, remote file access                                                                                        |
| Host  | 6     | Presentation | Data                     | Translation of data between a networking service and an application. Includes character encoding, data compression and encryption/decryption           |
| Host  | 5     | Session      | Data                     | Managing communication sessions. This is the continuous exchange of information in the form of multiple back-and-forth transmissions between two nodes |
| Host  | 4     | Transport    | Segment, Datagram        | Reliable transmission of data segments between points on a network. Includes segmentation, acknowledgement and multiplexing.                           |
| Media | 3     | Network      | Packet                   | Structuing and managing a multi-node network. Includes addressing, routing and traffic control                                                         |
| Media | 2     | Data link    | Frame                    | Reliable transmission of data frames between two nodes connected by a physical layer                                                                     |
| Media | 1     | Physical     | Bit, Symbol              | Transmission and reception of raw bit steams over a physical medium                                                                                    |

### Layer 1: Physical

Basic Idea: 

**The transmission and reception of unstructured raw data
between a device and a physical transmission medium.**

**Examples:**
**???**

- Converts digital bits into electric, radio or optical signals
- Specifies characteristics such as: timing of voltage changes, 
physical data rates, maximum transmission distances, modulation scheme, 
channel access method and physical connectors.

**Examples: Physical layer specs are included in specs for 
Bluetooth, Ethernet, and USB standards.**

### Layer 2: Data Link

Basic Idea: 

**Node-to-node data transfer**

**Examples:**
**???**

- Links two directly connected nodes
- Detects and possibly corrects errors in the Physical layer
- Defines a protocol to:
    - establish and terminate a connection between two phyiscally connected devices
- Two sublayers:
    - Medium access control (MAC): 
        - controls how devices in a network **gain access to a medium**
        - controls how devices **gain permission to transmit data**    
    - Logical link control (LLC):
        - **identifies and encapsulates network layer protocols**
        - controls error checking
        - controls frame synchronization

### Layer 3: Network

Basic idea: 

**Provides functional and procedural means of transferring
variable length data sequences (packets) from one node to another
connect in "different networks"**

**Examples:**
**???**

What is a network:

- A medium to which many nodes can be connected
- Every node has an address
- Nodes connected to the network can transfer 
messages to other nodes in the network
- To transmit a message, a node must provide:
        - the content of the message
        - the address of the destination
    -**The network finds a way to deliver the message**
- If a message is too large for the data link layer:
    - Network may split the message into fragments at one node
    - Then, it will send the fragments independently and reassemble
- Message deliver at the network layer in not guaranteed to be reliable
- A network layer protocol may provide reliable message delivery, but it's not required

Network layer provides various **layer-management protocols**:
    - Routing protocols
    - Multicast group management
    - Network-layer information and error
    - Network-layer address assignemnt
    -**NOTE: It's the function of payload
    that makes these belong to the network
    layer, not the protocol that carries them**
    
       
### Layer 4: Transport

Basic idea: 

**Provides functional and procedural means of transferring
variable length data sequences (packets) from a source to a destination
host, while maintaining the quality of service functions**

**Examples:**
- **Transmission Control Protocol (TCP)**
- **User Datagram Protocol (UDP)**

**NOTE:**

**-Network layer (L3): Node-to-node**

**-Transport layer (L4): Source-to-host**

- Control reliability of a given link through:
    - flow control
    - segmentation/desegmentation
        *Packet segmentation: the process of dividing a data packet into
        smaller units for transmission over the network*
    - error control  
- If a protocol is state- and connection-orientated:
    - Can track segments and retransmit those that fail delivery.
- Provides acknowledgement of the successful data transmission
- On success, sends the next data.

- Creates segments based on message received from the application layer

- There are 5 classes of connection-mode transport protocols.
- Class TP4 is the closest to TCP.
- Features of TP4:
    - Connection-orientated network
    - Connectionless network
    - Concatenation and separation
    - Segmentation and reassembly
    - Error recovery
    - Multiplexing over single virtual circuit
    - Explicit flow control
    - Retransmission on timeout
    - Reliable transport service
- Missing features from TP4:
    - Reinitiate connection
    
- Tunnelling protocols operate at the transport layer

- Transport Layer Security (TLS) provide security at this layer
    
### Layer 5: Session

Basic Ideas:

**Controls the dialogues (connections) between computers**

**Examples:**
**???**

- Establishes, manages, and terminates connections between local and remote apps.
- Establishes procedures for suspending, restarting, and terminating sessions.

-**The session layer is commonly implemented explicitly in app environments that use
remote procedure calls**

### Layer 6: Presentation

Basic Ideas:

**Established context between application-layer entities**

- Provides **mappings** so different layers can communicate:
    - If mapppings, presentation protocol data units are:
        - Encapsulated into session protocol data units
        - Passed down the protocol stack.
        
- Provides **independence from data representation**:
    - Translates between application and network formats.

- Formats data sent across the network
- Can include compression functions 

**Examples:**
**???**

### Layer 7: Application 

Both this layer and users interact with the software application.

- Typical app-layer functions:
    - identify comms partners
    - determine resource availability
    - synchronize comms

- Important distinction between:
    - Application (contains all entities)
    - Application-Entity (HTTP entity, and remeote database entity)
    
- The app layer has no means to determine the availability of resources in the network.
    
    
