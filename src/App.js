import React, { useState, useEffect } from 'react';
import StackFramework from './services/StackFramework';

const App = () => {
const [framework, setFramework] = useState(null);

useEffect(() => {
    const stackFramework = new StackFramework();
    stackFramework.fetchData();
    setFramework(stackFramework);
}, []);

return (
    <div className="p-8">
    <h1 className="text-2xl font-bold mb-4">Stack Framework</h1>
    {framework && <framework.render />}
    </div>
);
};

export default App;