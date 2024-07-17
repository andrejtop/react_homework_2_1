import React from 'react';

const ProjectList = ({projects}) => {
    return (
        <div className="container mx-auto px-4 flex flex-row flex-wrap">
            {projects.map(((project, index) => {
                const {img, category} = project;
                return (
                    <div className="flex justify-center p-2 w-1/3" key={index + img}>
                        <img
                            src={img}
                            alt={category + " image"}
                            key={index + img + category}
                        />
                    </div >)
            }))}
        </div>


    );
};

export default ProjectList;