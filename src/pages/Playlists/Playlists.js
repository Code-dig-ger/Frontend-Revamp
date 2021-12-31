import React from 'react'
import './Playlists.css'

function Playlists(props) {
    console.log(props);
    return (
        <div style={{ background: "linear-gradient(270deg,#0f1111,#121314)" }}>
            <h1 style={{ textAlign: "center" , color:"white", fontSize: "40px"}}>Problem List</h1>
            <p style={{ textAlign: "center", color:"white", fontSize: "20px"}}>List of all your saved playlists</p>
            <div class="cards-list">
                <div class="card 1">
                    <div class="card_image">
                        <img src="https://media.istockphoto.com/vectors/abstract-financial-chart-with-line-graph-and-bar-chart-on-blue-color-vector-id951426272?k=20&m=951426272&s=612x612&w=0&h=YjsUQjk20jq6K1RsCynhHJENEToy7y3PCDlbuChsxC0=" />
                        <span class="dot"><p style={{ position:"absolute",
                    top:"9px", left:"15px", color:"black", fontSize:"30px"}}>10</p></span> 
                    </div>
                    <div class="card_title title-white">
                        <p>List-1</p>
                    </div>
                </div>
                
                <div class="card 2">
                    <div class="card_image">
                        <img src="https://media.istockphoto.com/vectors/abstract-financial-chart-with-line-graph-and-bar-chart-on-blue-color-vector-id951426272?k=20&m=951426272&s=612x612&w=0&h=YjsUQjk20jq6K1RsCynhHJENEToy7y3PCDlbuChsxC0=" />
                    </div>
                    <div class="card_title title-white">
                        <p style={{position: "absolute", top:"320px", left:"600px"}}>List-2</p>
                        <p>Questions: 10</p>
                    </div>
                </div>
 
                <div class="card 3">
                    <div class="card_image">
                        <img src="https://media.istockphoto.com/vectors/abstract-financial-chart-with-line-graph-and-bar-chart-on-blue-color-vector-id951426272?k=20&m=951426272&s=612x612&w=0&h=YjsUQjk20jq6K1RsCynhHJENEToy7y3PCDlbuChsxC0=" /> 
                    </div>
                    <div class="card_title">
                        <p style={{color:"white"}}>List-3</p>
                    </div>
                </div>

                <div class="card 4">
                    <div class="card_image">
                        <img src="https://media.istockphoto.com/vectors/abstract-financial-chart-with-line-graph-and-bar-chart-on-blue-color-vector-id951426272?k=20&m=951426272&s=612x612&w=0&h=YjsUQjk20jq6K1RsCynhHJENEToy7y3PCDlbuChsxC0=" /> 
                    </div>
                    <div class="card_title title-black">
                        <p>List-4</p>
                    </div>
                </div>
                
  
            </div>
        </div>
    )
}

export default Playlists
