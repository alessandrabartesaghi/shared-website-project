window.addEventListener('load', ()=>{
    var searchInputField = document.createElement('input');
    searchInputField.setAttribute('type', 'text');
    searchInputField.setAttribute('id', 'search-input');
    var searchBtn = document.createElement('button');
        searchBtn.textContent = 'Make aside nav';
        searchBtn.addEventListener('click', onSubmit);
    var mainEl = document.getElementById('main-container');
    mainEl.appendChild(searchInputField);
    mainEl.appendChild(searchBtn);
})

function onSubmit(){
    var inpField = document.getElementById('search-input');
    var asideNav = document.getElementById('aside-nav');
    var mainEl = document.getElementById('main-container');
    if(asideNav){
        mainEl.removeChild(asideNav);
    }
    var arr = inpField.value.trim().split(', ');
    var asideBarElement = document.createElement('aside');
    asideBarElement.setAttribute('id', 'aside-nav')
    var linksArr = [];

    for(var i = 0; i<arr.length; i++){
        linksArr.push(makeLinkTag(arr[i]));
    }

    var finalUlElement = generatingListOfLinks(linksArr);
    asideBarElement.appendChild(finalUlElement)

    mainEl.appendChild(asideBarElement)
}
   
   function generatingListOfLinks(links){
   
    var ulElement = document.createElement('ul');
   
    for(var i = 0; i<links.length; i++){
       var liElement = document.createElement('li');
       liElement.appendChild(links[i]);
       ulElement.appendChild(liElement);
    }
   
    return ulElement;
   
   }

   function makeLinkTag(name) {
    name = name.toLowerCase();
    if(name.includes('laura')){
       name = name.substring(0, name.length - 1) + name.substring(name.length - 1).toUpperCase();
    }
    var link = document.createElement('a');
    link.setAttribute('href', '/' + name + '.html');
    link.textContent = name;
    return link;
   }
   