import { Stack } from 'stack-typescript';

export interface TrieNode {

    value: string;
    children: Map<string, TrieNode>;
    isEndNode: boolean;
}



export class Trie {

    rootChildren: TrieNode;

    constructor() {
        this.rootChildren = {
            value: "",
            children: new Map<string, TrieNode>(),
            isEndNode: false
        }
    }

   public insertWord(word: string) : void{

        console.log(word);

        var currentNode = this.rootChildren;
        
        word.split('').forEach((currentChar) => {
            if(currentNode.children.get(currentChar)) {

                currentNode = currentNode.children.get(currentChar) as TrieNode;
            }else {
                var newNode = {
                    value: currentChar,
                    children: new Map<string, TrieNode>(),
                    isEndNode: false
                }

                currentNode.children.set(currentChar,newNode);
                currentNode = newNode;
            }
        })

        currentNode.isEndNode = true;


    }


    getSuggestions(word: string , limit?: number) : string[]{
       
        var results : string[] = [];
        var currentNode: TrieNode ;

        currentNode = this.rootChildren;


        for(const [idx,val] of word.split('').entries()){

            if(currentNode.children.get(val)){
                currentNode = currentNode.children.get(val) as TrieNode;
        
            }else{
                word = word.slice(0,idx);
            }
        }


        if(word.length>0){
            results = this.getAutoSuggest(currentNode,word,limit);
        }
        


        
        
       
    

        return results;


    }

    getAutoSuggest(currentNode: TrieNode, word: string, limit?: number){

        class StackNode {
            word: string;
            node: TrieNode;
        }

        var res = []


        let stack = new Stack<StackNode>();
        currentNode.children.forEach( (childNode) => {
            stack.push(
                {
                    word: word,
                    node: childNode
                }
            )
        });
        
        while(stack.size >0){

            var currentStackNode = stack.pop();
            console.log(currentStackNode)
            if(currentStackNode.node.isEndNode){
                res.push(currentStackNode.word+currentStackNode.node.value);
                if(limit && res.length > limit) return res;
                
            }

            if(currentStackNode.node.children.size >0){
                currentStackNode.node.children.forEach( (childNode) => {
                    stack.push(
                        {
                            word: currentStackNode.word + currentStackNode.node.value,
                            node: childNode
                        }
                    )
                });
            }

        }

        return res ;

    }

    

}