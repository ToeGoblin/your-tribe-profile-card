const expandButton = document.querySelector('header button') ///Hier maak je de classes van de code
expandButton.addEventListener('click', expand) ///Hier classificeer wanneer de functie moet worden uitgevoerd

function expand () {
  document.body.classList.toggle('expand') ///Hier zegt de class dat de functie "expand" moet worden uitgevoerd, wat verder gebeurd en wordt gedefinieerd in de css
}
