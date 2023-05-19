import React from 'react';

const Blogs = () => {
    return (
        <div className='mb-5'>
            <h1 className='text-center font-bold text-white text-5xl p-5'>All Qustion </h1>
            <div tabIndex={1} className="collapse bg-sky-100 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is an access token and refresh token? How do they work and where should we store them on the client-side
                </div>
                <div className="collapse-content">
                    <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.Tokens: The server communicates with the authentication device, like a ring, key, phone, or similar device. After verification, the server issues a token and passes it to the user. Storage: The token sits within the user's browser while work continues</p>
                </div>
            </div>
            <div tabIndex={2} className="collapse  bg-sky-100 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse bg-sky-100 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is express js? What is Nest JS
                </div>
                <div className="collapse-content">
                    <p>NestJS is a framework for developing modern server-side applications in Node. js. It is built on top of Express, a popular server framework for Node. js, and provides a robust set of features for building efficient, scalable, and enterprise-grade applications</p>
                </div>
            </div>
            <div tabIndex={4} className="collapse  bg-sky-100 collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is MongoDB aggregate and how does it work
                </div>
                <div className="collapse-content">
                    <p>Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;