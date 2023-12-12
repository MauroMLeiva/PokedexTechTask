import PokeCard from "./PokeCard";
import "../main.css";
import { useState, useEffect } from "react";
import {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonCol,
    IonGrid,
    IonRow,
    IonContent,
    IonApp,
    IonRefresher,
    IonRefresherContent,
    RefresherEventDetail,
} from "@ionic/react";

function PokeList(pokemonURL?: string[]) {
    const [items, setItems] = useState([]);
    console.log("ITEMS:", items);

    const generateItems = () => {
        if (items.length < pokemonURL?.url.length) {
            const newItems = [];
            for (let i = items.length; i < items.length + 30; i++) {
                newItems.push(pokemonURL?.url[i]);
            }
            setItems([...items, ...newItems]);
        }
    };

    const refreshItems = () => {
        items.sort(() => Math.random() - 0.5);
        setItems([...items]);
    };

    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            refreshItems();
            event.detail.complete();
        }, 1000);
    }

    function populateList() {
        return items.map((pokeURL: string) => (
            <IonCol>
                <PokeCard key={pokeURL} url={pokeURL} />
            </IonCol>
        ));
    }

    useEffect(() => {
        generateItems();
    }, []);

    return (
        <IonApp>
            <IonContent>
                <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <IonGrid>
                    <IonRow>{populateList()}</IonRow>
                </IonGrid>

                <IonInfiniteScroll
                    onIonInfinite={(ev) => {
                        generateItems();
                        setTimeout(() => ev.target.complete(), 500);
                    }}
                >
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>
        </IonApp>
    );
}
export default PokeList;
