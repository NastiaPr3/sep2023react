const Rocket = ({item:{mission_name, launch_year, links: {mission_patch_small}}}) => {

    return (
        <div>
            <h3>{mission_name}</h3>
            <h3>{launch_year}</h3>
            <img src={mission_patch_small} alt="rocket"/>
        </div>
    );
};

export {Rocket};