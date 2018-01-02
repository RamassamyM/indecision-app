// let number = 0;

// const addOne = () => {
//     number++;
//     renderCount();
// };
// const removeOne = () => {
//     number--;
//     renderCount();
// };
// const reset = () => {
//     number = 0;
//     renderCount();
// };


// const renderCount = () => {
    // const templateTwo = (
        //         <div>
        //             <h1 id="num">Count : {number}</h1>
        //             <button onClick={addOne}>+1</button>
        //             <button onClick={removeOne}>-1</button>
        //             <button onClick={reset}>Reset</button>
        //         </div>
        //     );
        //     ReactDOM.render(templateTwo, appRoot);
        // }
        
// *************************************
        
// const app = {
//     title: "Indecision App",
//     subtitle: "Put your life in the hands of computer",
//     options: []
// }

// const onFormSubmit = (e) =>  {
//         e.preventDefault();
//         const option = e.target.elements.option.value;
//         if (option) {
//                 app.options.push(option);
//                 e.target.elements.option.value = '';
//                 render();
//     }
// };

// const removeAll = () => {
    //     app.options = [];
    //     render();
    // }
    
// const optionsToLi = () => app.options.map((option) => <li key={option}>{option}</li>);

// const onMakeDecision = () => {
    // const randomNum = Math.floor(Math.random() * app.options.length);
    // const option = app.options[randomNum];
    // alert(option);
// };

// const render = () =>  {
    //     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             {app.subtitle && <p>{app.subtitle}</p>}
//             <p>{app.options && app.options.length > 0 ? "Here are your options :" : "No options"}</p>
//             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
//             <button onClick={removeAll}>Remove all</button>
//             <ol>
//                 {optionsToLi()}
//             </ol>
            // <form onSubmit={onFormSubmit}>
            //     <input type="text" name="option" />
            //     <button>Add Option</button>
            // </form>
//         </div> 
//     );
//     ReactDOM.render(template, appRoot);
// }

// render();

// *************************************

// import { square, add } from './utils.js';
// import { isAdult, canDrink } from './person.js';

// console.log('app.js is running');
// console.log(square(4));
// console.log(add(4, 9));

// console.log('17', isAdult(17));
// console.log('19', isAdult(19));
// console.log('19', canDrink(19));
// console.log('21', canDrink(22));

// import isSenior from './person.js';
// console.log(isSenior(65)); // must return true
// console.log(isSenior(64)); // must return false

// import validator from 'validator';
// // on veut utiliser l'email validator here
// console.log(validator.isEmail('test@gmail.com'));

// ******************************************


// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);
//     }
//     getGreeting() {
//         return `Hi. My name is ${this.name}.`;
//     }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// // -------------------

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi. My name is ${this.name}.`;
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());