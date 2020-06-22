import React, { useEffect, useState } from "react";
import api from "../api";

function Stream() {
    const [channels, setChannels] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/kraken/streams");
            let dataArray = result.data.streams;

            let finalArray = dataArray.map(stream => {             
                return stream;
            });
        setChannels(finalArray);
    };
    fetchData();
    }, []);
    return (
        <div>
          <h1>Most Popular Live Streams</h1>
          <div className="row">
            {channels.map(channel => (
              <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
                <div className="card">
                  <img className="card-img-top" src={channel.preview.large} />
                  <div className="card-body">
                    <h3 className="card-title">{channel.channel.name}</h3>
                    <h5 className="card-text"> Playing {channel.game}</h5>
                    <div className="card-text">
                      {channel.viewers} live viewers
                    </div>
                    <button className="btn btn-success">
                      <a
                        href={channel.channel.url}
                        className="link"
                        target="_blank"
                      >
                        <strong>watch {channel.channel.name}'s' stream</strong>
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

export default Stream;