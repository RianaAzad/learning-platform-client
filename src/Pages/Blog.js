import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='my-5 text-center fw-bold fst-italic fs-1'>Some Important Questions</h2>
            <div className='my-3 fs-5'>
            <h3 className='bg-dark text-white p-2 ps-4 rounded m-0'>What is Cors?</h3>
            <p className='bg-info bg-opacity-10 m-0 p-3'>Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy. CORS defines a way in which a browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.</p>
            </div>

            <div className='my-3 fs-5'>
                <h3 className='bg-dark text-white p-2 ps-4 rounded m-0'>Why are you using firebase?</h3>
                <p className='bg-warning bg-opacity-10 m-0 p-3'>Firebase is a set of hosting services for any type of application (Android, iOS, Javascript, Node.js, Java, Unity, PHP, C++ ...). It offers NoSQL and real-time hosting of databases, content, social authentication (Google, Facebook, Twitter and Github), and notifications, or services, such as a real-time communication server.</p>
                <p className='bg-warning bg-opacity-10 m-0 p-3'>We use firebase for the following reasons:
                <ul>
                    <li>For making high quality apps</li>
                    <li>We can track users' journey through realtime and custom reporting</li>
                    <li>It is easy and friendly to use</li>
                    <li>Easy to set up and can be used in wide range of devices.</li>
                </ul></p>
                
            </div>

            <div className='my-3 fs-5'>
                <h3 className='bg-dark text-white p-2 ps-4 rounded m-0'>How does the private route work?</h3>
                <p className='bg-danger bg-opacity-10 m-0 p-3'>The private route component is used to protect selected pages in a React app from unauthenticated users. The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            </div>

            <div className='my-3 fs-5'>
                <h3 className='bg-dark text-white p-2 ps-4 rounded m-0'>What is Node? How does Node work?</h3>
                <p className='bg-primary bg-opacity-10 m-0 p-3'>Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021. Developers use Node</p>
                <p className='bg-primary bg-opacity-10 m-0 p-3'> It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                <p className='bg-success bg-opacity-10 m-0 p-3'><strong><i>Working Procedure:</i></strong> Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request. Node.js basically works on two concept
                <ul>
                    <li>Asynchronous</li>
                    <li>Non-blocking I/O</li>
                </ul>
                </p>
                
            </div>
        </div>
    );
};

export default Blog;