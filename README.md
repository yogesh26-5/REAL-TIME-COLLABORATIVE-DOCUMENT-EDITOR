*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: K YOGESH RAM

*INTERN ID*: CT04WU09

*DOMAIN*: FRONT END WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

The Real-Time Collaborative Document Editor, is a web-based application that enables multiple users to edit the same document simultaneously with real-time updates. It aims to recreate the collaborative experience similar to platforms like Google Docs, but with a simplified architecture using modern frameworks and tools. Built with React.js for the frontend, Node.js + Express.js for the backend, Socket.IO for real-time communication, and MongoDB for document storage, the application demonstrates how powerful, scalable, and efficient real-time applications can be developed with open-source technologies.

The frontend is developed using React.js, ensuring a responsive and dynamic user experience. It uses React Router to handle document-specific URLs, allowing users to share and access documents directly. The document editing interface is built using Quill.js, a powerful rich-text editor that provides users with features like bold, italics, underline, lists, and heading formatting. The UI is kept minimalistic to focus purely on the editing experience, with a clean, white workspace and an intuitive toolbar for text customization.

The backend is powered by Node.js with the Express.js framework. It handles API routes and initializes the real-time server using Socket.IO.  Each time a user accesses or creates a document, the server either retrieves the existing document from MongoDB or creates a new one if it doesn’t exist. All editing actions are transmitted as "deltas" — small JSON objects describing the change — which are broadcast in real time to other users connected to the same document room. This efficient communication ensures that all users see updates instantly, creating a seamless collaborative environment.

MongoDB serves as the database,  storing document data using a simple schema that associates the document ID with its content.  The application periodically saves the document in the background every few seconds, ensuring that users’ work is not lost even if they disconnect abruptly. MongoDB’s flexible, JSON-like structure makes it ideal for storing rich text documents edited through Quill.js.

The real-time collaboration feature is achieved by leveraging Socket.IO. When a user makes a change in the document, the editor emits a send-changes event to the server, which then broadcasts the change to all other clients connected to the same document. This ensures that edits appear across all user sessions without any need to refresh the page. Additionally, when a new user joins an existing document, the server emits a load-document event to sync the document state.

This project demonstrates best practices in modern web development, including modular code structure, efficient database usage, and real-time data synchronization. It is designed to be easily scalable, meaning more features like user authentication, document version history, and advanced permissions (read-only, edit access) could be added in the future.

In conclusion,  the Real-Time Collaborative Document Editor is a highly practical project that showcases the development of a real-time,  multi-user application using the MERN stack (MongoDB, Express.js, React.js, Node.js).  It highlights the potential of combining frontend reactivity with backend real-time communication to deliver a smooth and interactive user experience.  This project can serve as a foundation for more complex collaborative applications or as a learning model for understanding the architecture behind real-time web systems.

*OUTPUT*:

![Image](https://github.com/user-attachments/assets/db39c7d6-a402-4ab2-84a3-bd3b2ccd6e91)
