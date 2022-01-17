export const initialState = {
    user: {
        "nickname": "",
        "password": "",
        "region": "",
        "security_question": "",
        "security_answer": "",
        "trusted": true,
        "active": true,
        "name": "",
        "email": "",
        "phone_number": "",
        "state": "",
        "city": "",
        "role": "",
        "createdAt": "",
        "updatedAt": "",
        "id": ""
    },
    token: "",
    social_networks: [
        {
            "id": "",
            "value": "",
            "name": ""
        }
    ]   ,
    regions: [
        {
            "id": "",
            "region": "",
            "state": "",
            "enabled": true
        }
    ]   ,
    animals: [
        {
            "id": "",
            "type": ""
        }
    ]   ,
    coorporations: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    positions: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    plcaces: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    genres: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    age_group: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    neighborhoods: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    cities: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    states: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    circumstances: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    status: [
        {
            "id": "",
            "name": "",
            "type": ""
        }
    ]   ,
    qualifications: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    transports: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    clippings: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    places: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    reasons: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    sources: [
        {
            "id": "",
            "name": ""
        }
    ]   ,
    policies: [
        {
            "id": "",
            "title": "",
            "description": "",
            "createAt": "",
            "updateAt": ""
        }
    ]   ,
    questions: [
        {
            "id": "",
            "title": "",
            "description": "",
            "createAt": "",
            "updateAt": ""
        }
    ]   ,
    posts: [
        {
            "user": "",
            "title": "",
            "date": "",
            "region": "",
            "image": "",
            "createAt": "",
            "updateAt": "",
            "id": ""
        }
    ]   ,
    statistics: [
        {
            "total_occurrences": 0,
            "percent_period_occurrences": 0,
            "with_dead": 0,
            "with_dead_percent": 0,
            "with_wounded": 0,
            "with_wounded_percent": 0,
            "no_wounded": 0,
            "no_wounded_percent": 0,
            "with_police_presence": 0,
            "with_police_presence_percent": 0,
            "number_of_dead_cops": 0,
            "number_of_dead_cops_presence": 0,
            "number_of_dead_civilians": 0,
            "number_of_dead_civilians_percent": 0,
            "total_number_of_dead": 0,
            "total_number_of_dead_percent": 0,
            "number_of_wounded_cops": 0,
            "number_of_wounded_cops_percent": 0,
            "number_of_wounded_civilians": 0,
            "number_of_wounded_civilians_percent": 0,
            "total_number_of_wounded": 0,
            "total_number_of_wounded_percent": 0
        }
    ]   ,
    victims: [
        {
            "occurrence": "",
            "type": "",
            "situation": "",
            "type_person": "",
            "death_date": "",
            "name": "",
            "age": 0,
            "genre": "",
            "circumstances": [ 
                { "id": "" },
            ],
            "place": "",
            "age_group": "",
            "general_observation": "",
            "qualifications": [
                { "id": "" },
            ],
            "service_status": "",
            "agent_status": "",
            "coorporation": "",
            "agent_position": "",
            "unit": "",
            "political_satus": "",
            "political_position": "",
            "political_party": "",
            "political_observation": "",
            "animal_type": {
                "description": "",
            },
            "id": ""
        }
    ]   ,
    occurrences: [
        {
            "address": "",
            "country": "",
            "state": "",
            "city": "",
            "neighborhood": "",
            "latitude": "",
            "longitude": "",
            "date": "",
            "agent_presence": true,
            "police_action": true,
            "number_civilians_dead": "",
            "number_civilians_wounded": "",
            "number_agent_dead": "",
            "number_agent_wounded": "",
            "description": "",
            "source": "",
            "related_record": "",
            "region": "",
            "main_reason": "",
            "complementary_reasons": [ 
                { "id": "" },
            ],
            "massacre": true,
            "police_unit": "",
            "interrupted_transport": true,
            "related_news": "",
            "clippings": [
                { "id": "" },
            ],
            "observations": "",
            "transports": [
                { "id": "" },
            ],
            "date_interruption": "",
            "release_date": "",
            "transport_description": "",
            "status": "",
            "user": "",
            "admin": "",
            "createAt": "",
            "updateAt": "",
            "id": "",
            "victims": [
                "",
            ],
            "document_number": 0,
        }
    ]    ,
    idVictims: -1,
    victimsList: [
        {
            "occurrence": "",
            "type": "",
            "situation": "",
            "type_person": "",
            "death_date": "",
            "name": "",
            "age": 0,
            "genre": "",
            "circumstances": [
              {
                "id": ""
              }
            ],
            "place": "",
            "age_group": "",
            "general_observation": "",
            "qualifications": [
              {
                "id": ""
              }
            ],
            "service_status": "",
            "agent_status": "",
            "coorporation": "",
            "agent_position": "",
            "unit": "",
            "political_status": "",
            "political_position": "",
            "political_party": "",
            "political_observation": "",
            "animal_type": {}
          }          
    ]     
}