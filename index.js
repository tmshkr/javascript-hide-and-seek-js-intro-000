function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n){
  let nodes = document.querySelectorAll('.ranked-list li')
  
  for (let i = 0; i < nodes.length; i++)
    nodes[i].innerHTML = parseInt(nodes[i].innerHTML) + n
}

function deepestChild(){
  function deepestChild(){
  var current = document.getElementById('grand-node')

  while (current.hasChildNodes()){
    debugger
    current = current.children[0]
  }
  return current
}
}