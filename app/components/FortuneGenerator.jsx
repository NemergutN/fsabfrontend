'use client'
import { useEffect, useState } from "react"

function FortuneGenerator() {
    const [fortunes, fortuneData] = useState([])

    async function generateFortune() {
        const res = await fetch("http://localhost:8080/fortunes", {
            method: "GET",
        })
        const resJSON = await res.json()
        fortuneData(resJSON)
    }

    useEffect(() => {
        generateFortune()
    }, [])

    return (
        <div>
            <center>
                <button onClick = {generateFortune}>
                    Generate Fortune!!!
                </button>
            </center>
            <h2>Your Fortune:</h2>
            {
                fortunes.map((fortune) =>
                    <center>
                        <h1 key={fortune.id}>
                            {fortune.fortuneList.at(Math.floor(Math.random()*3))}
                        </h1>
                    </center> // Why no work :(
                )
            }
        </div>
    )
}

export default FortuneGenerator;