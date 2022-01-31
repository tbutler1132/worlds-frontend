import React from 'react';

function EditPhotos() {

    const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const renderPhotos = () => {
        return photos.map(el => 
            <div className='pic-container'>
                Pic
            </div>
        )
    }

    return (
        <div>
            <div className="edit-photo-container">
                {renderPhotos()}
            </div>
        </div>
    );
}

export default EditPhotos;