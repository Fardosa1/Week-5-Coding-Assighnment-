class MenuList { 
    constructor (coffeeName, price){
        this.coffeeName = coffeeName;
        this.price = price;
     // This portion of the code creates a class that represents the menu list, It also has a constructor function that has two paramaters, name and price.
     // Name of the menu list = value on name parameter. Price on menu = value of price paramater.

    }
}

class ShaaxMenu{
    constructor(){
        this.list = [];
    }
    // This portion of the code is for the coffee menu and has a contructor function with an empty array apart of the menu list! 
    


plusItem (coffeeName, price){
    let newList = new MenuList(coffeeName, price);
    this.list.push(newList);
    // This portion of the code has a function that creates a new menuList item and the name and price are paramaters.
    // The newList function pushes any new names or manu items into the list array!

}

viewList() {
    for (let list of this.list) { 
        console.log(list.coffeeName + ": $" + coffeeName.price);
    // This portion of the code has a for loop that goes through the list array and it consol.logs all the coffee items listed plus their price
    }

deleteList(coffeeName)
for (let i = 0; i < this.list.length; i++) {
    if (this.list[i].coffeeName === coffeeName) {
        this.list.splice (i, 1);
    // This portion of the code has a forloop that goes through the coffeeName array! When the names in the list match the names thats passing in the function, then the item is removed from the list :()
    }
}

let newList = new ShaaxMenu // This part of the code creates a the ShaaxMenu and assighns to variable newList
newList.plusItem( 'ColdShaax', 7.50)
newList.plusItem( 'HotShaax', 7.50)
newList.plusItem( 'IcedShaax', 7.50)
newList.plusItem( 'BlendedShaax', 7.50)
newList.plusItem( 'MatchaShaax', 7.50) 
// This portion of the code is adds the prices and names of coffes to the coffee Menu
console.log ("IcedShaax") // Shows the IcedShaax option on the menu!
newList.viewList // This prints out all of the coffee options and prices to the menu
newList.deleteList("ColdShaax") // This deletes the coffee ColdShaax from the menu 
}
}

