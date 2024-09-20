'use client'
import { useEffect, useState } from "react"

function FortuneGenerator() {
    const [fortunes, fortuneData] = useState([])

    async function generateFortune(){
        const res = await fetch ("http://localhost:8080/fortunes", {
            method: "GET",
        })
        const resJSON = await res.json()
        fortuneData(resJSON)
        }

    useEffect(() => {
        generateFortune()
    }, [])

    return(
        <div>
            <center>
                <button onClick = {generateFortune}>
                    Generate Fortune!!!
                </button>
            </center>
            <h2>Your Fortune:</h2>
            {fortunes.map((fortune) => {
                return(
                    <h1>
                        {fortune.fortuneList.at(Math.floor(Math.random()*3))}
                    </h1> // WHY DOES THIS NOT WORK!!!!!
                )
            })}
        </div>
    )
}

export default FortuneGenerator;