class ContentManger {
    constructor (targetNode) {
        this.targetNode = targetNode;
    }
    p (str='', end='<br>') {
        $(this.targetNode).append(str+end);
    }

    setTarget (targetNode) {
        this.targetNode = targetNode;
    }
}