# SiteWab - Real-Time Communication Platform

**SiteWab** is a secure messaging and collaboration web application built with a decoupled architecture (React/TypeScript Frontend and Node.js/Express Backend).

---

## Global Architecture

``` 
+-------------------------------------------------------------------+
|                     Client (Browser / Mobile)                     |
+-------------------------------------------------------------------+
                                  |                                  
                        Tailscale Funnel (HTTPS)                     
                                  |                                  
                                  v                                  
+-------------------------------------------------------------------+
|                            Linux Server                           |
|                                                                   |
|  +---------------------------+     +---------------------------+  |
|  |     Frontend (React)      |     |     Backend (Express)     |  |
|  |     Docker (Port 3000)    |     |     Docker (Port 5000)    |  |
|  +---------------------------+     +---------------------------+  |
|                                                  |                |
|                                                  v                |
|                                        +-------------------+      |
|                                        |  Database (Mongo) |      |
|                                        +-------------------+      |
+-------------------------------------------------------------------+
```

---

# Frontend

The frontend is built with **React and TypeScript**, bundled using **Create React App**. It offers a responsive and modern interface for managing channels and messages.

## User

User authentication and profile management rely on secure token storage.

### Account Creation
- Dynamic registration form with real-time field validation.
- Server-side password hashing.
- Uniqueness validation for email address and username.

![me](/projects/sitewab/me.jpg)

### Login
- Credential-based authentication (email/password).
- Reception and storage of JWT tokens (HttpOnly cookie).
- Automatic redirection to the main dashboard after successful authentication.

![login](/projects/sitewab/login.jpg)

---

## Channel

Channels allow structuring conversations by topic or team.

![Channel](/projects/sitewab/channel_info.jpg)

### Adding Users
- Dynamic user search by name or ID.
- Selection modal to add one or multiple members to an existing channel.
- Real-time notification of membership addition to targeted users.

### Removing Users
- Role management (Channel Administrator / Member).
- Member management interface allowing user removal.
- Instant update of the active participant list.

---

## Message

Main real-time messaging module powered by WebSockets / Socket.IO.

### Core Features
- **Send:** Text input supporting emojis and instant delivery.
- **Edit:** Inline editing of sent messages by the author with an *(edited)* indicator.
- **Delete:** Message deletion with immediate view updates for other participants.

### Content Enrichment
- **GIFs:** Integrated GIF picker (Giphy API) to enliven conversations.
- **Images:** Pre-upload preview and interactive gallery display within the chat thread.

![msg](/projects/sitewab/msg.jpg)
*Here is a screenshot of a message and a GIF that were sent.*

![unittest](/projects/sitewab/unittest.jpg)
*Here are some unit tests written to display text in bold, italics, links, etc.*

---

## Future Features

- **Voice / Video Calling:** LiveKit integration for real-time voice communications.
- **Document Uploads:** Attachment management with upload progress tracking.
- **Multi-Format Preview:** Built-in player for audio files (`.mp3`), video (`.mp4`), and a document viewer (`.pdf`).

---

# Backend

The backend is developed in **TypeScript using Node.js and Express**. It exposes a robust REST API and handles real-time connections.

## Security

### JWT Authentication (JSON Web Token)
- Generation of signed tokens upon login.
- Authentication middleware intercepting all protected routes (`/api/*`).
- Refresh token handling and secure expiration policies.

---

## Infrastructure & Exposure (Tailscale)

The infrastructure leverages **Tailscale Funnel** to securely expose the application behind a unified domain without complex external SSL certificate management.

- **Docker Isolation:** Containers communicate within an internal Docker network, only the host Linux machine relays public traffic via Tailscale.


> **Page Under Construction**  
> This page is currently under construction. New sections and code snippets will be added very soon!
