import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Import existing images
import lake from "../../assets/film/gold_200/lake.jpeg";
import balance from "../../assets/film/gold_200/balance.jpeg";
import madison from "../../assets/film/gold_200/madison.jpeg";
import glimmer from "../../assets/film/gold_200/glimmer.jpeg";

// Keep using your existing CSS
import '../../css/global/left-align.scss';
import '../../css/photo/photo.scss';

type Photo = {
    url: string;
    alt: string;
};

type PhotoGroup = {
    title: string;
    photos: Photo[];
};

const Film = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedPhoto) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedPhoto]);

    const photoGroups: PhotoGroup[] = [
        {
            title: "Kodak Gold 200",
            photos: [
                { url: lake, alt: "A blue lake with mountains in the background" },
                { url: madison, alt: "Madison taking a photo of the water" },
                { url: balance, alt: "Person walking along a log on the water" },
                { url: glimmer, alt: "Defocused view of a lake and mountains" }
            ]
        }
    ];

    return (
        <div>
            <h1>Film</h1>
            <h5>All photos shot on Nikon FE with a Micro-NIKKOR 55mm f/2.8 lens</h5>

            {photoGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="left-align">
                    <h3>{group.title}</h3>
                    <div className="image-container">
                        {group.photos.map((photo, photoIndex) => (
                            <div
                                key={photoIndex}
                                className="image-wrapper"
                                onClick={() => setSelectedPhoto(photo)}
                            >
                                <img src={photo.url} alt={photo.alt} />
                                {/*<div className="overlay">*/}
                                {/*    <p>Click to expand</p>*/}
                                {/*</div>*/}
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {/* Photo Modal */}
            {selectedPhoto && (
                <div
                    className={`photo-modal ${selectedPhoto ? 'visible' : ''}`}
                    onClick={() => setSelectedPhoto(null)}
                >
                    <button
                        className="photo-modal__close"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <X size={24} />
                    </button>
                    <img
                        src={selectedPhoto.url}
                        alt={selectedPhoto.alt}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Film;