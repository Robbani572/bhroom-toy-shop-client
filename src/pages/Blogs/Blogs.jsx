

const Blogs = () => {
    return (
        <div className="min-h-screen blogs-bg">
            <div className="flex items-center max-w-7xl container mx-auto justify-center p-8">
                <div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1C0E0B]">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                        <div className="pl-4 pt-4">
                            <p>An access token is a credential that is issued by an authentication server (such as Firebase, OAuth providers, or custom authentication systems) to authenticate and authorize requests made by a client application.</p>
                            <p>A refresh token is also issued by an authentication server, usually alongside the access token. </p>
                            <p>When a user authenticates and logs in, the server issues both an access token and a refresh token. The access token is sent with each subsequent request to the server as proof of authentication and authorization. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to log in again. The client sends the refresh token to a dedicated endpoint on the server. The server validates the refresh token and, if valid, generates a new access token and returns it to the client. This way, the user's session can be maintained without the need for repeated logins.</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-[#1C0E0B]">Compare SQL and NoSQL databases?</h3>
                        <div className="pl-4 pt-4">
                            <p>SQL (Structured Query Language) and NoSQL (Not Only SQL) databases are two different types of database management systems, each with its own strengths and use cases. Here are some key points of comparison between SQL and NoSQL databases:</p>
                            <ul className="pl-4">
                                <li>SQL databases use a relational data model on the otherhand NoSQL databases support various data models such as document-oriented, key-value pairs, column-family, and graph models.</li>
                                <li>SQL databases have a rigid schema, meaning that the structure of the tables and the relationships between them must be defined upfront but NoSQL databases offer a flexible schema, allowing the addition or modification of fields on the fly without disrupting the existing data.</li>
                                <li>SQL databases generally scale vertically but NoSQL databases are designed for horizontal scalability. It's important to note that the choice between SQL and NoSQL databases depends on the specific requirements when we build a application.</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1C0E0B]">What is express js? What is Nest JS?</h3>
                        <div className="pl-4 pt-4">
                            <p>Express ja:</p>
                            <p className="pl-4">Express.js is a minimalist web application framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs. Express.js is known for its lightweight nature and flexibility, allowing developers to have fine-grained control over the application's structure and functionality.</p>
                            <p className="mt-4">Nest js:</p>
                            <p className="pl-4">Nest.js is a TypeScript-based, progressive web application framework for building efficient, scalable, and maintainable server-side applications. It is built on top of Express.js and leverages TypeScript's features to provide a structured and opinionated framework for application development.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-[#1C0E0B]">What is MongoDB aggregate and how does it work</h3>
                        <div className="pl-4 pt-4">
                            <p>Aggregate is a framework of MongoDB it is a flexible and powerful tool for performing advanced data processing. There are few step to do aggregate operation:</p>
                            <ul className="pl-4">
                                <li>First of all matching stage, in this stage it's filter the documents based of specific criteria</li>
                                <li>Then we have to do projection stage, it's allows us to reshape the documents and we can enclude or exclude spacific fields</li>
                                <li>Then we comes to aggregate stage, MongoDB provides a varity of aggregation stages such as group, short, limit, skip, lookup</li>
                                <li>Finally we came to result stage</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;