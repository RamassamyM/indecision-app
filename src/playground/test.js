// var nameVar = 'andrew';
// var nameVar = 'Mike';
// console.log('namevar', nameVar);

// let nameLet = "Jen";
// nameLet = "Julie";
// console.log('namelet', nameLet);

// const nameConst = "Jen";
// nameConst = "Julie";
// console.log('namelet', nameLet);

// const square = function(x) {
//     return x * x;
// };

// function squareFunction(x) {
//     return x * x;
// }

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrowShort = (x) => x * x;

// console.log(square(8));
// console.log(squareArrow(9));
// console.log(squareFunction(10));
// console.log(squareArrowShort(7));

// const getFirstName = (fullname) => fullname.split(' ')[0];
// console.log(getFirstName("Mike Smith"));

// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55,1));

// const add = (a, b) => {
//     console.log(arguments);
//     return a + b;
// }
// console.log(add(55,1));
// referenceError because arrow function : arguments object no longer bound like in function syntax


// le this n'est plus accessible dans le forEach : le trick c'est d'enregistrer le this 
// dans une const that et d'utiliser that. Car plus de bind avec this.
// arguments object - no longer bound with arrow functions
// quand on ajoute une fonction dans une propriété d'objet, le this est bindé 
// mais dans une function normale il n'y a plus de this bindé
// ça marche avec une arrow fonction car this est celui du contexte créé

// const user = {
//     name: "Andrew",
//     cities: ['Philadelphia', "New York", 'Dublin'],
//     printPlacesLived: function() { 
//         // si on utilis une arrow function ici, ça ne marche pas 
//         // car le this de cette arrow function n'est pas bindée sur sa valeur mais sur le parent scope
//         // pour utiliser this ici il faut utilser une ES2015 function
//         // mais autre façon de rédiger une méthode d'un objet in ES6 : voir après (du coup plus besoin de function())
//         console.log(this.name); // this accessible ici
//         console.log(this.cities);
//         const that = this;
//         this.cities.forEach((city) => {
//             console.log(this.name + ' has lived in ' + city);
//         });
//     }
// }
// user.printPlacesLived();

// const user1 = {
//     name: "Andrew",
//     cities: ['Philadelphia', "New York", 'Dublin'],
//     printPlacesLived() { 
//         return this.cities.map((city) => this.name + ' has lived in' + city + '!!');
//     }
// }
// console.log(user1.printPlacesLived());

// const multiplier = {
//     numbers: [1, 2, 3],
//     multiplyBy: 2,
//     multiply() {
//         return this.numbers.map((number) => number * this.multiplyBy);
//     }
// }
// console.log(multiplier.multiply());

// ****************************************
// const appRoot = document.getElementById('app');

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
// let visibility = false;

// const render = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button id='buttonToggle' onClick={toggleVisibility}>
//                 {visibility ? "Hide details" : "Show details"}
//             </button>
//             {visibility && <p>Hey. These are some details you can see!</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// render();

// ****************************************


// class Person {
//     constructor(name = 'anonymous', age = 0) {
//         this.name = name;
//         this.age = age;
//     }
//     getGreeting() {
//         return `Hi. I ${this.name}!`;
//     }
//     getDescription() {
//         return `${this.name} is ${this.age} year(s) old.`
//     }
// }

// class Traveler extends Person {
//     constructor(name, age, location = '') {
//         super(name, age);
//         this.location = location;
//     }
//     getGreeting() {
//         let greeting = super.getGreeting();
//         if (this.location) {
//             greeting += ` I am visiting from ${this.location}.`;
//         }
//         return greeting;
//     }
// }

// const me = new Traveler(undefined, undefined, 'Philadelphia');
// console.log(me.getGreeting());

// const other = new Traveler();
// console.log(other.getGreeting());

// ******************************************************

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.state = {count: props.count};
    }
    
    componentDidMount() {
        try {
            const count = parseInt(localStorage.getItem('count'), 10);
            if (!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState({count: this.state.count + 1 });
    }
    render() {
        const handleRemoveOne = () => {
            this.setState({count: this.state.count - 1});
        };
        const handleReset = () => {
            this.setState({count: 0});
        };
        return (
            <div>
                <h1>COUNT : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={handleRemoveOne}>-1</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 5
};

ReactDOM.render(<Counter />, document.getElementById('app'))

// ******************************************************

// const appRoot = document.getElementById('app');

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };
// let visibility = false;

// const render = () => {
//     const template = (
        // <div>
        //     <h1>Visibility Toggle</h1>
        //     <button id='buttonToggle' onClick={toggleVisibility}>
        //         {visibility ? "Hide details" : "Show details"}
        //     </button>
        //     {visibility && <p>Hey. These are some details you can see!</p>}
        // </div>
//     );
//     ReactDOM.render(template, appRoot);
// }
// render();

// ******************************************

// class VisibilityToggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
//         this.state = { visibility: false};
//     }
//     handleToggleVisibility() {
//         this.setState((prevState) => {
//             return {visibility: !prevState.visibility};
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Visibility Toggle</h1>
//                 <button id='buttonToggle' onClick={this.handleToggleVisibility}>
//                     {this.state.visibility ? "Hide details" : "Show details"}
//                 </button>
//                 {this.state.visibility && <p>Hey. These are some details you can see!</p>}
//             </div>
//         );
//     }
// }

// ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// **********************************************