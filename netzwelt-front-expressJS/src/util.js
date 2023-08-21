
/**
 * arrange the flatten territories into nested territory with respect to their parents
 * @param {*} territories : the flattend list of territories
 * @param {*} territoriesHierarchy : empty array for cache also the answer (memoization)
 * @param {*} parent : previous parent
 * @returns 
 */
function arrangeTerritoriesByParent(territories, territoriesHierarchy=[], parent=null) {
    if(territories.length == 0) return; 
    let ter = territories[0];

    if (ter.parent == null) {
        territoriesHierarchy.push(ter);
        territories.shift();
        arrangeTerritoriesByParent(territories, territoriesHierarchy, ter);
    } else {
        if (parent && parent.id == ter.parent) {
            territories.shift();
            if(!parent.childrens) {
                parent.childrens = [];
            }
            parent.childrens.push(ter);
            arrangeTerritoriesByParent(territories, territoriesHierarchy, ter);
            arrangeTerritoriesByParent(territories, territoriesHierarchy, parent);
        }
    }
}

module.exports = {
    arrangeTerritoriesByParent,
}