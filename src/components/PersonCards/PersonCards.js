import { useContext } from "react"
import PersonCard from "../PersonCard";
import { PersonCardsContext } from "../../store/PersonCardsProvider";

const PersonCards = () => {

    const PersonCardsCtx = useContext(PersonCardsContext);

    return (
        <div>
            {
                PersonCardsCtx.personCards.map((personCard) => {
                    return (
                        <PersonCard key={personCard.id} personCard={personCard} />
                    )
                })
            }
        </div>
    );

}

export default PersonCards;