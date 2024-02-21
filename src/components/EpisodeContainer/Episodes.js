import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";

import {rickAndMortyService} from "../../services";
import {Episode} from "./Episode";

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    const [query, setQuery] = useSearchParams({page: '1'});
    const [prevNext, setPrevNext] = useState({prev: null, next: null})

useEffect(() => {
    rickAndMortyService.getAllEpisodes(query.get('page')).then(({data}) => {
        setEpisodes(data.results)
        setPrevNext({prev: data.prev, next: data.next})
    })

}, [query]);

    const prev = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') -1).toString())
            return prev
        })
    }

    const next = () => {
        setQuery(prev => {
            prev.set('page', (+prev.get('page') +1).toString())
            return prev
        })
    }


    return (
        <div>
            {
                episodes.map(episode => <Episode key={episode.id} episode={episode}/>)
            }

            <button disabled={prevNext.prev} onClick={prev}>Prev</button>
            <button disabled={prevNext.next} onClick={next}>Next</button>
        </div>
    );
};

export {Episodes};
