

const Blogs = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
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
                        <p>A refresh token is also issued by an authentication server, usually alongside the access token. </p>
                        <p>When a user authenticates and logs in, the server issues both an access token and a refresh token. The access token is sent with each subsequent request to the server as proof of authentication and authorization. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to log in again. The client sends the refresh token to a dedicated endpoint on the server. The server validates the refresh token and, if valid, generates a new access token and returns it to the client. This way, the user's session can be maintained without the need for repeated logins.</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#1C0E0B]">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div className="pl-4 pt-4">
                        <p>An access token is a credential that is issued by an authentication server (such as Firebase, OAuth providers, or custom authentication systems) to authenticate and authorize requests made by a client application.</p>
                        <p>A refresh token is also issued by an authentication server, usually alongside the access token. </p>
                        <p>When a user authenticates and logs in, the server issues both an access token and a refresh token. The access token is sent with each subsequent request to the server as proof of authentication and authorization. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to log in again. The client sends the refresh token to a dedicated endpoint on the server. The server validates the refresh token and, if valid, generates a new access token and returns it to the client. This way, the user's session can be maintained without the need for repeated logins.</p>
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-[#1C0E0B]">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
                    <div className="pl-4 pt-4">
                        <p>An access token is a credential that is issued by an authentication server (such as Firebase, OAuth providers, or custom authentication systems) to authenticate and authorize requests made by a client application.</p>
                        <p>A refresh token is also issued by an authentication server, usually alongside the access token. </p>
                        <p>When a user authenticates and logs in, the server issues both an access token and a refresh token. The access token is sent with each subsequent request to the server as proof of authentication and authorization. If the access token expires, the client can use the refresh token to obtain a new access token without requiring the user to log in again. The client sends the refresh token to a dedicated endpoint on the server. The server validates the refresh token and, if valid, generates a new access token and returns it to the client. This way, the user's session can be maintained without the need for repeated logins.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;