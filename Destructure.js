// Destructure and Spread the Array 
const winnerList = ["bhubnesh", "Dinesh", "Sumitra", "Vamshi", "Kartik"]

const [firstPrice, secoundPrice, thirdPrice, ...consolation] = winnerList

// destructure the array and store hem in individual elements 
console.table([firstPrice,secoundPrice,thirdPrice])

// spread the rest of the elemnts into the consolation variable 
console.log(consolation);

// Destructure the json file 

//json file 

const users = [
        {
            "name" : "Bhubnesh",
            "points" : 24,
            "isLoggedIn" : false 
        },
        {
            "name" : "Dinesh",
            "points" : 21,
            "isLoggedIn" : true 
        },
        {
            "name" : "Sumitra",
            "points" : 20,
            "isLoggedIn" : false 
        },
        {
            "name" : "Vamshi",
            "points" : 19,
            "isLoggedIn" : false 
        },
        {
            "name" : "Kartik",
            "points" : 15,
            "isLoggedIn" : true
        }

    ]


for (const {name, points, isLoggedIn} of users){
if(isLoggedIn === true){
    console.log(name);
}
} 



// Destructure and spread the Object 

const shape = {
    "rectangle" : {
        height : 10,
        width : 15,
        // calArea : () => (this.height*this.width)
        calArea : function(){
            return this.height * this.width
        },
        calPerimeter : function(){
            return 2*(this.height + this.width)
        }
    },
    "circle" : {
        radius : 10,
        calArea : function(){
            return Math.PI*(this.radius**2)
        },
        calPerimeter : function(){
            return 2*Math.PI*(this.radius)
        }
    },
    "square" : {
        side : 10,
        calArea : function(){
            return this.side**2
        },
        calPerimeter : function(){
            return 4*(this.side)
        }
    },
}

const {rectangle : {height : h, width : w, calArea : area, calPerimeter : perimeter},
        circle : {radius : r, calArea : area, calPerimeter : perimeter},
        square : {side : s, calArea: area, calPerimeter : perimeter}} = shape