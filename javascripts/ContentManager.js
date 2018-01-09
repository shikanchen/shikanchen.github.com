class ContentManger {
    constructor (targetNode) {
        this.targetNode = targetNode;
    }
    p (str='', end='<br>') {
        $(this.targetNode).append(str+end);
    }
    rp (str='', end='<br>') {
        $(this.targetNode).empty();
        this.p(str, end);
    }

    setTarget (targetNode) {
        this.targetNode = targetNode;
    }
}