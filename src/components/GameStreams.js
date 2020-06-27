import React, { useState, useEffect } from "react";
import api from "../api";

function GameStreams({match, location}) {
    const [streamData, setStreamData] = useState([]);
    const [viewers, setViewers] = useState(0);

    useEffect(() =>{
        const fetchData = async () => {
            const result = await api.get(`https://api.twitch.tv/kraken/streams/?game=${location.state.gameName}`);
        

        let dataArray = result.data.streams;
        let finalArray = dataArray.map(stream => {
            return stream;
        });

        let totalViewers = finalArray.reduce((acc, val) => {
            return acc + val.viewers;
        }, 0);
        setViewers(totalViewers);
        setStreamData(finalArray);
    };
        fetchData();
    }, []);

    return (
        <div>
          <h1 className="text-center">{match.params.id} Streams</h1>
          <h3 className="text-center">
            <strong className="text-primary">{viewers}</strong> people currently
            watching {match.params.id}
          </h3>
          <div className="row">
            {streamData.map(stream => (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                <div className="card">
                  <img className="card-img-top" src={stream.preview.large} />
                  <div className="card-body">
                    <h5 className="card-title">{stream.channel.status}</h5>
                    <div className="card-text">
                      {stream.viewers} live viewers
                    </div>
                    <button className="btn btn-success">
                      <a
                        className="link"
                        href={stream.channel.url}
                        target="_blank"
                      >
                        <strong>watch {stream.channel.name}'s channel</strong>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default GameStreams