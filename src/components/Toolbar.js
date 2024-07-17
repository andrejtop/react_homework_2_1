import React from 'react';

const Toolbar = ({filters, selected, onSelectFilter}) => {
    return (
        <div className="flex flex-row p-2 mx-1">
            {filters.map((filter) =>
                <button
                    type="button"
                    className={"border border-black px-2 mx-2 " + (filter === selected ? 'text-white bg-gray-800' : 'text-black bg-white')}
                    onClick={() => onSelectFilter(filter)}
                    disabled={filter === selected}
                    key={filter}
                >
                    {filter}
                </button>
            )}
        </div>
    );
};

export default Toolbar;