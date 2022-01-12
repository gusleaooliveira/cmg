type typeState = {
    user: {
        "nickname": string,
        "password": string,
        "region": string,
        "security_question": string,
        "security_answer": string,
        "trusted": boolean,
        "active": boolean,
        "name": string,
        "email": string,
        "phone_number": string,
        "state": string,
        "city": string,
        "role": string,
        "createdAt": string,
        "updatedAt": string,
        "id": string
    },
    token: string,
    social_networks: [
        {
            "id": string,
            "value": string,
            "name": string
        }
    ]   ,
    regions: [
        {
            "id": string,
            "region": string,
            "state": string,
            "enable": boolean
        }
    ]   ,
    animals: [
        {
            "id": string,
            "type": string
        }
    ]   ,
    coorporations: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    positions: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    plcaces: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    genres: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    age_group: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    neighborhoods: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    cities: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    states: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    circumstances: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    places: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    status: [
        {
            "id": string,
            "name": string,
            "type": string
        }
    ]   ,
    qualifications: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    transports: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    clippings: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    reasons: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    sources: [
        {
            "id": string,
            "name": string
        }
    ]   ,
    policies: [
        {
            "id": string,
            "title": string,
            "description": string,
            "createAt": string,
            "updateAt": string
        }
    ]   ,
    questions: [
        {
            "id": string,
            "title": string,
            "description": string,
            "createAt": string,
            "updateAt": string
        }
    ]   ,
    posts: [
        {
            "user": string,
            "title": string,
            "date": string,
            "region": string
            "image": string,
            "createAt": string,
            "updateAt": string,
            "id": string
        }
    ]   ,
    statistics: [
        {
            "total_occurrences": number,
            "percent_period_occurrences": number,
            "with_dead": number,
            "with_dead_percent": number,
            "with_wounded": number,
            "with_wounded_percent": number,
            "no_wounded": number,
            "no_wounded_percent": number,
            "with_police_presence": number,
            "with_police_presence_percent": number,
            "number_of_dead_cops": number,
            "number_of_dead_cops_presence": number,
            "number_of_dead_civilians": number,
            "number_of_dead_civilians_percent": number,
            "total_number_of_dead": number,
            "total_number_of_dead_percent": number,
            "number_of_wounded_cops": number,
            "number_of_wounded_cops_percent": number,
            "number_of_wounded_civilians": number,
            "number_of_wounded_civilians_percent": number,
            "total_number_of_wounded": number,
            "total_number_of_wounded_percent": number
        }
    ]   ,
    victims: [
        {
            "occurrence": string,
            "type": string,
            "situation": string,
            "type_person": string,
            "death_date": string,
            "name": string,
            "age": number,
            "genre": string,
            "circumstances": [ 
                { "id": string },
            ],
            "place": string,
            "age_group": string,
            "general_observation": string,
            "qualifications": [
                { "id": string },
            ],
            "service_status": string,
            "agent_status": string,
            "coorporation": string,
            "agent_position": string,
            "unit": string,
            "political_satus": string,
            "political_position": string,
            "political_party": string,
            "political_observation": string,
            "animal_type": {
                "description": string,
            },
            "id": string
        }
    ]   ,
    occurrences: [
        {
            "address": string,
            "country": string,
            "state": string,
            "city": string,
            "neighborhood": string,
            "latitude": string,
            "longitude": string,
            "date": string,
            "agent_presence": boolean,
            "police_action": boolean,
            "number_civilians_dead": string,
            "number_civilians_wounded": string,
            "number_agent_dead": string,
            "number_agent_wounded": string,
            "description": string,
            "source": string,
            "related_record": string,
            "region": string,
            "main_reason": string,
            "complementary_reasons": [ 
                { "id": string },
            ],
            "massacre": boolean,
            "police_unit": string,
            "interrupted_transport": boolean,
            "related_news": string,
            "clippings": [
                { "id": string },
            ],
            "observations": string,
            "transports": [
                { "id": string },
            ],
            "date_interruption": string,
            "release_date": string,
            "transport_description": string,
            "status": string,
            "user": string,
            "admin": string,
            "createAt": string,
            "updateAt": string,
            "id": string,
            "victims": [
                string,
            ],
            "document_number": number,
        }
    ],
    idVictims: number       
}

export interface RootState  {
    clickState: typeState
}