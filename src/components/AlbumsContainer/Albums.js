import {useEffect, useState} from "react";
import {placeholderService} from "../../services/placeholder.service";
import {Album} from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        placeholderService.getAllAlbums().then(({data}) => setAlbums(data));
    }, []);


    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Albums};