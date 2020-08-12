/**
 * 二叉树类
 * 使用方式：
 * 1、新建二叉树 var BT = new BinaryTree([10,5,12,3,7,2,4]);
 * 2、二叉树遍历 BT.search()
 * 3、查询和为22的二叉树路径  BT.querySum(22)
 */

class Node {
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}
class BinaryTree {
    constructor(numList){
        this.root = null
        if(numList instanceof Array){
            this.numList = numList;
            this.init();
        }else{
            throw Error('参数必须是数组')
        }
    }
    init(){
        this.numList.map((num) => {
            // console.log(num);
            this.insert(num);
        })
    }
    insert(value){
        if(this.root === null){
            this.root = new Node(value);
        }else{
            insertNode(this.root, value)
        }

        function insertNode(node, value){
            if(value < node.value){
                if(node.left === null){
                    node.left = new Node(value);
                }else{
                    insertNode(node.left, value);
                }
            }else{
                if(node.right === null){
                    node.right = new Node(value);
                }else{
                    insertNode(node.right, value);
                }
            }
        }
    }

    search() {
        let pNode, nodes = [this.root];
        let result = [];
        while(nodes.length > 0){
            /**=========广度优先遍历========== */
            //pNode = nodes[0];
            //nodes = nodes.splice(1);
            /**============================ */
            /**=========深度优先遍历========== */
            pNode = nodes.pop();
            
            if(pNode.right !== null){
                nodes.push(pNode.right);
            }
            /**============================ */
            
            if(pNode.left !== null){
                nodes.push(pNode.left);
            }

            /**=========广度优先遍历========== */
            /* if(pNode.right !== null){
                nodes.push(pNode.right);
            } */
            /**============================ */

            result.push(pNode.value);
        }
        return result;
    }

    querySum(sum){
        let result = [];
        treePath(this.root, '', 0);
        console.log(result);
        if(result.length){
            return result;
        }else{
            return 'error';
        }
        function treePath(pNode, path, count){
            if(pNode === null) return;
            path += `${path ? '->' : ''}${pNode.value}`;
            count += pNode.value;
            treePath(pNode.left, path, count);
            treePath(pNode.right, path, count);
            if(pNode.right === null && pNode.left === null){
                if(count === sum) {
                    result.push(path);
                }
            }
        }
    }
}

export default BinaryTree;