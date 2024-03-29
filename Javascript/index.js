class TabLink {
    constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab; 
      
    if(this.tabData === 'all'){
        this.profiles = document.querySelectorAll('.card');
        console.log(this.profiles);
    } else {
        this.profiles = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
        console.log(this.profiles);
    }
  
    this.profiles = Array.from(this.profiles).map(card => new TabCard(card));
  
    this.tabElement.addEventListener('click', () => {
        this.selectTab();
    });
      
    }
  
    selectTab(){
        const tabs = document.querySelectorAll('.team');
        tabs.forEach(tab => {tab.classList.remove('.active-tab')});
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {card.style.display = 'none'})
        this.tabElement.classList.add('active-tab');
        this.profiles.forEach(card => card.selectCard());
    }
  }
  
  class TabCard {
    constructor(cardElement){
        this.profileElement = cardElement;
        
    }
    selectCard(){
        this.profileElement.style.display = 'flex';
    }
  
  }
  
  let tabs = document.querySelectorAll('.team').forEach(tab  => {
    new TabLink(tab)
  });

// class dropDown {
//     constructor(element) {
//         this.element = element;

//         this.button = this.element.querySelector(REPLACEwithBUTTON);

//         this.content = document.querySelector(REPLACEwithCONTENT);

//         this.button.addEventListener('click', () => {
//             this.toggle();
//           })
//     }
    
//     toggle(){
//         this.content.classList.toggle(DROPclassHERE);
//     }
// }

// let dropdown = document.querySelectorAll().forEach( dropdown => new dropDown(dropdown));