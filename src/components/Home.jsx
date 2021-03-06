import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Login from './Login';
import ArtistsCard from './ArtistsCard';
import { useCookies } from 'react-cookie';
import LeftNavBar from './LeftNavBar';

const HomeStyle = styled.div`
    /* display: flex; */
    background-color: #1b1919;
    width: 100%;
    margin-left: 13rem;

    .main_connect {
        margin: 0 auto;
        color: white;
        font-size: xx-large;
        height: 100vh;
    }

    .main_connect_p {
        margin-top: 6rem;
    }
    
    .artist_card_container {
        display: flex;
        flex-wrap: wrap;
        overflow-y: auto;
        margin-left: 6rem;
    }

    .main_login_home {
        width: 10%;
    }

    .page_title {
        color: white;
        margin-left: 13rem;
        border-bottom: 1px solid white;
        margin-left: 6rem;
        width: 84%;
        padding-top: 0.7rem;    
    }
    h2 {
        font-size: 50px;
    }
    
`;
export default function Home() {

    const [artists, setArtists] = useState(null);
    const tokentest = useCookies()[0].token;
    const list = 'ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,329e4yvIujISKGKz1BZZbO,66Ok6bgC570sHkw08N20pZ,6eUKZXaKkcviH0Ku9w2n3V,6W5uA6CNMf3hd2j4a2XWCx,1Xyo4u8uXC1ZmMpatF05PJ'

    useEffect(() => {
        fetch('https://api.spotify.com/v1/artists?'+list, {
            method: 'GET',
            headers: {
                Authorization: "Bearer " + tokentest
            }
        })
        .then(res => res.json())
        .then(res => {
            setArtists(res.artists)
        })
    }, [])

    if(!artists) {
        return (
            <HomeStyle>
                <div className="main_connect">
                    <p className="main_connect_p">Veuillez vous connecter pour accèder aux artistes..</p>
                </div>
            </HomeStyle>
        )
    } else {
        return (
            <HomeStyle>
                <div className="page_title">
                    <h2>ARTISTES</h2>
                </div>
                    <div className="artist_card_container">
                        {artists.map((artist, index) => {
                            return (
                                <ArtistsCard
                                key={index}
                                img={artist.images[1].url}
                                alt={artist.name}
                                name={artist.name}
                                followers={artist.followers.total}
                                id={artist.id}
                                />
                            )
                        })}
                    </div>
            </HomeStyle>
        )
    }

}