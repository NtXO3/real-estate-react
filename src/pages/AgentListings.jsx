import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Listing from '../components/Listing';
import ListingSkeleton from '../components/ListingSkeleton';
import { housesData } from '../data';

const AgentListings = () => {
    const { agent } = useParams()
    const [activeAgent, setActiveAgent] = useState('')
    const [agentListings, setAgentListings] = useState([])
    const [isSkeleton, setIsSkeleton] = useState(true)

    const urlToName = (str) => {
        let arr = str.split('')
        arr[0] = arr[0].toUpperCase()

        for (let i = 0; i < arr.length; ++i) {
            if (arr[i] === '-') {
                arr[i] = ' '
            }
            if (arr[i - 1] === ' ') {
                arr[i] = arr[i].toUpperCase()
            }
        }

        return arr.join('')
    }

    const getAgent = () => {
        const agentName = urlToName(agent)
        setActiveAgent(agentName)
        const filteredListings = housesData.filter(item => item.agent.name === agentName)
        setAgentListings(filteredListings)
    }

    useEffect(() => {
        getAgent()
        setTimeout(() => {
            setIsSkeleton(false)
        }, 200)
    }, [])

    return (
        <section id="agent-listings">
            <div className="container">
                <div className="row">
                    <div className="agent__top--bar">
                        <div className="agent__info">
                            <img src={agentListings[0]?.agent?.image} alt="" className="agent__top--img" />
                            <h2 className="agent__top--name">{agentListings[0]?.agent?.name}<br/> <span className='agent__top--sub-title'>Property Agent</span> </h2>
                        </div>
                        <a className="btn btn__primary agent__top--btn">Call</a>
                    </div>
                    <div className="listings__wrapper agent__listings">
                        {
                            isSkeleton ?
                            new Array(10).fill(0).map((_, index) => <ListingSkeleton key={index} />)
                            :
                            agentListings.map(item => <Listing key={item.id} listing={item} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AgentListings;
