

console.log(45);

const blogTitle = document.getElementsByTagName('h1');

for (const h1 of blogTitle) {
    console.dir(h1);
}

const blogDetails = document.getElementsByTagName('p');

for (const p of blogDetails) {
    console.dir(p.innerText);
}

const secondPara = document.getElementById('second-paragraph');

secondPara.style.backgroundColor = 'yellow';
secondPara.style.color = 'black';
secondPara.style.margin = '20px';






// getElementsByClassName 



// queryselector select css selector 

const query = document.querySelectorAll('.blogs');

console.log(query);


// query is not an array but array like 


// we can also set attribute or get attribute value ,get parentnode , childnode, length

/* const secondTitle = document.querySelectorAll('#second-title')
console.log(secondTitle);
secondTitle.getAttribute('id'); */



//create and element by using javascript 

//step 1:

const li = document.createElement('li')
li.innerText = 'blog 6';


//step 2 where to add

const ul = document.getElementById('add-element')

// append 
ul.appendChild(li);



// egula style apply korar age likhte hobe 

const article = document.createElement('article')
article.classList.add('blogs')
const section = document.getElementById('add-article');
section.appendChild(article)


/* const h2 = document.createElement('h2')
h2.innerText = 'my first blog';
const p = document.createElement('p')
p.innerText = 'helloa a a lahfa amar sonar bangla ami tomay valobasi'

article.appendChild(h2);
article.appendChild(p);

const section = document.getElementById('add-article');
section.appendChild(article) */


// short method 

article.innerHTML = `
<h2> my first blog </h2>
<p> helloa a a lahfa amar sonar bangla ami tomay valobasi </p>
`


// styles bellow and sobar seshe add kora better 

const blogs = document.getElementsByClassName('blogs');

// plural tags elements e direct style apply kora jay na jekono loop er vitore rekhe style dite hobe . mot kotha jegular seshe s thakbe tader e loop e declare korte hobe.

/* blogs.style.color = 'red';
blogs.style.border = '3px solid';
blogs.style.backgroundColor = 'white';
blogs.style.margin = '30px';
blogs.style.padding = '25px'; */

for (const blog of blogs) {
    blog.style.border = '3px solid';
    blog.style.color = 'red';
    blog.style.backgroundColor = 'white';
    blog.style.margin = '30px';
    blog.style.padding = '25px';

}