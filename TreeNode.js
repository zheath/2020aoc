const print = require("./helpers/print")

class TreeNode {
    constructor(parent, name, children){
        this.isRoot = parent ? false : true;
        this.name = name;
        this.children = children;
        this.isLeaf = children.length > 0 ? false : true;
    }
}

module.exports = TreeNode;