import React from 'react';

const ExpandedView = ({ item }) => {
return (
    <div className="bg-white rounded-lg shadow p-4">
    <h3 className="text-xl font-bold">{item.title}</h3>
    <p className="text-gray-600">{item.description}</p>
    </div>
);
};

export default ExpandedView;