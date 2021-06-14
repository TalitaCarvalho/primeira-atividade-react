import data from "../data";

function Card(props) {
        return (
            <div>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.description}</p>
                <img src={data.img} alt="programadora feliz"/>
            </div>
        )
        
}

export default Card
