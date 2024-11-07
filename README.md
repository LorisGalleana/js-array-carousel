---

# JS-ARRAY-CAROUSEL

## Descrizione

Il progetto **JS-Array-Carousel** ha come obiettivo la creazione di un carosello dinamico di immagini. L'utente può navigare tra le immagini tramite le frecce e visualizzare le miniature. Il carosello si basa su un array di cinque immagini e permette un'interazione dinamica con il contenuto.

### Obiettivi del progetto

1. **Milestone 1 - Struttura Base**:
   - Creare il markup statico per il carosello.
   - Inserire un’immagine grande al centro del container.
   - Costruire la struttura base e gli stili per prepararsi alla parte logica.

2. **Milestone 2 - Caricamento Dinamico**:
   - Rimuovere il markup statico e caricare dinamicamente le immagini usando un array e un ciclo `for`.
   - La prima immagine sarà visibile, le altre saranno nascoste, tranne quella attiva.

3. **Milestone 3 - Navigazione del Carosello**:
   - Al click delle frecce, cambiare l’immagine attiva e aggiornarla visibilmente.

### Bonus

1. **Bonus 1 - Ciclo Infinito**:
   - Aggiungere la funzionalità del ciclo infinito: quando si arriva alla prima o all'ultima immagine, il carosello riparte rispettivamente dall'ultima o dalla prima.

2. **Bonus 2 - Thumbnails**:
   - Visualizzare le miniature delle immagini sulla destra del carosello.
   - Gestire l'opacità delle miniature: quella corrispondente all’immagine attiva avrà un bordo colorato, mentre le altre avranno un layer di opacità scura.
   - Al click delle frecce, oltre al cambio dell’immagine, cambiare anche la miniatura attiva.

### Tecnologie Utilizzate

- **HTML5**: per la struttura del carosello.
- **CSS3**: per la stilizzazione del carosello e delle miniature.
- **JavaScript**: per la logica del carosello, la navigazione tra le immagini e il caricamento dinamico.

## Struttura del Progetto

- `index.html`: Contiene il markup iniziale con il carosello e le frecce.
- `style.css`: Il file che contiene gli stili per il carosello, le miniature e l'interazione.
- `script.js`: La logica JavaScript per caricare dinamicamente le immagini, gestire le frecce e implementare il ciclo infinito e la selezione delle miniature.

---
