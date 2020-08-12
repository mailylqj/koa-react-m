module.exports = {
    create: function(context) {
        return {
            // 处理SwitchStatement类型语句
            VariableDeclarator: (node) => { 
                if(node.id.name.length < 2){
                    context.report(node, 'Variable names should be longer than 1 character'); 
                } 
            }
        };
    }
};