import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../api';

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const result = await api.get("https://api.twitch.tv/helix/games/top");
          //console.log(result.data);
          let dataArray = result.data.data;
          let finalArray = dataArray.map(game => {
            let newURL = game.box_art_url
              .replace("{width}", "200")
              .replace("{height}", "200");
            game.box_art_url = newURL;
            return game;
          });
          console.log(finalArray);
          setGames(finalArray);
        };
        fetchData();
    }, []);

    return (
        <div>
          <h1 className="well text-center">Most Popular Games</h1>
          <div className="row">
            {games.map(game => (
              <div className={game.id + " col-lg-4 col-md-6 col-sm-12 mt-5"}>
                <div className="card">
                  <img className="card-img-top" alt="" src={game.box_art_url} />
                  <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <button className="btn btn-success">
                      <Link
                        className="link"
                        to={{
                          pathname: "game/" + game.name,
                          state: {
                            gameID: game.id
                          }
                        }}
                      >
                        {game.name} streams{" "}
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
}

export default Games