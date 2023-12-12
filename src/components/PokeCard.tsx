import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
} from "@ionic/react";
import { usePokemon } from "../hooks/usePokemon";

function PokeCard(url: any) {
    const { pokemon } = usePokemon(url.url);

    return (
        <IonCard color="warning">
            <IonCardHeader>
                <img alt="Pokemon Icon" src={pokemon?.sprites.front_default} />
                <IonCardTitle class="ion-text-center">
                    {pokemon?.name}
                </IonCardTitle>
                <IonCardSubtitle>
                    Peso:{(pokemon?.weight / 10).toFixed(1)} kg
                </IonCardSubtitle>
                <IonCardSubtitle>
                    Altura:{(pokemon?.height / 10).toFixed(1)} m
                </IonCardSubtitle>
                <IonCardSubtitle>
                    Exp: {pokemon?.base_experience}
                </IonCardSubtitle>
                <IonCardSubtitle>
                    Habilidades: {pokemon?.abilities[0].ability.name}
                </IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
}
export default PokeCard;
