import React from 'react';

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    return (
        <div>
            <h2>This is news details page</h2>
        </div>
    );
};

export default NewsDetailsPage;