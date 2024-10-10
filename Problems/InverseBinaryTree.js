function InverseBinaryTree(tree){
    if(tree === null){
        return null;
    }

    let left = InverseBinaryTree(tree.left);
    let right = InverseBinaryTree(tree.right);

    tree.left = right;
    tree.right = left;

    return tree;
}