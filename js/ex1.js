const bodyNodes = () => {
  function traverse(node, indent = "") {
    console.log(indent + "#" + node.nodeType);
    
    if (node.nodeType === 3) { 
      console.log(indent + node.textContent);
    } else if (node.nodeType === 1) { 
      console.log(indent + "<" + node.nodeName.toLowerCase() + ">...</" + node.nodeName.toLowerCase() + ">");
    }
    for (let child of node.childNodes) {
      traverse(child, indent + "  ");
    }
  }
  
  traverse(document.body);
}

bodyNodes();