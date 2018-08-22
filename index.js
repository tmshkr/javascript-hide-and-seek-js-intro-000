function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < nodes.length; i++)
    nodes[i].innerText = parseInt(nodes[i].innerText) + n
}

function deepestChild(){
  
}