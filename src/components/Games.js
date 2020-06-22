import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import api from '../api';

//loads an array of games and puts them into a shard-ui box
function Games() {
  //creates array that uses the state
    const [games, setGames] = useState([])
  /* uses a function named fetchData to get the info from Twitch's top games. 
  uses a data array to store the data
  final array is the combined info from box art width and height as well as a url from the box art name stored into a game object */
    useEffect(() => {
        const fetchData = async () => {
          const result = await api.get("https://api.twitch.tv/kraken/games/top?limit=20");
          //console.log(result.data);
          let dataArray = result.data.top;
          let finalArray = dataArray.map(game => {
            let newURL = game.game.box.template
              .replace("{width}", "200")
              .replace("{height}", "200");
              game.game.box.template = newURL;
            return game;
          });
          console.table(finalArray);
          setGames(finalArray);
        };
        fetchData();
    }, []);
    //the games component returns a shard-ui box with evcry game in the final array's info. 
    return (
        <div>
          <h1 className="well text-center">Most Popular Games</h1>
          <div className="row">
            {games.map(game => (
              <div key = {game.game._id} className={game.game.name + " col-lg-4 col-md-6 col-sm-12 mt-5"}>
                <div className="card">
                  <img className="card-img-top" alt="" src={game.game.box.large} />
                  <div className="card-body">
                    <h5 className="card-title">{game.game.name}</h5>
                    <button className="btn btn-success">
                      <Link
                        className="link"
                        to={{
                          pathname: "game/" + game.game.name,
                          state: {
                            gameName: game.game.name
                          }
                        }}
                      >
                        {game.game.name} streams{" "}
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