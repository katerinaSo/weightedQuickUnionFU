// function to create an initial set
function createInitialSet(n) {
    let obj = {};
    let vals = [];
    for (let i = 0; i < n; i++) {
      vals[i] = [i];
    }
    return Object.assign(obj, vals);
  }
  
  // creating set of 10
  let objects = createInitialSet(10);
  
  /* 
  finction finds two values in our set and 
  unites values under one key (choosing the key of a longer array)
   */
  function quickWeightedFindUnion(a, b) {
    let roots = Object.keys(objects);
    let values = Object.values(objects);
  
  
    // to find
    function find(a) {
      while (a != roots[a]) {
        a = roots[a];
      }
      return a;
    }
  
  
    //   to find root 
    let root_of_a = find(a);
    let root_of_b = find(b);
  
    
    // check if they are united already
    if (root_of_a === root_of_b) {
      return;
    } else {
      //   if not united, determine longer array
      if (values[root_of_a].length > values[root_of_b].length) {
        roots[root_of_b] = root_of_a;
        values[root_of_a] = [...values[root_of_a], ...values[root_of_b]];
        delete values[root_of_b];
      } else {
        roots[root_of_a] = root_of_b;
        values[root_of_b] = [...values[root_of_b], ...values[root_of_a]];
        delete values[root_of_a];
      }
    }
  
    return Object.assign(objects, values);
  }