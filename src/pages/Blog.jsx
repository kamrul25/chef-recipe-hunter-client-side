import React from 'react';

const Blog = () => {
    return (
        <div>
            <header className="-mt-36 bg-gray-300 text-center">
                <h1 className="text-3xl font-extrabold mt-36 pt-12">Blogs Page</h1>
        <p className="text-xl font-medium mt-5 pb-20">Here you will find your question and answer...</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-6 w-10/12 mx-auto">
                    <div className="p-5 rounded-lg shadow-lg border">
                        <h1 className='text-2xl font-medium'>1.What is the difference between uncontrolled and controlled components?</h1>
                        <p className='text-lg text-gray-400 ml-3'>Answer: In React, controlled components refer to components that have their state and behavior controlled by the  parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</p>
                    </div>
                    <div className="p-5 rounded-lg shadow-lg border">
                        <h1 className='text-2xl font-medium'>2.How to validate React props using PropTypes?</h1>
                        <p className='text-lg text-gray-400 ml-3'>Answer: PropTypes to validate React props is an essential part of building robust and maintainable React applications. By defining the expected types for your props, you can catch errors early on in the development process and ensure that your code is more reliable and easier to maintain.</p>
                    </div>
                    <div className="p-5 rounded-lg shadow-lg border">
                        <h1 className='text-2xl font-medium'>3. What is the difference between nodejs and express js? </h1>
                        <p className='text-lg text-gray-400 ml-3'>Answer:  NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</p>
                    </div>
                 
                    <div className="p-5 rounded-lg shadow-lg border">
                        <h1 className='text-2xl font-medium'>4. What is custom hook and why you create a custom hook? </h1>
                        <p className='text-lg text-gray-400 ml-3'> Answer: A custom Hook is a JavaScript function whose name starts with "use" and that may call other Hooks. It can be reused easily, which make the code cleaner and reduces the time to write the code. If I have code in a component that you feel would make sense to extract, either fro reuse elsewhere, I can pull that out into a function. </p>
                    </div>
                 
            </div>
        </div>
    );
};

export default Blog;