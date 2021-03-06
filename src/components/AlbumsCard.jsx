import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const ArtistsCardStyle = styled.div`

    margin-top: 2rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-right: 2rem;
    
    .album_card_main {
        border-radius: 10px 10px 10px 10px;
        box-shadow: rgba(99, 99, 99, 0.2) 2px 2px 8px 2px;
        display: inline-block;
        text-align: center;
        img {
            width: 320px;
            height: 320px;
            border-radius: 10px;
        }
        a {
            text-decoration: none;
            color: white;
        }
        .smooth {
            color: grey;
        }
        .title {
            font-weight: bold;
        }
    }
`;
export default function AlbumsCard(props) {
    let history = useHistory();

    const handleId = (id) => {
        history.push(`/album_detail/${id}`)
    }
    return (
        <ArtistsCardStyle>
            <div className="album_card_main">
                <Link to="#" onClick={() => handleId(props.id)}>
                    <img src={props.img} alt={props.name} />
                    <p className="title">{props.name}</p>
                    <p className="smooth">Date de sortie : {props.release_date}</p>
                    <p className="smooth">Nombres de tracks : {props.total_tracks}</p>
                </Link>
            </div>
        </ArtistsCardStyle>
    )
}
