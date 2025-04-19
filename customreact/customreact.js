// creating the element
const element = {
    type : "a",
    props : {
        href : "https://google.com",
        target : "_blank",
    },
    children : "Google  Button",
}

// creating the injector function
function createElement(element , container){
    const domelement = document.createElement(element.type);

    domelement.innerHTML = element.children;
    for (const key in element.props) {
        domelement[key] = element.props[key];
    }

    container.appendChild(domelement);
}

// taking the reference root id where I need to inject the element
const mainContainer = document.querySelector('#root');

// calling the function to inject the elemt into id
createElement(element , mainContainer)