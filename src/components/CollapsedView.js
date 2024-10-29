import React from 'react';
import { ChevronDown } from 'lucide-react';

const CollapsedView = ({ item, onToggle }) => {
return (
    <div
    className="bg-white rounded-lg shadow p-4 flex justify-between items-center cursor-pointer"
    onClick={onToggle}
    >
    <h3 className="text-lg font-medium">{item.title}</h3>
    <ChevronDown className="text-gray-500" />
    </div>
);
};

export default CollapsedView;